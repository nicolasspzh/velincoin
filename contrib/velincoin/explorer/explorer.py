#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Velincoin block explorer.

A small web block explorer for Velincoin. It reads the chain from a running
Velincoin Core node over RPC, keeps its own index of blocks, transactions and
address balances in an SQLite file and serves web pages and a JSON API.

Only the Python standard library is used. See README.md in this folder.

Usage:
  explorer.py                      (Velincoin test network, http://127.0.0.1:8080)
  explorer.py --chain main
  explorer.py --chain regtest --port 8081
"""

import argparse
import base64
import html
import itertools
import json
import math
import os
import re
import sqlite3
import sys
import threading
import time
import traceback
import urllib.error
import urllib.parse
import urllib.request
from decimal import Decimal
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

COIN = 100_000_000
HERE = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(HERE, "static")

# chain name -> (data directory subfolder, default RPC port, halving interval, label)
CHAINS = {
    "main": ("", 9732, 210000, "Hauptnetz"),
    "testnet4": ("testnet4", 29732, 210000, "Testnetz"),
    "regtest": ("regtest", 18443, 150, "Regtest"),
}

BLOCKS_PER_PAGE = 25
TXS_PER_PAGE = 50
CHART_MAX_POINTS = 500
CHART_MAX_DAYS = 90

CSP = ("default-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; "
       "base-uri 'none'; form-action 'self'; frame-ancestors 'none'")

HASH_RE = re.compile(r"[0-9a-fA-F]{64}")
HEIGHT_RE = re.compile(r"\d{1,10}")
ADDRESS_RE = re.compile(r"[0-9A-Za-z]{14,100}")
BECH32_PREFIXES = ("vlc1", "tvlc1", "bcrt1")


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

def h(value):
    """Escape a value for HTML."""
    return html.escape(str(value), quote=True)


def to_sats(value):
    """Convert an RPC amount (Decimal in VLC) to an integer number of satoshis."""
    return int((Decimal(value) * COIN).to_integral_value())


def fmt_int(n):
    """1234567 -> 1’234’567 (Swiss thousands separator)."""
    return f"{n:,}".replace(",", "’")


def fmt_vlc(sats, decimals=8):
    d = (Decimal(sats) / COIN).quantize(Decimal(1).scaleb(-decimals))
    return f"{d:,.{decimals}f}".replace(",", "’")


def fmt_vlc_short(sats):
    """At least 2 decimals, more only when needed: 50.00, 0.00009536."""
    text = fmt_vlc(sats)
    whole, frac = text.split(".")
    return f"{whole}.{frac.rstrip('0').ljust(2, '0')}"


def vlc_html(sats):
    return f'{h(fmt_vlc_short(sats))} <span class="unit">VLC</span>'


def fmt_number(x):
    """Difficulty and similar values, from 4.657e-10 up to 1’234’567."""
    if x == 0:
        return "0"
    if abs(x) < 0.001:
        return f"{x:.3e}"
    if abs(x) >= 1000:
        return fmt_int(round(x))
    return f"{x:.4g}"


def fmt_hashrate(hps):
    units = ["H/s", "kH/s", "MH/s", "GH/s", "TH/s", "PH/s", "EH/s"]
    i = 0
    while hps >= 1000 and i < len(units) - 1:
        hps /= 1000
        i += 1
    return f"{hps:.1f} {units[i]}"


def fmt_time(ts):
    return time.strftime("%d.%m.%Y %H:%M", time.gmtime(ts)) + " UTC"


def fmt_bytes(n):
    if n < 10_000:
        return f"{fmt_int(n)} Bytes"
    return f"{n / 1000:.1f} kB"


def subsidy(height, interval):
    halvings = height // interval
    return 0 if halvings >= 64 else (50 * COIN) >> halvings


def max_supply(interval):
    total, reward = 0, 50 * COIN
    while reward > 0:
        total += reward * interval
        reward >>= 1
    return total


def short_hash(s, n=12):
    return s if len(s) <= 2 * n else f"{s[:n]}…{s[-n:]}"


def coinbase_text(hex_data):
    """Readable text that a miner put into the coinbase, for example the genesis message."""
    raw = bytes.fromhex(hex_data)
    texts, i = [], 0
    while i < len(raw):  # walk through the data pushes of the script
        op, i = raw[i], i + 1
        size_bytes = {0x4c: 1, 0x4d: 2, 0x4e: 4}.get(op, 0)
        if op >= 0x4f or (size_bytes == 0 and op == 0):
            continue
        n = op if size_bytes == 0 else int.from_bytes(raw[i:i + size_bytes], "little")
        i += size_bytes
        data, i = raw[i:i + n], i + n
        if len(data) >= 8 and all(0x20 <= b < 0x7f for b in data):
            texts.append(data.decode("ascii"))
    return " ".join(texts)


def normalize_address(addr):
    return addr.lower() if addr.lower().startswith(BECH32_PREFIXES) else addr


# ---------------------------------------------------------------------------
# RPC client
# ---------------------------------------------------------------------------

class NodeUnavailable(Exception):
    """The node cannot be reached or refused the login."""


class RPCError(Exception):
    def __init__(self, code, message):
        super().__init__(f"{message} (Code {code})")
        self.code = code
        self.message = message


def default_datadir():
    if sys.platform == "win32":
        appdata = os.environ.get("APPDATA")
        if appdata and os.path.isdir(os.path.join(appdata, "Velincoin")):
            return os.path.join(appdata, "Velincoin")
        return os.path.join(os.environ.get("LOCALAPPDATA", os.path.expanduser("~")), "Velincoin")
    if sys.platform == "darwin":
        return os.path.expanduser("~/Library/Application Support/Velincoin")
    return os.path.expanduser("~/.velincoin")


class RPC:
    def __init__(self, url, user=None, password=None, cookie_file=None, timeout=120):
        self.url = url
        self.user = user
        self.password = password
        self.cookie_file = cookie_file
        self.timeout = timeout
        self.ids = itertools.count(1)
        # The node runs locally, never send RPC requests through a proxy.
        self.opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))

    def _credentials(self):
        if self.user is not None:
            return f"{self.user}:{self.password or ''}"
        try:
            with open(self.cookie_file, encoding="utf-8") as f:
                return f.read().strip()
        except OSError:
            raise NodeUnavailable(
                f"Cookie-Datei {self.cookie_file} nicht gefunden. Läuft Velincoin Core "
                "mit server=1 im richtigen Netz?") from None

    def call(self, method, *params):
        body = json.dumps({"jsonrpc": "1.0", "id": next(self.ids), "method": method,
                           "params": list(params)}).encode()
        auth = base64.b64encode(self._credentials().encode()).decode()
        req = urllib.request.Request(self.url, data=body, headers={
            "Content-Type": "application/json", "Authorization": f"Basic {auth}"})
        try:
            with self.opener.open(req, timeout=self.timeout) as resp:
                raw = resp.read()
        except urllib.error.HTTPError as e:
            if e.code == 401:
                raise NodeUnavailable("Anmeldung beim Node abgelehnt (HTTP 401)") from None
            raw = e.read()
            if not raw:
                raise NodeUnavailable(f"Node antwortet mit HTTP {e.code}") from None
        except (urllib.error.URLError, OSError) as e:
            raise NodeUnavailable(f"Keine Verbindung zum Node ({e})") from None
        data = json.loads(raw, parse_float=Decimal)
        if data.get("error"):
            raise RPCError(data["error"].get("code"), data["error"].get("message"))
        return data["result"]


# ---------------------------------------------------------------------------
# Database
# ---------------------------------------------------------------------------

SCHEMA = """
CREATE TABLE IF NOT EXISTS meta(key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS blocks(
    height INTEGER PRIMARY KEY,
    hash TEXT NOT NULL UNIQUE,
    prev TEXT,
    time INTEGER NOT NULL,
    mediantime INTEGER NOT NULL,
    ntx INTEGER NOT NULL,
    size INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    difficulty REAL NOT NULL,
    bits TEXT NOT NULL,
    nonce INTEGER NOT NULL,
    version INTEGER NOT NULL,
    merkleroot TEXT NOT NULL,
    reward INTEGER NOT NULL,      -- value of the coinbase outputs (satoshis)
    fees INTEGER NOT NULL,        -- sum of the transaction fees
    supply INTEGER NOT NULL,      -- coins created up to and including this block
    miner TEXT                    -- first address paid by the coinbase
);
CREATE TABLE IF NOT EXISTS txs(
    txid TEXT PRIMARY KEY,
    height INTEGER NOT NULL,
    idx INTEGER NOT NULL,
    size INTEGER NOT NULL,
    vsize INTEGER NOT NULL,
    fee INTEGER,
    total_out INTEGER NOT NULL,
    is_coinbase INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS txs_height ON txs(height, idx);
CREATE TABLE IF NOT EXISTS outputs(
    txid TEXT NOT NULL,
    n INTEGER NOT NULL,
    height INTEGER NOT NULL,
    address TEXT,
    value INTEGER NOT NULL,
    type TEXT,
    spent_txid TEXT,
    spent_height INTEGER,
    PRIMARY KEY(txid, n)
);
CREATE INDEX IF NOT EXISTS outputs_address ON outputs(address) WHERE address IS NOT NULL;
CREATE INDEX IF NOT EXISTS outputs_height ON outputs(height);
CREATE INDEX IF NOT EXISTS outputs_spent_height ON outputs(spent_height) WHERE spent_height IS NOT NULL;
CREATE TABLE IF NOT EXISTS address_txs(
    address TEXT NOT NULL,
    txid TEXT NOT NULL,
    height INTEGER NOT NULL,
    received INTEGER NOT NULL,
    sent INTEGER NOT NULL,
    PRIMARY KEY(address, txid)
);
CREATE INDEX IF NOT EXISTS address_txs_history ON address_txs(address, height);
CREATE INDEX IF NOT EXISTS address_txs_height ON address_txs(height);
"""


def open_db(path):
    con = sqlite3.connect(path, timeout=30)
    con.row_factory = sqlite3.Row
    con.execute("PRAGMA journal_mode=WAL")
    con.execute("PRAGMA synchronous=NORMAL")
    return con


def init_db(path):
    con = open_db(path)
    con.executescript(SCHEMA)
    con.close()


def db_tip(con):
    return con.execute("SELECT * FROM blocks ORDER BY height DESC LIMIT 1").fetchone()


def db_hash(con, height):
    row = con.execute("SELECT hash FROM blocks WHERE height=?", (height,)).fetchone()
    return row["hash"] if row else None


# ---------------------------------------------------------------------------
# Indexer
# ---------------------------------------------------------------------------

class ExplorerError(Exception):
    pass


class Indexer(threading.Thread):
    """Copies new blocks from the node into the database and follows reorgs."""

    def __init__(self, rpc, db_path, chain, poll=5.0, log=print):
        super().__init__(daemon=True, name="indexer")
        self.rpc = rpc
        self.db_path = db_path
        self.chain = chain
        self.poll = poll
        self.log = log
        self.stop_event = threading.Event()
        self.status = {"node_height": None, "error": None, "last_sync": None}

    def run(self):
        con = open_db(self.db_path)
        while not self.stop_event.is_set():
            try:
                self.sync(con)
                self.status["error"] = None
                self.status["last_sync"] = time.time()
            except (NodeUnavailable, RPCError, ExplorerError) as e:
                if self.status["error"] != str(e):
                    self.log(f"Indexer: {e}")
                self.status["error"] = str(e)
            except Exception as e:  # keep the web pages running
                self.log("Indexer: unerwarteter Fehler\n" + traceback.format_exc())
                self.status["error"] = f"Unerwarteter Fehler: {e}"
            self.stop_event.wait(self.poll)
        con.close()

    def stop(self):
        self.stop_event.set()

    def check_chain(self, con):
        genesis = self.rpc.call("getblockhash", 0)
        row = con.execute("SELECT value FROM meta WHERE key='genesis'").fetchone()
        if row is None:
            with con:
                con.execute("INSERT INTO meta VALUES('genesis', ?)", (genesis,))
                con.execute("INSERT OR REPLACE INTO meta VALUES('chain', ?)", (self.chain,))
        elif row["value"] != genesis:
            raise ExplorerError(
                f"Die Datenbank {self.db_path} gehört zu einer anderen Blockchain "
                "(anderer Genesis-Block). Bitte mit --db eine andere Datei angeben.")

    def sync(self, con):
        self.check_chain(con)
        node_height = self.rpc.call("getblockcount")
        self.status["node_height"] = node_height
        tip = db_tip(con)
        height = tip["height"] if tip else -1

        # Walk back until our tip is part of the node's active chain (reorg).
        while height >= 0:
            try:
                node_hash = self.rpc.call("getblockhash", height)
            except RPCError as e:
                if e.code != -8:  # -8: height out of range
                    raise
                node_hash = None
            if node_hash == db_hash(con, height):
                break
            self.log(f"Indexer: Block {height} ist nicht mehr in der aktiven Kette, wird entfernt")
            self.rollback(con, height)
            height -= 1

        started = time.time()
        while height < node_height and not self.stop_event.is_set():
            block_hash = self.rpc.call("getblockhash", height + 1)
            block = self.rpc.call("getblock", block_hash, 3)
            if height >= 0 and block.get("previousblockhash") != db_hash(con, height):
                return  # the chain changed while syncing, the next round handles it
            self.index_block(con, block)
            height += 1
            if (height > 0 and height % 1000 == 0) or (height == node_height and time.time() - started > 10):
                self.log(f"Indexer: Block {height} von {node_height}")

    def index_block(self, con, block):
        height = block["height"]
        coinbase_out = 0
        fees = 0
        miner = None
        tx_rows = []
        out_rows = []
        spends = []
        addr = {}  # (address, txid) -> [received, sent]

        for idx, tx in enumerate(block["tx"]):
            txid = tx["txid"]
            is_coinbase = "coinbase" in tx["vin"][0]
            total_out = sum(to_sats(o["value"]) for o in tx["vout"])
            fee = None
            if is_coinbase:
                coinbase_out = total_out
                miner = next((o["scriptPubKey"].get("address") for o in tx["vout"]
                              if o["scriptPubKey"].get("address")), None)
            elif height > 0:
                if "fee" not in tx:
                    raise ExplorerError(
                        f"Block {height}: Dem Node fehlen die Undo-Daten. Der Explorer braucht "
                        "einen Node ohne Pruning (prune=0).")
                fee = to_sats(tx["fee"])
                fees += fee
            tx_rows.append((txid, height, idx, tx["size"], tx["vsize"], fee, total_out, int(is_coinbase)))

            if height == 0:
                continue  # the outputs of the genesis block can never be spent

            for vin in tx["vin"]:
                if "coinbase" in vin:
                    continue
                spends.append((txid, height, vin["txid"], vin["vout"]))
                prev = vin["prevout"]
                address = prev["scriptPubKey"].get("address")
                if address:
                    addr.setdefault((address, txid), [0, 0])[1] += to_sats(prev["value"])
            for o in tx["vout"]:
                spk = o["scriptPubKey"]
                address = spk.get("address")
                value = to_sats(o["value"])
                out_rows.append((txid, o["n"], height, address, value, spk.get("type")))
                if address:
                    addr.setdefault((address, txid), [0, 0])[0] += value

        prev_supply = 0
        if height > 0:
            row = con.execute("SELECT supply FROM blocks WHERE height=?", (height - 1,)).fetchone()
            prev_supply = row["supply"]
        # New coins = what the miner paid out minus the fees it collected.
        supply = prev_supply + coinbase_out - fees if height > 0 else 0

        with con:
            con.execute(
                "INSERT INTO blocks VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                (height, block["hash"], block.get("previousblockhash"), block["time"],
                 block["mediantime"], block["nTx"], block["size"], block["weight"],
                 float(block["difficulty"]), block["bits"], block["nonce"], block["version"],
                 block["merkleroot"], coinbase_out, fees, supply, miner))
            con.executemany("INSERT INTO txs VALUES(?,?,?,?,?,?,?,?)", tx_rows)
            con.executemany("INSERT INTO outputs(txid, n, height, address, value, type) "
                            "VALUES(?,?,?,?,?,?)", out_rows)
            for txid, h_, prev_txid, prev_n in spends:
                cur = con.execute("UPDATE outputs SET spent_txid=?, spent_height=? "
                                  "WHERE txid=? AND n=? AND spent_txid IS NULL",
                                  (txid, h_, prev_txid, prev_n))
                if cur.rowcount != 1:
                    raise ExplorerError(
                        f"Block {height}: Ausgabe {prev_txid}:{prev_n} fehlt im Index. "
                        "Die Datenbank ist beschädigt, bitte löschen und neu aufbauen.")
            con.executemany("INSERT INTO address_txs VALUES(?,?,?,?,?)",
                            [(a, t, height, r, s) for (a, t), (r, s) in addr.items()])

    def rollback(self, con, height):
        with con:
            con.execute("UPDATE outputs SET spent_txid=NULL, spent_height=NULL WHERE spent_height>=?", (height,))
            con.execute("DELETE FROM outputs WHERE height>=?", (height,))
            con.execute("DELETE FROM address_txs WHERE height>=?", (height,))
            con.execute("DELETE FROM txs WHERE height>=?", (height,))
            con.execute("DELETE FROM blocks WHERE height>=?", (height,))


# ---------------------------------------------------------------------------
# Web pages
# ---------------------------------------------------------------------------

class NotFound(Exception):
    pass


class Redirect(Exception):
    def __init__(self, location):
        super().__init__(location)
        self.location = location


def link_block(height_or_hash, text=None):
    return f'<a href="/block/{h(height_or_hash)}">{h(text if text is not None else height_or_hash)}</a>'


def link_tx(txid, short=True):
    return f'<a class="mono" href="/tx/{h(txid)}">{h(short_hash(txid) if short else txid)}</a>'


def link_address(address, short=False):
    if short:
        return f'<a class="mono nowrap" href="/address/{h(address)}" title="{h(address)}">{h(short_hash(address, 10))}</a>'
    return f'<a class="mono" href="/address/{h(address)}">{h(address)}</a>'


def table(headers, rows, numeric=()):
    """Cells in rows are HTML. Columns listed in numeric are right-aligned."""
    def cls(i):
        return ' class="num"' if i in numeric else ""
    head = "".join(f"<th{cls(i)}>{h(t)}</th>" for i, t in enumerate(headers))
    body = "".join("<tr>" + "".join(f"<td{cls(i)}>{c}</td>" for i, c in enumerate(r)) + "</tr>" for r in rows)
    return f'<div class="table-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>'


def details(rows):
    """Key/value list. Values are HTML."""
    items = "".join(f"<dt>{h(k)}</dt><dd>{v}</dd>" for k, v in rows)
    return f'<dl class="details">{items}</dl>'


def tile(label, value, sub=""):
    sub_html = f'<div class="tile-sub">{sub}</div>' if sub else ""
    return f'<div class="tile"><div class="tile-label">{h(label)}</div><div class="tile-value">{value}</div>{sub_html}</div>'


def pager(prev_url, next_url, prev_text, next_text):
    left = f'<a href="{h(prev_url)}">{h(prev_text)}</a>' if prev_url else "<span></span>"
    right = f'<a href="{h(next_url)}">{h(next_text)}</a>' if next_url else "<span></span>"
    return f'<nav class="pager">{left}{right}</nav>'


def query_int(query, name, default, minimum=0):
    try:
        return max(minimum, int(query.get(name, [default])[0]))
    except (TypeError, ValueError):
        return default


class Explorer:
    def __init__(self, rpc, db_path, chain, indexer):
        self.rpc = rpc
        self.db_path = db_path
        self.chain = chain
        self.indexer = indexer
        self.interval = CHAINS[chain][2]

    # -- helpers ------------------------------------------------------------

    def rpc_safe(self, method, *params):
        try:
            return self.rpc.call(method, *params)
        except (NodeUnavailable, RPCError):
            return None

    def status_note(self, con):
        st = self.indexer.status
        if st["error"]:
            return f'<p class="note warn" role="status">Hinweis: {h(st["error"])}. Die Anzeige kann veraltet sein.</p>'
        tip = db_tip(con)
        index_height = tip["height"] if tip else -1
        if st["node_height"] is not None and index_height < st["node_height"] - 1:
            return (f'<p class="note" role="status">Der Explorer liest gerade die Blockchain ein: '
                    f'Block {fmt_int(index_height)} von {fmt_int(st["node_height"])}.</p>')
        return ""

    def layout(self, con, title, body):
        label = CHAINS[self.chain][3]
        return f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{h(title)} · Velincoin Explorer</title>
<link rel="icon" href="/static/favicon.png">
<link rel="stylesheet" href="/static/style.css">
</head>
<body>
<header class="top">
  <div class="wrap top-inner">
    <a class="brand" href="/"><img src="/static/logo.png" alt="" width="32" height="32"><span>Velincoin Explorer</span></a>
    <span class="net net-{h(self.chain)}">{h(label)}</span>
    <nav class="nav"><a href="/">Übersicht</a><a href="/blocks">Blöcke</a><a href="/stats">Statistik</a></nav>
    <form class="search" action="/search" method="get" role="search">
      <input name="q" type="search" placeholder="Blockhöhe, Hash, Transaktion oder Adresse" aria-label="Suchbegriff" required>
      <button type="submit">Suchen</button>
    </form>
  </div>
</header>
<main class="wrap">
{self.status_note(con)}
{body}
</main>
<footer class="wrap foot">Daten direkt aus einem Velincoin-Core-Node. Alle Zeiten in UTC. <a href="https://velincoin.com/">velincoin.com</a></footer>
</body>
</html>
"""

    def block_row(self, con, ident):
        if HEIGHT_RE.fullmatch(ident):
            row = con.execute("SELECT * FROM blocks WHERE height=?", (int(ident),)).fetchone()
        else:
            row = con.execute("SELECT * FROM blocks WHERE hash=?", (ident.lower(),)).fetchone()
        if row is None:
            raise NotFound("Dieser Block ist (noch) nicht im Explorer.")
        return row

    def get_tx(self, con, txid):
        """Return (tx json, index row or None, spent map). Raises NotFound."""
        txid = txid.lower()
        row = con.execute("SELECT t.*, b.hash AS blockhash, b.time AS blocktime FROM txs t "
                          "JOIN blocks b ON b.height=t.height WHERE t.txid=?", (txid,)).fetchone()
        if row is not None and row["height"] == 0:
            # The genesis coinbase cannot be fetched with getrawtransaction.
            tx = self.rpc.call("getblock", row["blockhash"], 2)["tx"][row["idx"]]
        elif row is not None:
            tx = self.rpc.call("getrawtransaction", txid, 2, row["blockhash"])
        else:
            try:
                tx = self.rpc.call("getrawtransaction", txid, 2)
            except RPCError:
                raise NotFound("Diese Transaktion ist weder in einem Block noch unbestätigt bekannt.") from None
        spent = {r["n"]: r["spent_txid"] for r in
                 con.execute("SELECT n, spent_txid FROM outputs WHERE txid=?", (txid,))}
        # Fill in input amounts and addresses the node did not include (unconfirmed transactions).
        for vin in tx["vin"]:
            if "coinbase" in vin or "prevout" in vin:
                continue
            prev = con.execute("SELECT address, value FROM outputs WHERE txid=? AND n=?",
                               (vin["txid"], vin["vout"])).fetchone()
            if prev is not None:
                vin["prevout"] = {"value": Decimal(prev["value"]) / COIN,
                                  "scriptPubKey": {"address": prev["address"]} if prev["address"] else {}}
        return tx, row, spent

    # -- pages --------------------------------------------------------------

    def page_home(self, con, query):
        tip = db_tip(con)
        if tip is None:
            return "Übersicht", "<h1>Velincoin Explorer</h1><p>Noch keine Blöcke im Index.</p>"
        mempool = self.rpc_safe("getmempoolinfo")
        hashps = self.rpc_safe("getnetworkhashps")
        next_height = tip["height"] + 1
        reward = subsidy(next_height, self.interval)
        next_halving = (next_height // self.interval + 1) * self.interval
        tiles = [
            tile("Blockhöhe", link_block(tip["hash"], fmt_int(tip["height"])),
                 f"Letzter Block: {h(fmt_time(tip['time']))}"),
            tile("Erzeugte Coins", vlc_html(tip["supply"]),
                 f"von höchstens {h(fmt_vlc_short(max_supply(self.interval)))} VLC"),
            tile("Belohnung pro Block", vlc_html(reward),
                 f"Halbierung bei Block {fmt_int(next_halving)}, in {fmt_int(next_halving - next_height)} Blöcken"),
            tile("Schwierigkeit", h(fmt_number(tip["difficulty"])),
                 f"Hashrate geschätzt: {h(fmt_hashrate(float(hashps)))}" if hashps is not None else ""),
            tile("Unbestätigte Transaktionen", fmt_int(mempool["size"]) if mempool else "?", ""),
        ]
        blocks = con.execute("SELECT * FROM blocks ORDER BY height DESC LIMIT 10").fetchall()
        rows = [(link_block(b["hash"], fmt_int(b["height"])), h(fmt_time(b["time"])), fmt_int(b["ntx"]),
                 h(fmt_bytes(b["size"])), link_address(b["miner"], short=True) if b["miner"] else "–")
                for b in blocks]
        body = [f'<h1>Velincoin {h(CHAINS[self.chain][3])}</h1>',
                f'<section class="tiles">{"".join(tiles)}</section>',
                '<h2>Neueste Blöcke</h2>',
                table(["Höhe", "Zeit", "Transaktionen", "Grösse", "Belohnung an"], rows, numeric=(0, 2, 3)),
                '<p><a href="/blocks">Alle Blöcke</a> · <a href="/stats">Statistik und Charts</a></p>']
        mempool_txids = self.rpc_safe("getrawmempool") or []
        if mempool_txids:
            body.append("<h2>Unbestätigte Transaktionen</h2><ul class=\"plain\">")
            body.extend(f"<li>{link_tx(t, short=False)}</li>" for t in mempool_txids[:10])
            body.append("</ul>")
            if len(mempool_txids) > 10:
                body.append(f"<p>und {fmt_int(len(mempool_txids) - 10)} weitere.</p>")
        return "Übersicht", "\n".join(body)

    def page_blocks(self, con, query):
        tip = db_tip(con)
        if tip is None:
            return "Blöcke", "<h1>Blöcke</h1><p>Noch keine Blöcke im Index.</p>"
        start = min(query_int(query, "start", tip["height"]), tip["height"])
        blocks = con.execute("SELECT * FROM blocks WHERE height<=? ORDER BY height DESC LIMIT ?",
                             (start, BLOCKS_PER_PAGE)).fetchall()
        rows = [(link_block(b["hash"], fmt_int(b["height"])), h(fmt_time(b["time"])), fmt_int(b["ntx"]),
                 h(fmt_bytes(b["size"])), h(fmt_vlc(b["reward"])), link_address(b["miner"], short=True) if b["miner"] else "–")
                for b in blocks]
        newer = start + BLOCKS_PER_PAGE if start < tip["height"] else None
        older = start - BLOCKS_PER_PAGE if start - BLOCKS_PER_PAGE >= 0 else None
        nav = pager(f"/blocks?start={min(newer, tip['height'])}" if newer is not None else None,
                    f"/blocks?start={older}" if older is not None else None, "← Neuere", "Ältere →")
        return "Blöcke", ("<h1>Blöcke</h1>" +
                          table(["Höhe", "Zeit", "Transaktionen", "Grösse", "Coinbase (VLC)", "Belohnung an"],
                                rows, numeric=(0, 2, 3, 4)) + nav)

    def page_block(self, con, query, ident):
        b = self.block_row(con, ident)
        tip = db_tip(con)
        next_hash = db_hash(con, b["height"] + 1)
        info = details([
            ("Hash", f'<span class="mono">{h(b["hash"])}</span>'),
            ("Vorheriger Block", link_block(b["prev"], b["prev"]) if b["prev"] else "–"),
            ("Nächster Block", link_block(next_hash, next_hash) if next_hash else "–"),
            ("Zeit", h(fmt_time(b["time"]))),
            ("Bestätigungen", fmt_int(tip["height"] - b["height"] + 1)),
            ("Transaktionen", fmt_int(b["ntx"])),
            ("Grösse", h(fmt_bytes(b["size"]))),
            ("Gewicht", fmt_int(b["weight"])),
            ("Schwierigkeit", h(fmt_number(b["difficulty"]))),
            ("Bits", f'<span class="mono">{h(b["bits"])}</span>'),
            ("Nonce", fmt_int(b["nonce"])),
            ("Version", f'<span class="mono">0x{b["version"] & 0xffffffff:08x}</span>'),
            ("Merkle-Root", f'<span class="mono">{h(b["merkleroot"])}</span>'),
            ("Coinbase-Betrag", f"{h(fmt_vlc(b['reward']))} VLC"),
            ("Davon Gebühren", f"{h(fmt_vlc(b['fees']))} VLC"),
            ("Belohnung an", link_address(b["miner"]) if b["miner"] else "–"),
        ])
        page = query_int(query, "page", 1, minimum=1)
        txs = con.execute("SELECT * FROM txs WHERE height=? ORDER BY idx LIMIT ? OFFSET ?",
                          (b["height"], TXS_PER_PAGE, (page - 1) * TXS_PER_PAGE)).fetchall()
        rows = [(link_tx(t["txid"], short=False),
                 "Coinbase" if t["is_coinbase"] else (h(fmt_vlc(t["fee"])) if t["fee"] is not None else "–"),
                 h(fmt_vlc(t["total_out"])))
                for t in txs]
        pages = max(1, math.ceil(b["ntx"] / TXS_PER_PAGE))
        nav = ""
        if pages > 1:
            base = f"/block/{b['hash']}?page="
            nav = pager(base + str(page - 1) if page > 1 else None, base + str(page + 1) if page < pages else None,
                        "← Zurück", "Weiter →")
        title = f"Block {fmt_int(b['height'])}"
        if b["height"] == 0:
            title += " (Genesis-Block)"
        return title, (f"<h1>{h(title)}</h1>{info}<h2>Transaktionen</h2>" +
                       table(["Transaktion", "Gebühr (VLC)", "Ausgaben (VLC)"], rows, numeric=(1, 2)) + nav)

    def page_tx(self, con, query, txid):
        tx, row, spent = self.get_tx(con, txid)
        tip = db_tip(con)
        if row is not None:
            confirmations = tip["height"] - row["height"] + 1
            status = (f'Bestätigt in Block {link_block(row["blockhash"], fmt_int(row["height"]))}, '
                      f'{fmt_int(confirmations)} {"Bestätigung" if confirmations == 1 else "Bestätigungen"}')
            when = fmt_time(row["blocktime"])
        elif tx.get("blockhash"):
            status = f'Bestätigt in Block {link_block(tx["blockhash"], tx["blockhash"])} (noch nicht im Explorer)'
            when = fmt_time(tx["blocktime"]) if "blocktime" in tx else "–"
        else:
            status = '<span class="pending">Unbestätigt</span>, wartet im Mempool auf einen Block'
            when = "–"
        fee = None
        if "fee" in tx:
            fee = to_sats(tx["fee"])
        elif row is None and not tx.get("blockhash"):
            entry = self.rpc_safe("getmempoolentry", tx["txid"])
            if entry:
                fee = to_sats(entry["fees"]["base"])
        is_coinbase = "coinbase" in tx["vin"][0]
        info = details([
            ("Transaktions-ID", f'<span class="mono">{h(tx["txid"])}</span>'),
            ("Status", status),
            ("Zeit", h(when)),
            ("Grösse", f'{h(fmt_bytes(tx["size"]))} ({fmt_int(tx["vsize"])} vBytes)'),
            ("Gebühr", "keine (Coinbase)" if is_coinbase else
             (f"{h(fmt_vlc(fee))} VLC ({fee / tx['vsize']:.1f} sat/vB)" if fee is not None else "unbekannt")),
        ])
        ins = []
        for vin in tx["vin"]:
            if "coinbase" in vin:
                text = coinbase_text(vin["coinbase"])
                note = f"<br><small>Text im Coinbase-Feld: «{h(text)}»</small>" if text else ""
                ins.append((f"Neu erzeugte Coins (Block-Belohnung und Gebühren){note}", ""))
                continue
            prev = vin.get("prevout")
            address = prev["scriptPubKey"].get("address") if prev else None
            src = f'aus {link_tx(vin["txid"])}:{vin["vout"]}'
            who = link_address(address) if address else '<span class="muted">ohne Adresse</span>'
            ins.append((f"{who}<br><small>{src}</small>", h(fmt_vlc(to_sats(prev["value"]))) if prev else "?"))
        outs = []
        for o in tx["vout"]:
            spk = o["scriptPubKey"]
            address = spk.get("address")
            who = link_address(address) if address else f'<span class="muted">{h(spk.get("type", "?"))}</span>'
            n = o["n"]
            if spent.get(n):
                state = f"ausgegeben in {link_tx(spent[n])}"
            elif n in spent:
                state = "nicht ausgegeben"
            else:
                state = ""
            outs.append((f"{who}<br><small>{state}</small>" if state else who, h(fmt_vlc(to_sats(o["value"])))))
        return "Transaktion", (
            f"<h1>Transaktion</h1>{info}<div class=\"io\">"
            f"<section><h2>Eingänge ({len(ins)})</h2>{table(['Von', 'VLC'], ins, numeric=(1,))}</section>"
            f"<section><h2>Ausgänge ({len(outs)})</h2>{table(['An', 'VLC'], outs, numeric=(1,))}</section></div>")

    def address_summary(self, con, address):
        s = con.execute("SELECT COUNT(*) AS n, COALESCE(SUM(received),0) AS received, COALESCE(SUM(sent),0) AS sent "
                        "FROM address_txs WHERE address=?", (address,)).fetchone()
        utxos = con.execute("SELECT COUNT(*) FROM outputs WHERE address=? AND spent_txid IS NULL",
                            (address,)).fetchone()[0]
        return {"address": address, "tx_count": s["n"], "received": s["received"], "sent": s["sent"],
                "balance": s["received"] - s["sent"], "utxo_count": utxos}

    def check_address(self, con, address):
        address = normalize_address(address)
        known = con.execute("SELECT 1 FROM address_txs WHERE address=? LIMIT 1", (address,)).fetchone()
        if not known:
            v = self.rpc_safe("validateaddress", address)
            if not v or not v.get("isvalid"):
                raise NotFound("Das ist keine gültige Adresse für dieses Netz.")
        return address

    def page_address(self, con, query, address):
        address = self.check_address(con, address)
        s = self.address_summary(con, address)
        page = query_int(query, "page", 1, minimum=1)
        rows_db = con.execute("SELECT a.*, b.time FROM address_txs a JOIN blocks b ON b.height=a.height "
                              "WHERE a.address=? ORDER BY a.height DESC, a.txid LIMIT ? OFFSET ?",
                              (address, TXS_PER_PAGE, (page - 1) * TXS_PER_PAGE)).fetchall()
        rows = []
        for r in rows_db:
            delta = r["received"] - r["sent"]
            sign = "+" if delta > 0 else ""
            rows.append((h(fmt_time(r["time"])), link_block(r["height"], fmt_int(r["height"])), link_tx(r["txid"]),
                         f'<span class="{"pos" if delta > 0 else "neg" if delta < 0 else ""}">{sign}{h(fmt_vlc(delta))}</span>'))
        tiles = "".join([
            tile("Kontostand", vlc_html(s["balance"])),
            tile("Erhalten", vlc_html(s["received"])),
            tile("Gesendet", vlc_html(s["sent"])),
            tile("Transaktionen", fmt_int(s["tx_count"])),
        ])
        pages = max(1, math.ceil(s["tx_count"] / TXS_PER_PAGE))
        nav = ""
        if pages > 1:
            base = f"/address/{address}?page="
            nav = pager(base + str(page - 1) if page > 1 else None, base + str(page + 1) if page < pages else None,
                        "← Neuere", "Ältere →")
        history = (table(["Zeit", "Block", "Transaktion", "Änderung (VLC)"], rows, numeric=(1, 3)) + nav
                   if rows else "<p>Noch keine bestätigten Transaktionen.</p>")
        return "Adresse", (f'<h1>Adresse</h1><p class="mono big">{h(address)}</p>'
                           f'<section class="tiles">{tiles}</section>'
                           f'<h2>Verlauf</h2>{history}'
                           '<p class="muted">Nur bestätigte Transaktionen. Unbestätigte erscheinen hier, sobald sie in einem Block sind.</p>')

    def page_search(self, con, query):
        q = query.get("q", [""])[0].strip()
        if not q:
            raise Redirect("/")
        if HEIGHT_RE.fullmatch(q):
            if db_hash(con, int(q)):
                raise Redirect(f"/block/{int(q)}")
        elif HASH_RE.fullmatch(q):
            q = q.lower()
            if con.execute("SELECT 1 FROM blocks WHERE hash=?", (q,)).fetchone():
                raise Redirect(f"/block/{q}")
            if con.execute("SELECT 1 FROM txs WHERE txid=?", (q,)).fetchone():
                raise Redirect(f"/tx/{q}")
            if self.rpc_safe("getmempoolentry", q):
                raise Redirect(f"/tx/{q}")
        elif ADDRESS_RE.fullmatch(q):
            address = normalize_address(q)
            known = con.execute("SELECT 1 FROM address_txs WHERE address=? LIMIT 1", (address,)).fetchone()
            v = None if known else self.rpc_safe("validateaddress", address)
            if known or (v and v.get("isvalid")):
                raise Redirect(f"/address/{address}")
        raise NotFound(f"Nichts gefunden für «{q}».")

    def chart_data(self, con):
        tip = db_tip(con)
        if tip is None or tip["height"] == 0:
            return {"supply": [], "difficulty": [], "blocks_per_day": [], "txs_per_day": []}
        step = max(1, math.ceil(tip["height"] / CHART_MAX_POINTS))
        rows = con.execute("SELECT height, time, supply, difficulty FROM blocks "
                           "WHERE height>0 AND (height % ? = 0 OR height=?) ORDER BY height",
                           (step, tip["height"])).fetchall()
        supply, difficulty, t = [], [], 0
        for r in rows:
            t = max(t, r["time"])  # block times can go back a little, keep the line moving forward
            supply.append({"t": t, "h": r["height"], "v": r["supply"] / COIN})
            difficulty.append({"t": t, "h": r["height"], "v": r["difficulty"]})
        per_day = {r["day"]: (r["blocks"], r["txs"]) for r in con.execute(
            "SELECT time/86400 AS day, COUNT(*) AS blocks, SUM(ntx-1) AS txs FROM blocks "
            "WHERE height>0 GROUP BY day")}
        last_day = max(per_day)
        first_day = max(min(per_day), last_day - CHART_MAX_DAYS + 1)
        blocks_per_day, txs_per_day = [], []
        for day in range(first_day, last_day + 1):
            label = time.strftime("%Y-%m-%d", time.gmtime(day * 86400))
            n_blocks, n_txs = per_day.get(day, (0, 0))
            blocks_per_day.append({"d": label, "v": n_blocks})
            txs_per_day.append({"d": label, "v": n_txs})
        return {"supply": supply, "difficulty": difficulty,
                "blocks_per_day": blocks_per_day, "txs_per_day": txs_per_day}

    def page_stats(self, con, query):
        data = self.chart_data(con)
        if not data["supply"]:
            return "Statistik", "<h1>Statistik</h1><p>Noch keine geminten Blöcke im Index.</p>"

        def line_table(points, value_fmt):
            rows = [(fmt_int(p["h"]), h(fmt_time(p["t"])), h(value_fmt(p["v"]))) for p in reversed(points)]
            return table(["Block", "Zeit", "Wert"], rows, numeric=(0, 2))

        def bar_table(points):
            rows = [(h(p["d"]), fmt_int(p["v"])) for p in reversed(points)]
            return table(["Tag (UTC)", "Anzahl"], rows, numeric=(1,))

        def figure(chart_id, title, sub, table_html):
            return (f'<figure class="chart" data-chart="{chart_id}">'
                    f'<figcaption><span class="chart-title">{h(title)}</span><span class="chart-sub">{h(sub)}</span></figcaption>'
                    f'<div class="plot"></div>'
                    f'<details><summary>Als Tabelle anzeigen</summary>{table_html}</details></figure>')

        charts = [
            figure("supply", "Erzeugte Coins", "VLC im Umlauf nach jedem Block",
                   line_table(data["supply"], lambda v: fmt_vlc(round(v * COIN)))),
            figure("difficulty", "Schwierigkeit", "Wie schwer es ist, einen Block zu finden",
                   line_table(data["difficulty"], fmt_number)),
            figure("blocks_per_day", "Blöcke pro Tag", f"Letzte {CHART_MAX_DAYS} Tage, UTC",
                   bar_table(data["blocks_per_day"])),
            figure("txs_per_day", "Transaktionen pro Tag", "Ohne Coinbase, letzte 90 Tage, UTC",
                   bar_table(data["txs_per_day"])),
        ]
        payload = json.dumps(data).replace("<", "\\u003c")
        intro = ("<p class=\"lead\">Diese Charts zeigen echte Daten aus der Blockchain. Einen Preis gibt es erst, "
                 "wenn VLC irgendwo gehandelt wird.</p>")
        return "Statistik", (f"<h1>Statistik</h1>{intro}<div class=\"charts\">{''.join(charts)}</div>"
                             f'<script type="application/json" id="chart-data">{payload}</script>'
                             '<script src="/static/charts.js" defer></script>')

    # -- JSON API -----------------------------------------------------------

    def api_status(self, con, query):
        tip = db_tip(con)
        return {
            "chain": self.chain,
            "index_height": tip["height"] if tip else None,
            "index_hash": tip["hash"] if tip else None,
            "node_height": self.indexer.status["node_height"],
            "error": self.indexer.status["error"],
            "supply_sats": tip["supply"] if tip else 0,
            "difficulty": tip["difficulty"] if tip else None,
        }

    def api_block(self, con, query, ident):
        b = dict(self.block_row(con, ident))
        b["txids"] = [r["txid"] for r in con.execute("SELECT txid FROM txs WHERE height=? ORDER BY idx", (b["height"],))]
        return b

    def api_tx(self, con, query, txid):
        tx, row, spent = self.get_tx(con, txid)
        for o in tx["vout"]:
            if o["n"] in spent:
                o["spent_by"] = spent[o["n"]]
        tx["explorer_height"] = row["height"] if row else None
        return tx

    def api_address(self, con, query, address):
        address = self.check_address(con, address)
        s = self.address_summary(con, address)
        s["txs"] = [dict(r) for r in con.execute(
            "SELECT txid, height, received, sent FROM address_txs WHERE address=? ORDER BY height DESC LIMIT 1000",
            (address,))]
        return s

    def api_charts(self, con, query):
        return self.chart_data(con)


ROUTES = [
    (re.compile(r"/"), "page_home"),
    (re.compile(r"/blocks"), "page_blocks"),
    (re.compile(r"/block/([0-9a-fA-F]{64}|\d{1,10})"), "page_block"),
    (re.compile(r"/tx/([0-9a-fA-F]{64})"), "page_tx"),
    (re.compile(r"/address/([0-9A-Za-z]{14,100})"), "page_address"),
    (re.compile(r"/search"), "page_search"),
    (re.compile(r"/stats"), "page_stats"),
    (re.compile(r"/api/status"), "api_status"),
    (re.compile(r"/api/block/([0-9a-fA-F]{64}|\d{1,10})"), "api_block"),
    (re.compile(r"/api/tx/([0-9a-fA-F]{64})"), "api_tx"),
    (re.compile(r"/api/address/([0-9A-Za-z]{14,100})"), "api_address"),
    (re.compile(r"/api/charts"), "api_charts"),
]
STATIC_FILES = {
    "style.css": "text/css; charset=utf-8",
    "charts.js": "text/javascript; charset=utf-8",
    "logo.png": "image/png",
    "favicon.png": "image/png",
}


class Handler(BaseHTTPRequestHandler):
    server_version = "VelincoinExplorer/1.0"

    def log_message(self, format, *args):
        pass  # no access log

    def send(self, status, ctype, body, extra_headers=()):
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        if ctype.startswith("text/html"):
            self.send_header("Content-Security-Policy", CSP)
        for k, v in extra_headers:
            self.send_header(k, v)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def do_HEAD(self):
        self.do_GET()

    def do_GET(self):
        explorer = self.server.explorer
        url = urllib.parse.urlsplit(self.path)
        path = url.path
        query = urllib.parse.parse_qs(url.query)

        if path.startswith("/static/"):
            name = path[len("/static/"):]
            if name not in STATIC_FILES:
                return self.send(404, "text/plain; charset=utf-8", b"Not found")
            with open(os.path.join(STATIC_DIR, name), "rb") as f:
                return self.send(200, STATIC_FILES[name], f.read(), [("Cache-Control", "max-age=300")])

        is_api = path.startswith("/api/")
        for pattern, name in ROUTES:
            m = pattern.fullmatch(path)
            if m:
                break
        else:
            return self.error_page(404, "Diese Seite gibt es nicht.", is_api)

        con = open_db(explorer.db_path)
        try:
            result = getattr(explorer, name)(con, query, *m.groups())
            if is_api:
                body = json.dumps(result, default=str, indent=1).encode()
                return self.send(200, "application/json; charset=utf-8", body)
            title, content = result
            return self.send(200, "text/html; charset=utf-8", explorer.layout(con, title, content).encode())
        except Redirect as r:
            return self.send(302, "text/plain; charset=utf-8", b"", [("Location", r.location)])
        except NotFound as e:
            return self.error_page(404, str(e), is_api, con)
        except NodeUnavailable as e:
            return self.error_page(503, f"Der Velincoin-Node ist nicht erreichbar: {e}", is_api, con)
        except Exception as e:
            explorer.indexer.log("Fehler bei " + path + "\n" + traceback.format_exc())
            return self.error_page(500, f"Interner Fehler: {e}", is_api, con)
        finally:
            con.close()

    def error_page(self, status, message, is_api, con=None):
        if is_api:
            return self.send(status, "application/json; charset=utf-8", json.dumps({"error": message}).encode())
        explorer = self.server.explorer
        own_con = con is None
        con = con or open_db(explorer.db_path)
        try:
            title = "Nicht gefunden" if status == 404 else "Fehler"
            body = f"<h1>{h(title)}</h1><p>{h(message)}</p><p><a href=\"/\">Zur Übersicht</a></p>"
            return self.send(status, "text/html; charset=utf-8", explorer.layout(con, title, body).encode())
        finally:
            if own_con:
                con.close()


def make_server(explorer, bind, port):
    server = ThreadingHTTPServer((bind, port), Handler)
    server.daemon_threads = True
    server.explorer = explorer
    return server


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def log(msg):
    print(time.strftime("%H:%M:%S"), msg, file=sys.stderr, flush=True)


def build_rpc(args):
    subdir, default_port, _, _ = CHAINS[args.chain]
    datadir = args.datadir or default_datadir()
    cookie = args.rpccookiefile or os.path.join(datadir, subdir, ".cookie")
    url = f"http://{args.rpcconnect}:{args.rpcport or default_port}/"
    return RPC(url, args.rpcuser, args.rpcpassword, cookie)


def main():
    ap = argparse.ArgumentParser(description="Block Explorer für Velincoin")
    ap.add_argument("--chain", choices=sorted(CHAINS), default="testnet4",
                    help="Netz: main, testnet4 (Standard) oder regtest")
    ap.add_argument("--datadir", help="Datenordner von Velincoin Core (für die Cookie-Datei)")
    ap.add_argument("--rpcconnect", default="127.0.0.1", help="Adresse des Nodes (Standard 127.0.0.1)")
    ap.add_argument("--rpcport", type=int, help="RPC-Port des Nodes (Standard je nach Netz)")
    ap.add_argument("--rpcuser", help="RPC-Benutzer (statt Cookie-Datei)")
    ap.add_argument("--rpcpassword", help="RPC-Passwort (statt Cookie-Datei)")
    ap.add_argument("--rpccookiefile", help="Pfad zur Cookie-Datei")
    ap.add_argument("--db", help="SQLite-Datei für den Index (Standard: explorer-<netz>.sqlite in diesem Ordner)")
    ap.add_argument("--bind", default="127.0.0.1", help="Adresse für den Webserver (Standard 127.0.0.1)")
    ap.add_argument("--port", type=int, default=8080, help="Port für den Webserver (Standard 8080)")
    ap.add_argument("--poll", type=float, default=5.0, help="Sekunden zwischen zwei Abfragen beim Node")
    args = ap.parse_args()

    rpc = build_rpc(args)
    db_path = args.db or os.path.join(HERE, f"explorer-{args.chain}.sqlite")

    try:
        info = rpc.call("getblockchaininfo")
        if info["chain"] != args.chain:
            sys.exit(f"Fehler: Der Node läuft im Netz '{info['chain']}', nicht '{args.chain}'.")
        if info.get("pruned"):
            sys.exit("Fehler: Der Node läuft mit Pruning. Der Explorer braucht alle Blöcke (prune=0).")
        log(f"Node erreichbar: {args.chain}, {info['blocks']} Blöcke")
    except (NodeUnavailable, RPCError) as e:
        log(f"Warnung: {e}. Ich versuche es weiter im Hintergrund.")

    init_db(db_path)
    indexer = Indexer(rpc, db_path, args.chain, poll=args.poll, log=log)
    explorer = Explorer(rpc, db_path, args.chain, indexer)
    server = make_server(explorer, args.bind, args.port)
    indexer.start()
    log(f"Explorer läuft auf http://{args.bind}:{args.port}/ (Datenbank {db_path}). Beenden mit Ctrl+C.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        indexer.stop()
        server.server_close()


if __name__ == "__main__":
    main()
