#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Test for explorer_sync.py against a small fake of the GitHub API.

Starts private regtest nodes and a local web server that answers the GitHub
API calls the sync program uses (refs, commits, trees, blobs). Checks that the
explorer is uploaded, that unchanged files are not uploaded again, that a new
block changes only a few files, that a different chain is not replaced by
accident and that a wrong token is reported.

Usage: test_explorer_sync.py [--bindir build/bin]
"""

import argparse
import base64
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import explorer as ex  # noqa: E402
import explorer_sync as sync  # noqa: E402
from test_explorer import Node, check  # noqa: E402

TOKEN = "test-token"


class FakeRepo:
    """Git objects in memory, enough for the calls of explorer_sync.py."""

    def __init__(self, files):
        self.lock = threading.Lock()
        self.blobs, self.trees, self.commits = {}, {}, {}
        self.patches = 0
        root = self.build({p: self.add_blob(d) for p, d in files.items()})
        self.head = self.add_commit(root, [], "initial")

    def add_blob(self, data):
        sha = sync.git_blob_sha(data)
        self.blobs[sha] = data
        return sha

    def add_commit(self, tree, parents, message):
        sha = hashlib.sha1(json.dumps([tree, parents, message, len(self.commits)]).encode()).hexdigest()
        self.commits[sha] = {"tree": tree, "parents": parents, "message": message}
        return sha

    def build(self, flat):
        """{path: blob sha} -> sha of the root tree (nested trees)."""
        entries, subdirs = {}, {}
        for path, sha in flat.items():
            first, _, rest = path.partition("/")
            if rest:
                subdirs.setdefault(first, {})[rest] = sha
            else:
                entries[first] = ("blob", sha)
        for name, sub in subdirs.items():
            entries[name] = ("tree", self.build(sub))
        sha = hashlib.sha1(json.dumps(sorted(entries.items())).encode()).hexdigest()
        self.trees[sha] = entries
        return sha

    def flat(self, tree, prefix=""):
        out = {}
        for name, (kind, sha) in self.trees[tree].items():
            if kind == "tree":
                out.update(self.flat(sha, prefix + name + "/"))
            else:
                out[prefix + name] = sha
        return out

    def files(self):
        return {p: self.blobs[s] for p, s in self.flat(self.commits[self.head]["tree"]).items()}


class FakeGitHubHandler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def reply(self, status, obj):
        body = json.dumps(obj).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_any(self, method):
        repo = self.server.repo
        if self.headers.get("Authorization") != f"Bearer {TOKEN}":
            return self.reply(401, {"message": "Bad credentials"})
        m = re.fullmatch(r"/repos/o/r/git/(.+?)(\?recursive=1)?", self.path)
        if not m:
            return self.reply(404, {"message": "Not Found"})
        what, recursive = m.group(1), bool(m.group(2))
        length = int(self.headers.get("Content-Length") or 0)
        body = json.loads(self.rfile.read(length)) if length else None
        with repo.lock:
            if method == "GET" and what == "ref/heads/main":
                return self.reply(200, {"object": {"sha": repo.head}})
            if method == "GET" and what.startswith("commits/"):
                c = repo.commits[what.split("/")[1]]
                return self.reply(200, {"tree": {"sha": c["tree"]}, "parents": c["parents"]})
            if method == "GET" and what.startswith("trees/"):
                sha = what.split("/")[1]
                if recursive:
                    items = [{"path": p, "type": "blob", "sha": s} for p, s in repo.flat(sha).items()]
                else:
                    items = [{"path": n, "type": k, "sha": s} for n, (k, s) in repo.trees[sha].items()]
                return self.reply(200, {"sha": sha, "tree": items, "truncated": False})
            if method == "GET" and what.startswith("blobs/"):
                data = repo.blobs[what.split("/")[1]]
                return self.reply(200, {"content": base64.b64encode(data).decode(), "encoding": "base64"})
            if method == "POST" and what == "blobs":
                return self.reply(201, {"sha": repo.add_blob(base64.b64decode(body["content"]))})
            if method == "POST" and what == "trees":
                flat = repo.flat(body["base_tree"])
                for e in body["tree"]:
                    if "content" in e:
                        flat[e["path"]] = repo.add_blob(e["content"].encode("utf-8"))
                    elif e["sha"] is None:
                        flat.pop(e["path"], None)
                    else:
                        flat[e["path"]] = e["sha"]
                return self.reply(201, {"sha": repo.build(flat)})
            if method == "POST" and what == "commits":
                return self.reply(201, {"sha": repo.add_commit(body["tree"], body["parents"], body["message"])})
            if method == "PATCH" and what == "refs/heads/main":
                if not body.get("force") and repo.head not in repo.commits[body["sha"]]["parents"]:
                    return self.reply(422, {"message": "Update is not a fast forward"})
                repo.head = body["sha"]
                repo.patches += 1
                return self.reply(200, {"object": {"sha": repo.head}})
        return self.reply(404, {"message": "Not Found"})

    def do_GET(self):
        self.handle_any("GET")

    def do_POST(self):
        self.handle_any("POST")

    def do_PATCH(self):
        self.handle_any("PATCH")


def make_explorer(node, tmp, name):
    db = os.path.join(tmp, f"{name}.sqlite")
    ex.init_db(db)
    indexer = ex.Indexer(node.rpc, db, "regtest", log=lambda m: None)
    return ex.Explorer(node.rpc, db, "regtest", indexer), indexer


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bindir", default=os.path.join(HERE, "..", "..", "..", "build", "bin"), help="Ordner mit velincoind")
    args = ap.parse_args()

    tmp = tempfile.mkdtemp(prefix="vlc-sync-test-")
    nodes, server = [], None
    try:
        repo = FakeRepo({"README.md": b"readme\n", "website/index.html": b"<html>Website</html>\n",
                         "website/explorer/alte-seite.html": b"alt\n"})
        server = ThreadingHTTPServer(("127.0.0.1", 0), FakeGitHubHandler)
        server.repo = repo
        threading.Thread(target=server.serve_forever, daemon=True).start()
        api = f"http://127.0.0.1:{server.server_address[1]}"
        gh = sync.GitHub("o/r", TOKEN, api)

        a = Node(os.path.abspath(args.bindir), os.path.join(tmp, "a"))
        nodes.append(a)
        a.rpc.call("createwallet", "w")
        w = a.wallet("w")
        addr = w.call("getnewaddress")
        a.rpc.call("generatetoaddress", 110, addr)
        w.call("sendtoaddress", w.call("getnewaddress"), 7.5)
        a.rpc.call("generatetoaddress", 1, addr)
        explorer, indexer = make_explorer(a, tmp, "a")

        print("Erster Upload")
        result = sync.sync_once(explorer, indexer, gh, "main", "website/explorer", log=lambda m: None)
        files = repo.files()
        check(result.startswith("Hochgeladen") and repo.patches == 1, result)
        check(files["README.md"] == b"readme\n" and files["website/index.html"] == b"<html>Website</html>\n",
              "andere Dateien im Repository bleiben unverändert")
        check("website/explorer/alte-seite.html" not in files, "alte Datei im Explorer-Ordner wurde gelöscht")
        info = json.loads(files["website/explorer/sync.json"])
        check(info["tip_height"] == 111 and info["tip_hash"] == a.rpc.call("getbestblockhash"), "sync.json zeigt Block 111")
        check(files["website/explorer/static/logo.png"] == open(os.path.join(ex.STATIC_DIR, "logo.png"), "rb").read(),
              "Bilder werden unverändert hochgeladen")
        export = os.path.join(tmp, "export")
        ex.export_static(explorer, export, log=lambda m: None)
        local = sync.local_files(export)
        same = all(files.get("website/explorer/" + p) == d for p, d in local.items()
                   if p not in ("search-index.js",))  # contains the export time
        check(same and len(local) == len([p for p in files if p.startswith("website/explorer/")]),
              f"alle {len(local)} Dateien des Exports liegen im Repository")

        print("Ohne Änderung")
        head = repo.head
        result = sync.sync_once(explorer, indexer, gh, "main", "website/explorer", log=lambda m: None)
        check(repo.head == head and "aktuell" in result, f"kein neuer Commit: {result}")

        print("Neuer Block")
        old_block_page = repo.files()["website/explorer/block/" + a.rpc.call("getblockhash", 5) + ".html"]
        a.rpc.call("generatetoaddress", 1, addr)
        result = sync.sync_once(explorer, indexer, gh, "main", "website/explorer", log=lambda m: None)
        changed = int(re.search(r"(\d+) Dateien", result).group(1))
        check(repo.patches == 2 and changed <= 15, f"nur wenige Dateien geändert: {result}")
        check(repo.files()["website/explorer/block/" + a.rpc.call("getblockhash", 5) + ".html"] == old_block_page,
              "Seiten alter Blöcke ändern sich nicht")
        check(repo.commits[repo.head]["parents"] == [head], "neuer Commit baut auf dem alten auf")

        print("Andere Kette wird nicht ersetzt")
        b = Node(os.path.abspath(args.bindir), os.path.join(tmp, "b"))
        nodes.append(b)
        b.rpc.call("createwallet", "w")
        b.rpc.call("generatetoaddress", 120, b.wallet("w").call("getnewaddress"))
        explorer_b, indexer_b = make_explorer(b, tmp, "b")
        head = repo.head
        try:
            sync.sync_once(explorer_b, indexer_b, gh, "main", "website/explorer", log=lambda m: None)
            refused = False
        except sync.SyncError as e:
            refused = "andere Kette" in str(e)
        check(refused and repo.head == head, "Sync von einer anderen Kette wird abgelehnt")
        result = sync.sync_once(explorer_b, indexer_b, gh, "main", "website/explorer", replace=True, log=lambda m: None)
        check(json.loads(repo.files()["website/explorer/sync.json"])["tip_height"] == 120,
              f"mit --replace wird sie ersetzt: {result}")

        print("Kette von vor einem Neustart des Testnetzes wird ersetzt")
        flat = repo.flat(repo.commits[repo.head]["tree"])
        old_info = {"chain": "regtest", "genesis": "00" * 32, "tip_height": 999, "tip_hash": "11" * 32}
        flat["website/explorer/sync.json"] = repo.add_blob(json.dumps(old_info).encode())
        repo.head = repo.add_commit(repo.build(flat), [repo.head], "alte Kette")
        try:
            sync.sync_once(explorer, indexer, gh, "main", "website/explorer", log=lambda m: None)
            refused = False
        except sync.SyncError as e:
            refused = "anderes Netz" in str(e)
        check(refused, "ein unbekanntes anderes Netz wird nicht ersetzt")
        sync.RETIRED_GENESIS["regtest"] = {"00" * 32}
        result = sync.sync_once(explorer, indexer, gh, "main", "website/explorer", log=lambda m: None)
        info = json.loads(repo.files()["website/explorer/sync.json"])
        check(info["genesis"] == a.rpc.call("getblockhash", 0), f"die alte Kette wird ohne --replace ersetzt: {result}")
        del sync.RETIRED_GENESIS["regtest"]

        print("Falscher Token")
        try:
            sync.sync_once(explorer, indexer, sync.GitHub("o/r", "falsch", api), "main", "website/explorer")
            message = ""
        except sync.SyncError as e:
            message = str(e)
        check("401" in message, "falscher Token wird gemeldet")

        print("Kommandozeile mit --once")
        env = dict(os.environ, GITHUB_TOKEN=TOKEN)
        proc = subprocess.run([sys.executable, os.path.join(HERE, "explorer_sync.py"), "--once", "--replace",
                               "--chain", "regtest", "--datadir", os.path.join(tmp, "a"), "--rpcport", str(a.rpcport),
                               "--db", os.path.join(tmp, "cli.sqlite"), "--repo", "o/r", "--github-api", api],
                              env=env, capture_output=True, text=True, timeout=300)
        tip = json.loads(repo.files()["website/explorer/sync.json"])["tip_height"]
        check(proc.returncode == 0 and tip == 112, f"explorer_sync.py --once lädt hoch ({proc.stderr.strip()[-120:]})")

        print("\nAlle Tests bestanden.")
    finally:
        if server:
            server.shutdown()
        for node in nodes:
            node.stop()
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
