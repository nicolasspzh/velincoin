#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Convert Bitcoin main network addresses and private keys in test files
to the Velincoin main network format.

The content (hash or key) stays the same. Only the prefix and the checksum
change:
  Base58 version 0   (P2PKH, '1...')  -> 70  ('V...')
  Base58 version 5   (P2SH,  '3...')  -> 63  ('S...')
  Base58 version 128 (WIF private key) -> 198
  Bech32/Bech32m 'bc1...'             -> 'vlc1...'

Strings with an invalid checksum are left alone, so test cases that check
for invalid input keep working.

Usage: convert_test_vectors.py FILE [FILE ...]   (files are changed in place)
"""

import hashlib
import re
import sys

B58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
BASE58_MAP = {0: 70, 5: 63, 128: 198}

BECH32_CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l"
BECH32_CONST = 1
BECH32M_CONST = 0x2bc830a3
OLD_HRP = "bc"
NEW_HRP = "vlc"


def sha256d(b: bytes) -> bytes:
    return hashlib.sha256(hashlib.sha256(b).digest()).digest()


def b58decode_check(s: str):
    n = 0
    for c in s:
        n = n * 58 + B58.index(c)
    raw = n.to_bytes((n.bit_length() + 7) // 8, "big") if n else b""
    raw = b"\x00" * (len(s) - len(s.lstrip("1"))) + raw
    if len(raw) < 5 or sha256d(raw[:-4])[:4] != raw[-4:]:
        return None
    return raw[:-4]


def b58encode_check(payload: bytes) -> str:
    data = payload + sha256d(payload)[:4]
    n = int.from_bytes(data, "big")
    out = ""
    while n:
        n, r = divmod(n, 58)
        out = B58[r] + out
    return "1" * (len(data) - len(data.lstrip(b"\x00"))) + out


def convert_base58(s: str):
    payload = b58decode_check(s)
    if payload is None:
        return None
    version, body = payload[0], payload[1:]
    if version not in BASE58_MAP:
        return None
    if version in (0, 5) and len(body) != 20:
        return None
    if version == 128 and not (len(body) == 32 or (len(body) == 33 and body[-1] == 1)):
        return None
    return b58encode_check(bytes([BASE58_MAP[version]]) + body)


def bech32_polymod(values):
    gen = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3]
    chk = 1
    for v in values:
        b = chk >> 25
        chk = (chk & 0x1ffffff) << 5 ^ v
        for i in range(5):
            chk ^= gen[i] if ((b >> i) & 1) else 0
    return chk


def hrp_expand(hrp):
    return [ord(x) >> 5 for x in hrp] + [0] + [ord(x) & 31 for x in hrp]


def convert_bech32(s: str):
    lower = s.lower()
    if s != lower and s != s.upper():
        return None  # mixed case is invalid anyway
    pos = lower.rfind("1")
    if lower[:pos] != OLD_HRP:
        return None
    try:
        data = [BECH32_CHARSET.index(c) for c in lower[pos + 1:]]
    except ValueError:
        return None
    const = bech32_polymod(hrp_expand(OLD_HRP) + data)
    if const not in (BECH32_CONST, BECH32M_CONST):
        return None
    values = data[:-6]
    polymod = bech32_polymod(hrp_expand(NEW_HRP) + values + [0] * 6) ^ const
    checksum = [(polymod >> 5 * (5 - i)) & 31 for i in range(6)]
    out = NEW_HRP + "1" + "".join(BECH32_CHARSET[d] for d in values + checksum)
    return out.upper() if s == s.upper() else out


TOKEN = re.compile(r"(?<![0-9A-Za-z])([bB][cC]1[0-9A-Za-z]{6,}|[1-9A-HJ-NP-Za-km-z]{25,60})(?![0-9A-Za-z])")


def convert_text(text: str):
    count = 0

    def repl(m):
        nonlocal count
        tok = m.group(1)
        new = convert_bech32(tok) if tok[:3].lower() == "bc1" else convert_base58(tok)
        if new is None:
            return tok
        count += 1
        return new

    return TOKEN.sub(repl, text), count


def main():
    for path in sys.argv[1:]:
        with open(path, encoding="utf-8") as f:
            text = f.read()
        new_text, count = convert_text(text)
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_text)
        print(f"{path}: {count} converted")


if __name__ == "__main__":
    main()
