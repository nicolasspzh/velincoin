#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Keep the block explorer on the website up to date automatically.

Runs next to the Velincoin wallet. Every few minutes it checks the node for new
blocks and unconfirmed transactions. When something changed, it exports the
explorer (explorer.py --export) and uploads the changed files to GitHub with
the GitHub API. If the website is published from GitHub (for example with
Vercel), it updates by itself.

Needs a GitHub token that may change the contents of the repository, in the
file github-token.txt next to this script or in the environment variable
GITHUB_TOKEN. Only the Python standard library is used. See README.md.

Usage:
  explorer_sync.py               (Testnetz, every 5 minutes)
  explorer_sync.py --once        (one update, then stop)
"""

import argparse
import base64
import hashlib
import json
import os
import shutil
import sys
import tempfile
import time
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import explorer as ex  # noqa: E402


class SyncError(Exception):
    pass


def git_blob_sha(data):
    """The id GitHub gives a file with this content."""
    return hashlib.sha1(b"blob %d\0" % len(data) + data).hexdigest()


class GitHub:
    def __init__(self, repo, token, api="https://api.github.com"):
        self.repo = repo
        self.token = token
        self.api = api.rstrip("/")

    def req(self, method, path, body=None):
        url = f"{self.api}/repos/{self.repo}/{path}"
        data = json.dumps(body).encode() if body is not None else None
        request = urllib.request.Request(url, data=data, method=method, headers={
            "Authorization": f"Bearer {self.token}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "velincoin-explorer-sync",
            "Content-Type": "application/json",
        })
        try:
            with urllib.request.urlopen(request, timeout=120) as resp:
                return json.loads(resp.read() or b"null")
        except urllib.error.HTTPError as e:
            detail = e.read().decode(errors="replace")[:300]
            if e.code == 401:
                raise SyncError("GitHub lehnt den Token ab (401). Ist er abgelaufen oder falsch kopiert?") from None
            if e.code in (403, 404):
                raise SyncError(f"Kein Zugriff auf {self.repo} ({e.code}). Der Token braucht für dieses "
                                f"Repository das Recht 'Contents: Read and write'. {detail}") from None
            raise SyncError(f"GitHub antwortet mit HTTP {e.code} auf {method} {path}: {detail}") from None
        except (urllib.error.URLError, OSError) as e:
            raise SyncError(f"Keine Verbindung zu GitHub ({e})") from None

    def head(self, branch):
        """Return (commit sha, root tree sha) of the branch."""
        commit = self.req("GET", f"git/ref/heads/{branch}")["object"]["sha"]
        return commit, self.req("GET", f"git/commits/{commit}")["tree"]["sha"]

    def files_in(self, tree_sha, folder):
        """All files below folder as {relative path: blob sha}, empty if the folder is missing."""
        for part in folder.strip("/").split("/"):
            entries = self.req("GET", f"git/trees/{tree_sha}")["tree"]
            match = [e for e in entries if e["path"] == part and e["type"] == "tree"]
            if not match:
                return {}
            tree_sha = match[0]["sha"]
        tree = self.req("GET", f"git/trees/{tree_sha}?recursive=1")
        if tree.get("truncated"):
            raise SyncError(f"Der Ordner {folder} auf GitHub ist zu gross für die Abfrage")
        return {e["path"]: e["sha"] for e in tree["tree"] if e["type"] == "blob"}

    def read_blob(self, sha):
        return base64.b64decode(self.req("GET", f"git/blobs/{sha}")["content"])


def read_token(path):
    token = os.environ.get("GITHUB_TOKEN", "").strip()
    if token:
        return token
    try:
        with open(path, encoding="utf-8") as f:
            token = f.read().strip()
    except OSError:
        token = ""
    if not token:
        raise SyncError(f"Kein GitHub-Token gefunden. Lege ihn in die Datei {path} "
                        "oder in die Umgebungsvariable GITHUB_TOKEN (siehe README.md).")
    return token


def local_files(folder):
    files = {}
    for root, _, names in os.walk(folder):
        for name in names:
            full = os.path.join(root, name)
            rel = os.path.relpath(full, folder).replace(os.sep, "/")
            with open(full, "rb") as f:
                files[rel] = f.read()
    return files


def check_same_chain(explorer, remote_info):
    """Refuse to replace an explorer that shows a different chain."""
    rpc = explorer.rpc
    if remote_info.get("chain") != explorer.chain or remote_info.get("genesis") != rpc.call("getblockhash", 0):
        return "Die Website zeigt ein anderes Netz."
    height = remote_info.get("tip_height", -1)
    if height > rpc.call("getblockcount"):
        return (f"Die Website zeigt schon Block {height}, dieser Node hat weniger Blöcke. "
                "Läuft das Programm auf dem richtigen Computer?")
    if rpc.call("getblockhash", height) != remote_info.get("tip_hash"):
        return ("Die Website zeigt eine andere Kette als dieser Node, zum Beispiel die eines anderen "
                "Computers. Mit --replace wird sie trotzdem ersetzt.")
    return None


def without_time(data):
    """The content of search-index.js without the time of the export."""
    text = data.decode("utf-8")
    index = json.loads(text[text.index("{"):text.rindex("}") + 1])
    index.pop("time", None)
    index.pop("time_text", None)
    return index


def sync_once(explorer, indexer, gh, branch, folder, replace=False, log=print):
    """Export and upload if something changed. Returns a short status text."""
    con = ex.open_db(explorer.db_path)
    try:
        indexer.sync(con)
    finally:
        con.close()

    tmp = tempfile.mkdtemp(prefix="velincoin-explorer-")
    try:
        ex.export_static(explorer, tmp, log=lambda m: None)
        local = local_files(tmp)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    tip = json.loads(local["sync.json"])

    commit, tree = gh.head(branch)
    remote = gh.files_in(tree, folder)
    if "sync.json" in remote and not replace:
        problem = check_same_chain(explorer, json.loads(gh.read_blob(remote["sync.json"])))
        if problem:
            raise SyncError(problem)

    changed_rels = [rel for rel, data in sorted(local.items()) if remote.get(rel) != git_blob_sha(data)]
    removed = [rel for rel in remote if rel not in local]
    if changed_rels == ["search-index.js"] and not removed and "search-index.js" in remote:
        # Only the export time is new: no commit, otherwise every check would
        # publish the website again (Vercel allows only so many deployments a day)
        if without_time(local["search-index.js"]) == without_time(gh.read_blob(remote["search-index.js"])):
            changed_rels = []
    if not changed_rels and not removed:
        return f"Website ist aktuell (Block {tip['tip_height']})"

    entries = []
    changed = 0
    for rel in changed_rels:
        data = local[rel]
        changed += 1
        entry = {"path": f"{folder}/{rel}", "mode": "100644", "type": "blob"}
        try:
            entry["content"] = data.decode("utf-8")
        except UnicodeDecodeError:  # images
            entry["sha"] = gh.req("POST", "git/blobs", {"content": base64.b64encode(data).decode(),
                                                         "encoding": "base64"})["sha"]
        entries.append(entry)
    for rel in removed:
        entries.append({"path": f"{folder}/{rel}", "mode": "100644", "type": "blob", "sha": None})

    new_tree = gh.req("POST", "git/trees", {"base_tree": tree, "tree": entries})["sha"]
    message = f"Explorer: Blockhöhe {tip['tip_height']}"
    new_commit = gh.req("POST", "git/commits", {"message": message, "tree": new_tree, "parents": [commit]})["sha"]
    try:
        gh.req("PATCH", f"git/refs/heads/{branch}", {"sha": new_commit, "force": False})
    except SyncError as e:
        raise SyncError(f"Jemand hat gleichzeitig etwas gepusht, nächster Versuch beim nächsten Durchgang ({e})") from None
    return f"Hochgeladen: Block {tip['tip_height']}, {changed} Dateien neu oder geändert, {len(removed)} gelöscht"


def main():
    ap = argparse.ArgumentParser(description="Explorer auf der Website automatisch aktuell halten")
    ap.add_argument("--chain", choices=sorted(ex.CHAINS), default="testnet4", help="Netz (Standard testnet4)")
    ap.add_argument("--datadir", help="Datenordner von Velincoin Core, falls nicht der Standard")
    ap.add_argument("--rpcconnect", default="127.0.0.1", help=argparse.SUPPRESS)
    ap.add_argument("--rpcport", type=int, help="RPC-Port, falls nicht der Standard")
    ap.add_argument("--rpcuser", help="RPC-Benutzer (statt Cookie-Datei)")
    ap.add_argument("--rpcpassword", help="RPC-Passwort (statt Cookie-Datei)")
    ap.add_argument("--rpccookiefile", help="Pfad zur Cookie-Datei")
    ap.add_argument("--db", help="SQLite-Datei für den Index (Standard: explorer-<netz>.sqlite in diesem Ordner)")
    ap.add_argument("--repo", default="nicolasspzh/velincoin", help="GitHub-Repository (Standard nicolasspzh/velincoin)")
    ap.add_argument("--branch", default="main", help="Branch, von dem die Website veröffentlicht wird (Standard main)")
    ap.add_argument("--folder", default="website/explorer", help="Ordner des Explorers im Repository")
    ap.add_argument("--token-file", default=os.path.join(HERE, "github-token.txt"), help="Datei mit dem GitHub-Token")
    ap.add_argument("--interval", type=float, default=300, help="Sekunden zwischen zwei Prüfungen (Standard 300)")
    ap.add_argument("--once", action="store_true", help="Nur einmal aktualisieren, dann beenden")
    ap.add_argument("--replace", action="store_true", help="Auch eine andere Kette auf der Website ersetzen")
    ap.add_argument("--github-api", default="https://api.github.com", help=argparse.SUPPRESS)
    args = ap.parse_args()
    args.interval = max(60.0, args.interval)

    try:
        token = read_token(args.token_file)
    except SyncError as e:
        sys.exit(f"Fehler: {e}")
    gh = GitHub(args.repo, token, args.github_api)
    rpc = ex.build_rpc(args)
    db_path = args.db or os.path.join(HERE, f"explorer-{args.chain}.sqlite")
    ex.init_db(db_path)
    indexer = ex.Indexer(rpc, db_path, args.chain, log=ex.log)
    explorer = ex.Explorer(rpc, db_path, args.chain, indexer)

    ex.log(f"Explorer-Sync für {args.repo} ({args.branch}, {args.folder}). Beenden mit Ctrl+C.")
    last = None
    while True:
        try:
            state = (rpc.call("getbestblockhash"), tuple(sorted(rpc.call("getrawmempool"))))
            if state != last:
                ex.log(sync_once(explorer, indexer, gh, args.branch, args.folder, args.replace, log=ex.log))
                last = state
        except (SyncError, ex.NodeUnavailable, ex.RPCError, ex.ExplorerError) as e:
            ex.log(f"Fehler: {e}")
            if args.once:
                sys.exit(1)
        if args.once:
            return
        try:
            time.sleep(args.interval)
        except KeyboardInterrupt:
            return


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
