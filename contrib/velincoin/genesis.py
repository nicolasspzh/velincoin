#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Create a genesis block the same way CreateGenesisBlock() in
src/kernel/chainparams.cpp does, and mine a valid nonce for it.

Usage:
  genesis.py --selftest
      Rebuild the Bitcoin and testnet4 genesis blocks and check that the
      hashes match the known values. This proves the serialization is right.

  genesis.py --message "text" --time 1234567890 [--bits 1d00ffff]
      Mine a new genesis block. Needs the compiled genesis_miner program
      (see genesis_miner.cpp) next to this script.
"""

import argparse
import hashlib
import os
import struct
import subprocess
import sys


def sha256d(data: bytes) -> bytes:
    return hashlib.sha256(hashlib.sha256(data).digest()).digest()


def push_data(data: bytes) -> bytes:
    """Serialize a data push like CScript::operator<<(std::vector)."""
    n = len(data)
    if n < 0x4c:
        return bytes([n]) + data
    if n <= 0xff:
        return b"\x4c" + bytes([n]) + data
    if n <= 0xffff:
        return b"\x4d" + struct.pack("<H", n) + data
    return b"\x4e" + struct.pack("<I", n) + data


def compact_size(n: int) -> bytes:
    if n < 0xfd:
        return bytes([n])
    if n <= 0xffff:
        return b"\xfd" + struct.pack("<H", n)
    if n <= 0xffffffff:
        return b"\xfe" + struct.pack("<I", n)
    return b"\xff" + struct.pack("<Q", n)


def coinbase_tx(message: str, output_script: bytes, reward: int) -> bytes:
    # scriptSig = CScript() << 486604799 << CScriptNum(4) << message
    # 486604799 is serialized as the 4 byte number ffff001d,
    # CScriptNum(4) as the 1 byte number 04.
    script_sig = push_data(bytes.fromhex("ffff001d")) + push_data(b"\x04") + push_data(message.encode())
    tx = struct.pack("<i", 1)                       # version
    tx += compact_size(1)                           # one input
    tx += b"\x00" * 32 + struct.pack("<I", 0xffffffff)  # null prevout
    tx += compact_size(len(script_sig)) + script_sig
    tx += struct.pack("<I", 0xffffffff)             # sequence
    tx += compact_size(1)                           # one output
    tx += struct.pack("<q", reward)
    tx += compact_size(len(output_script)) + output_script
    tx += struct.pack("<I", 0)                      # lock time
    return tx


def header_prefix(merkle: bytes, time: int, bits: int, version: int = 1) -> bytes:
    """The first 76 bytes of the 80 byte block header (everything but the nonce)."""
    return struct.pack("<i", version) + b"\x00" * 32 + merkle + struct.pack("<II", time, bits)


def block_hash(prefix: bytes, nonce: int) -> str:
    return sha256d(prefix + struct.pack("<I", nonce))[::-1].hex()


BITCOIN_MSG = "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
BITCOIN_SCRIPT = push_data(bytes.fromhex(
    "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f")) + b"\xac"
ZERO_KEY_SCRIPT = push_data(b"\x00" * 33) + b"\xac"
COIN = 100_000_000


def selftest() -> None:
    cases = [
        ("Bitcoin main", BITCOIN_MSG, BITCOIN_SCRIPT, 1231006505, 2083236893,
         "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
         "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"),
        ("Bitcoin testnet4",
         "03/May/2024 000000000000000000001ebd58c244970b3aa9d783bb001011fbe8ea8e98e00e",
         ZERO_KEY_SCRIPT, 1714777860, 393743547,
         "00000000da84f2bafbbc53dee25a72ae507ff4914b867c565be350b0da8bf043",
         "7aa0a7ae1e223414cb807e40cd57e667b718e42aaf9306db9102fe28912b7b4e"),
    ]
    for name, msg, script, time, nonce, want_hash, want_merkle in cases:
        merkle = sha256d(coinbase_tx(msg, script, 50 * COIN))
        got_merkle = merkle[::-1].hex()
        got_hash = block_hash(header_prefix(merkle, time, 0x1d00ffff), nonce)
        ok = got_merkle == want_merkle and got_hash == want_hash
        print(f"{name}: {'OK' if ok else 'FAILED'} hash={got_hash} merkle={got_merkle}")
        if not ok:
            sys.exit(1)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--selftest", action="store_true")
    parser.add_argument("--message")
    parser.add_argument("--time", type=int)
    parser.add_argument("--bits", default="1d00ffff")
    parser.add_argument("--threads", type=int, default=os.cpu_count())
    args = parser.parse_args()

    if args.selftest:
        selftest()
        return

    bits = int(args.bits, 16)
    merkle = sha256d(coinbase_tx(args.message, ZERO_KEY_SCRIPT, 50 * COIN))
    miner = os.path.join(os.path.dirname(os.path.abspath(__file__)), "genesis_miner")
    time = args.time
    while True:
        prefix = header_prefix(merkle, time, bits)
        print(f"Mining with time={time} ...", flush=True)
        out = subprocess.run([miner, prefix.hex(), args.bits, str(args.threads)],
                             capture_output=True, text=True, check=True).stdout.strip()
        if out != "NOTFOUND":
            nonce = int(out)
            break
        time += 1  # every nonce failed, try the next second
    print(f"message = {args.message}")
    print(f"time    = {time}")
    print(f"nonce   = {nonce}")
    print(f"bits    = 0x{args.bits}")
    print(f"hash    = {block_hash(header_prefix(merkle, time, bits), nonce)}")
    print(f"merkle  = {merkle[::-1].hex()}")


if __name__ == "__main__":
    main()
