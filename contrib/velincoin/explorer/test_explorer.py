#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""End-to-end test for the Velincoin block explorer.

Starts a private regtest node in a temporary folder, creates blocks and
transactions, runs the explorer indexer and web server against it and checks
the results against the node: balances, coin supply, fees, reorgs and pages.

Usage: test_explorer.py [--bindir build/bin]
"""

import argparse
import json
import os
import shutil
import socket
import subprocess
import sys
import tempfile
import threading
import time
import urllib.error
import urllib.request
from decimal import Decimal

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import explorer as ex  # noqa: E402


def free_port():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


class Node:
    def __init__(self, bindir, datadir):
        self.datadir = datadir
        os.makedirs(datadir, exist_ok=True)
        self.rpcport = free_port()
        self.proc = subprocess.Popen(
            [os.path.join(bindir, "velincoind"), "-regtest", f"-datadir={datadir}", "-listen=0",
             f"-rpcport={self.rpcport}", "-server=1", "-fallbackfee=0.0001", "-printtoconsole=0"],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        self.cookie = os.path.join(datadir, "regtest", ".cookie")
        self.rpc = ex.RPC(f"http://127.0.0.1:{self.rpcport}/", cookie_file=self.cookie)
        deadline = time.time() + 60
        while True:
            try:
                self.rpc.call("getblockchaininfo")
                break
            except (ex.NodeUnavailable, ex.RPCError):
                if time.time() > deadline or self.proc.poll() is not None:
                    raise RuntimeError("velincoind did not start")
                time.sleep(0.3)

    def wallet(self, name):
        return ex.RPC(f"http://127.0.0.1:{self.rpcport}/wallet/{name}", cookie_file=self.cookie)

    def stop(self):
        try:
            self.rpc.call("stop")
            self.proc.wait(60)
        except Exception:
            self.proc.kill()


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


OPENER = urllib.request.build_opener(urllib.request.ProxyHandler({}), NoRedirect)


def get(base, path):
    """Return (status, headers, body text) without following redirects."""
    try:
        with OPENER.open(base + path, timeout=30) as r:
            return r.status, r.headers, r.read().decode(errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, e.headers, e.read().decode(errors="replace")


def check(cond, msg):
    if not cond:
        raise AssertionError(msg)
    print("  ok:", msg)


def verify_index(node, con, label):
    """Compare the whole index with the node."""
    print(f"Index prüfen ({label})")
    tip = ex.db_tip(con)
    node_height = node.rpc.call("getblockcount")
    check(tip["height"] == node_height, f"Index-Höhe {tip['height']} = Node-Höhe {node_height}")
    for row in con.execute("SELECT height, hash FROM blocks ORDER BY height"):
        if node.rpc.call("getblockhash", row["height"]) != row["hash"]:
            raise AssertionError(f"Block {row['height']} weicht vom Node ab")
    check(True, "alle Block-Hashes stimmen mit dem Node überein")

    utxo_total = ex.to_sats(node.rpc.call("gettxoutsetinfo")["total_amount"])
    check(tip["supply"] == utxo_total,
          f"erzeugte Coins {ex.fmt_vlc(tip['supply'])} = UTXO-Summe des Nodes {ex.fmt_vlc(utxo_total)}")

    addresses = [r[0] for r in con.execute("SELECT DISTINCT address FROM outputs WHERE address IS NOT NULL")]
    for address in addresses:
        s = con.execute("SELECT COALESCE(SUM(received)-SUM(sent),0) FROM address_txs WHERE address=?",
                        (address,)).fetchone()[0]
        unspent = con.execute("SELECT COALESCE(SUM(value),0) FROM outputs WHERE address=? AND spent_txid IS NULL",
                              (address,)).fetchone()[0]
        scan = node.rpc.call("scantxoutset", "start", [f"addr({address})"])
        node_balance = ex.to_sats(scan["total_amount"])
        if not (s == unspent == node_balance):
            raise AssertionError(f"{address}: Verlauf {s}, offene Ausgaben {unspent}, Node {node_balance}")
    check(len(addresses) > 0, f"Kontostand von allen {len(addresses)} Adressen = scantxoutset des Nodes")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bindir", default=os.path.join(HERE, "..", "..", "..", "build", "bin"),
                    help="Ordner mit velincoind")
    ap.add_argument("--keep", action="store_true", help="temporären Ordner nicht löschen")
    args = ap.parse_args()

    tmp = tempfile.mkdtemp(prefix="vlc-explorer-test-")
    node = None
    server = None
    try:
        node = Node(os.path.abspath(args.bindir), os.path.join(tmp, "node"))
        rpc = node.rpc
        print("Regtest-Node gestartet, erzeuge Blöcke und Transaktionen")
        rpc.call("createwallet", "a")
        rpc.call("createwallet", "b")
        wa, wb = node.wallet("a"), node.wallet("b")
        addr_a = wa.call("getnewaddress")
        addr_b = wb.call("getnewaddress")
        addr_b2 = wb.call("getnewaddress", "", "legacy")
        rpc.call("generatetoaddress", 110, addr_a)
        txid1 = wa.call("sendtoaddress", addr_b, 12.5)
        wa.call("sendtoaddress", addr_b2, 3.25)
        rpc.call("generatetoaddress", 1, addr_a)
        txid3 = wb.call("sendtoaddress", addr_a, 1.0)
        rpc.call("generatetoaddress", 1, addr_b)
        mempool_txid = wa.call("sendtoaddress", addr_b, 0.5)

        db = os.path.join(tmp, "explorer.sqlite")
        ex.init_db(db)
        indexer = ex.Indexer(rpc, db, "regtest", log=lambda m: None)
        con = ex.open_db(db)
        indexer.sync(con)
        verify_index(node, con, "nach dem Einlesen")

        print("Gebühren und Ausgaben prüfen")
        fee1 = -ex.to_sats(wa.call("gettransaction", txid1)["fee"])
        row = con.execute("SELECT fee FROM txs WHERE txid=?", (txid1,)).fetchone()
        check(row["fee"] == fee1, f"Gebühr von Transaktion 1 = Wallet ({ex.fmt_vlc(fee1)} VLC)")
        spent_by = con.execute("SELECT COUNT(*) FROM outputs WHERE spent_txid=?", (txid3,)).fetchone()[0]
        check(spent_by >= 1, "Transaktion 3 ist als Ausgeber ihrer Eingänge eingetragen")
        received_b2 = con.execute("SELECT SUM(received) FROM address_txs WHERE address=?",
                                  (addr_b2,)).fetchone()[0]
        check(received_b2 == ex.to_sats(Decimal("3.25")), "Legacy-Adresse hat 3.25 VLC erhalten")

        print("Webseiten prüfen")
        explorer = ex.Explorer(rpc, db, "regtest", indexer)
        server = ex.make_server(explorer, "127.0.0.1", 0)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        base = f"http://127.0.0.1:{server.server_address[1]}"
        tip = ex.db_tip(con)
        genesis_txid = rpc.call("getblock", rpc.call("getblockhash", 0))["tx"][0]

        pages = {
            "/": ["Neueste Blöcke", "Erzeugte Coins"],
            "/blocks": ["Ältere"],
            "/blocks?start=5": ["Neuere"],
            f"/block/{tip['height']}": [tip["hash"]],
            f"/block/{tip['hash']}": ["Transaktionen"],
            "/block/0": ["Genesis-Block"],
            f"/tx/{txid1}": ["Bestätigt in Block", "12.50000000", addr_b],
            f"/tx/{mempool_txid}": ["Unbestätigt", "0.50000000"],
            f"/tx/{genesis_txid}": ["Neu erzeugte Coins"],
            f"/address/{addr_b2}": ["3.25000000"],
            "/stats": ["chart-data", "Erzeugte Coins", "Als Tabelle anzeigen"],
        }
        for path, needles in pages.items():
            status, headers, body = get(base, path)
            check(status == 200 and all(n in body for n in needles), f"{path} zeigt {', '.join(needles)}")
        status, headers, _ = get(base, "/")
        check("default-src 'self'" in headers.get("Content-Security-Policy", ""), "Content-Security-Policy gesetzt")

        for q, target in [(str(tip["height"]), f"/block/{tip['height']}"), (txid1, f"/tx/{txid1}"),
                          (tip["hash"].upper(), f"/block/{tip['hash']}"), (mempool_txid, f"/tx/{mempool_txid}"),
                          (addr_a.upper(), f"/address/{addr_a}")]:
            status, headers, _ = get(base, "/search?q=" + q)
            check(status == 302 and headers["Location"] == target, f"Suche nach {q[:20]}… führt zu {target[:30]}…")

        status, _, body = get(base, "/search?q=%3Cscript%3Ealert(1)%3C/script%3E")
        check(status == 404 and "<script>alert" not in body and "&lt;script&gt;" in body,
              "Suche mit HTML-Code wird escaped")
        status, _, _ = get(base, "/address/bcrt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
        check(status == 404, "ungültige Adresse gibt 404")
        status, _, _ = get(base, "/static/../explorer.py")
        check(status == 404, "keine Dateien ausserhalb von static")
        for name in ex.STATIC_FILES:
            status, _, _ = get(base, "/static/" + name)
            check(status == 200, f"/static/{name} wird ausgeliefert")

        status, _, body = get(base, f"/api/address/{addr_b2}")
        data = json.loads(body)
        check(status == 200 and data["received"] == 325_000_000, "API: Legacy-Adresse hat 3.25 VLC erhalten")
        status, _, body = get(base, "/api/status")
        check(json.loads(body)["index_height"] == tip["height"], "API: Status")
        status, _, body = get(base, "/api/charts")
        charts = json.loads(body)
        check(len(charts["supply"]) == tip["height"] and sum(p["v"] for p in charts["blocks_per_day"]) == tip["height"],
              "API: Chart-Daten")

        print("Reorg: zwei Blöcke ersetzen")
        rpc.call("invalidateblock", rpc.call("getblockhash", tip["height"] - 1))
        rpc.call("generatetoaddress", 3, addr_b2)
        indexer.sync(con)
        verify_index(node, con, "nach dem Reorg")

        print("Reorg: Kette wird kürzer")
        old_tip = rpc.call("getbestblockhash")
        rpc.call("invalidateblock", rpc.call("getblockhash", rpc.call("getblockcount") - 2))
        indexer.sync(con)
        verify_index(node, con, "nach dem Kürzen")
        rpc.call("reconsiderblock", old_tip)
        indexer.sync(con)
        verify_index(node, con, "nach dem Wiederherstellen")

        print("\nAlle Tests bestanden.")
    finally:
        if server:
            server.shutdown()
        if node:
            node.stop()
        if args.keep:
            print("Temporärer Ordner:", tmp)
        else:
            shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
