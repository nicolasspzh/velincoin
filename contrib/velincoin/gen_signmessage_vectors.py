#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Recompute the signed message test vectors for the Velincoin message prefix.

This is an independent, slow, pure Python implementation of message signing
as done by MessageSign()/MessageVerify() in src/common/signmessage.cpp:
  hash      = SHA256d(ser_string(prefix) || ser_string(message))
  signature = secp256k1 ECDSA with RFC6979 nonces, low S, recoverable,
              encoded as base64(27 + recid + 4*compressed || r || s)

It first rebuilds the original Bitcoin Core vectors with the Bitcoin prefix
and stops if anything differs. Only then it prints the Velincoin values.
Never use this code for real keys: it is not constant time.
"""

import base64
import hashlib
import hmac
import sys

P = 2**256 - 2**32 - 977
N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
G = (0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
     0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8)

BITCOIN_PREFIX = "Bitcoin Signed Message:\n"
VELINCOIN_PREFIX = "Velincoin Signed Message:\n"  # must match MESSAGE_MAGIC


def point_add(a, b):
    if a is None:
        return b
    if b is None:
        return a
    if a[0] == b[0] and (a[1] + b[1]) % P == 0:
        return None
    if a == b:
        lam = 3 * a[0] * a[0] * pow(2 * a[1], -1, P) % P
    else:
        lam = (b[1] - a[1]) * pow(b[0] - a[0], -1, P) % P
    x = (lam * lam - a[0] - b[0]) % P
    return (x, (lam * (a[0] - x) - a[1]) % P)


def point_mul(k, pt):
    result = None
    while k:
        if k & 1:
            result = point_add(result, pt)
        pt = point_add(pt, pt)
        k >>= 1
    return result


def ser_pubkey(pt, compressed):
    if compressed:
        return bytes([2 + (pt[1] & 1)]) + pt[0].to_bytes(32, "big")
    return b"\x04" + pt[0].to_bytes(32, "big") + pt[1].to_bytes(32, "big")


def ser_string(b):
    assert len(b) < 253
    return bytes([len(b)]) + b


def message_hash(prefix, message):
    data = ser_string(prefix.encode()) + ser_string(message.encode())
    return hashlib.sha256(hashlib.sha256(data).digest()).digest()


def rfc6979_nonce(key32, msg32):
    # Same as libsecp256k1 nonce_function_rfc6979 without extra data.
    msg32 = (int.from_bytes(msg32, "big") % N).to_bytes(32, "big")
    v = b"\x01" * 32
    k = b"\x00" * 32
    k = hmac.new(k, v + b"\x00" + key32 + msg32, hashlib.sha256).digest()
    v = hmac.new(k, v, hashlib.sha256).digest()
    k = hmac.new(k, v + b"\x01" + key32 + msg32, hashlib.sha256).digest()
    v = hmac.new(k, v, hashlib.sha256).digest()
    while True:
        v = hmac.new(k, v, hashlib.sha256).digest()
        nonce = int.from_bytes(v, "big")
        if 1 <= nonce < N:
            return nonce
        k = hmac.new(k, v + b"\x00", hashlib.sha256).digest()
        v = hmac.new(k, v, hashlib.sha256).digest()


def sign_message(seckey, prefix, message, compressed=True):
    z = message_hash(prefix, message)
    d = int.from_bytes(seckey, "big")
    nonce = rfc6979_nonce(seckey, z)
    R = point_mul(nonce, G)
    r = R[0] % N
    s = pow(nonce, -1, N) * (int.from_bytes(z, "big") + r * d) % N
    recid = (R[1] & 1) | (2 if R[0] >= N else 0)
    if s > N // 2:
        s = N - s
        recid ^= 1
    header = 27 + recid + (4 if compressed else 0)
    return base64.b64encode(bytes([header]) + r.to_bytes(32, "big") + s.to_bytes(32, "big")).decode()


def recover_pubkey(signature, prefix, message):
    sig = base64.b64decode(signature)
    header = sig[0]
    compressed = header >= 31
    recid = (header - 27) & 3
    r = int.from_bytes(sig[1:33], "big")
    s = int.from_bytes(sig[33:65], "big")
    x = r + (N if recid & 2 else 0)
    y = pow((x * x * x + 7) % P, (P + 1) // 4, P)
    if (y & 1) != (recid & 1):
        y = P - y
    R = (x, y)
    z = int.from_bytes(message_hash(prefix, message), "big")
    r_inv = pow(r, -1, N)
    Q = point_add(point_mul(s * r_inv % N, R), point_mul((-z * r_inv) % N, G))
    return ser_pubkey(Q, compressed)


B58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"


def b58check(payload):
    data = payload + hashlib.sha256(hashlib.sha256(payload).digest()).digest()[:4]
    n = int.from_bytes(data, "big")
    out = ""
    while n:
        n, rem = divmod(n, 58)
        out = B58[rem] + out
    return "1" * (len(data) - len(data.lstrip(b"\x00"))) + out


def b58decode_check(s):
    n = 0
    for c in s:
        n = n * 58 + B58.index(c)
    raw = n.to_bytes((n.bit_length() + 7) // 8, "big")
    raw = b"\x00" * (len(s) - len(s.lstrip("1"))) + raw
    assert hashlib.sha256(hashlib.sha256(raw[:-4]).digest()).digest()[:4] == raw[-4:]
    return raw[:-4]


def p2pkh(pubkey, version):
    h160 = hashlib.new("ripemd160", hashlib.sha256(pubkey).digest()).digest()
    return b58check(bytes([version]) + h160)


def address_of_seckey(seckey, compressed, version):
    return p2pkh(ser_pubkey(point_mul(int.from_bytes(seckey, "big"), G), compressed), version)


# Vectors from Bitcoin Core v31.1
UNIT_SECKEY = bytes.fromhex("D97F5108F11CDA6EEEBAAA420FEF0726B1F898060B98489FA3098463C0032866")
UNIT_MESSAGE = "Trust no one"
UNIT_SIG_BITCOIN = "IPojfrX2dfPnH26UegfbGQQLrdK844DlHq5157/P6h57WyuS/Qsl+h/WSVGDF4MUi4rWSswW38oimDYfNNUBUOk="
UNIT_ADDR_BITCOIN = "15CRxFdyRpGZLW9w8HnHvVduizdL5jKNbs"
CRAFTED_SIG = "IIcaIENoYW5jZWxsb3Igb24gYnJpbmsgb2Ygc2Vjb25kIGJhaWxvdXQgZm9yIGJhbmtzIAaHRtbCeDZINyavx14="
CRAFTED_MESSAGE = "Trust me"
CRAFTED_ADDR_BITCOIN = "11canuhp9X2NocwCq7xNrQYTmUgZAnLK3"
FUNC_WIF = "cUeKHd5orzT3mz8P9pxyREHfsWtVfgsfDjiZZBcjUBAaGk1BTj7N"  # regtest
FUNC_MESSAGE = "This is just a test message"
FUNC_SIG_BITCOIN = "INbVnW4e6PeRmsv2Qgu8NuopvrVjkcxob+sX8OcZG0SALhWybUjzMLPdAsXI46YZGb0KQTRii+wWIQzRpG/U+S0="
FUNC_ADDR = "mpLQjfK79b7CCV4VMJWEWAj5Mpx8Up5zxB"


def check(name, got, want):
    if got != want:
        sys.exit(f"Self check FAILED for {name}: got {got}, want {want}")
    print(f"self check ok: {name}")


def main():
    wif = b58decode_check(FUNC_WIF)
    func_seckey, func_compressed = wif[1:33], len(wif) == 34

    check("unit signature", sign_message(UNIT_SECKEY, BITCOIN_PREFIX, UNIT_MESSAGE), UNIT_SIG_BITCOIN)
    check("unit address", p2pkh(recover_pubkey(UNIT_SIG_BITCOIN, BITCOIN_PREFIX, UNIT_MESSAGE), 0), UNIT_ADDR_BITCOIN)
    check("crafted signature address", p2pkh(recover_pubkey(CRAFTED_SIG, BITCOIN_PREFIX, CRAFTED_MESSAGE), 0), CRAFTED_ADDR_BITCOIN)
    check("functional signature", sign_message(func_seckey, BITCOIN_PREFIX, FUNC_MESSAGE, func_compressed), FUNC_SIG_BITCOIN)
    check("functional address", address_of_seckey(func_seckey, func_compressed, 111), FUNC_ADDR)

    print()
    print("Velincoin values (prefix %r):" % VELINCOIN_PREFIX)
    unit_sig = sign_message(UNIT_SECKEY, VELINCOIN_PREFIX, UNIT_MESSAGE)
    print("unit_signature      =", unit_sig)
    print("unit_address        =", p2pkh(recover_pubkey(unit_sig, VELINCOIN_PREFIX, UNIT_MESSAGE), 70))
    print("crafted_address     =", p2pkh(recover_pubkey(CRAFTED_SIG, VELINCOIN_PREFIX, CRAFTED_MESSAGE), 70))
    print("functional_signature=", sign_message(func_seckey, VELINCOIN_PREFIX, FUNC_MESSAGE, func_compressed))


if __name__ == "__main__":
    main()
