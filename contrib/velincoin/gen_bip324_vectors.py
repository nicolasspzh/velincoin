#!/usr/bin/env python3
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
"""Recompute the BIP324 packet encoding test vectors for the Velincoin
network magic.

BIP324 mixes the network magic into the key derivation, so the official
test vectors (made for Bitcoin) do not match Velincoin. This script takes
the official inputs and recomputes the outputs with the reference
implementation from https://github.com/bitcoin/bips (bip-0324/).

First it recomputes every vector with the Bitcoin magic and checks that the
result equals the official file. Only then it computes the Velincoin values.

Usage: gen_bip324_vectors.py /path/to/bips/bip-0324
Prints the TestBIP324PacketVector(...) calls for src/test/bip324_tests.cpp.
"""

import csv
import os
import sys

BITCOIN_MAGIC = bytes.fromhex("f9beb4d9")
VELINCOIN_MAGIC = bytes.fromhex("e4d2a7c9")  # must match pchMessageStart in chainparams.cpp


def recompute(reference, row, magic):
    reference.NETWORK_MAGIC = magic
    initiating = bool(int(row["in_initiating"]))
    shared_secret = bytes.fromhex(row["mid_shared_secret"])
    peer = reference.initialize_v2_transport(shared_secret, initiating)
    for _ in range(int(row["in_idx"])):
        reference.v2_enc_packet(peer, b"")
    contents = bytes.fromhex(row["in_contents"]) * int(row["in_multiply"])
    ciphertext = reference.v2_enc_packet(peer, contents, bytes.fromhex(row["in_aad"]), bool(int(row["in_ignore"])))
    long_msg = len(ciphertext) > 128
    out = dict(row)
    out["mid_send_garbage_terminator"] = peer["send_garbage_terminator"].hex()
    out["mid_recv_garbage_terminator"] = peer["recv_garbage_terminator"].hex()
    out["out_session_id"] = peer["session_id"].hex()
    out["out_ciphertext"] = "" if long_msg else ciphertext.hex()
    out["out_ciphertext_endswith"] = ciphertext[-128:].hex() if long_msg else ""
    return out


def to_cpp(row):
    # Same conversion as described in src/test/bip324_tests.cpp
    quote = lambda x: "\"" + x + "\""
    args = [
        row['in_idx'],
        quote(row['in_priv_ours']),
        quote(row['in_ellswift_ours']),
        quote(row['in_ellswift_theirs']),
        "true" if int(row['in_initiating']) else "false",
        quote(row['in_contents']),
        row['in_multiply'],
        quote(row['in_aad']),
        "true" if int(row['in_ignore']) else "false",
        quote(row['mid_send_garbage_terminator']),
        quote(row['mid_recv_garbage_terminator']),
        quote(row['out_session_id']),
        quote(row['out_ciphertext']),
        quote(row['out_ciphertext_endswith'])
    ]
    return "    TestBIP324PacketVector(\n        " + ",\n        ".join(args) + ");"


def main():
    bip_dir = sys.argv[1]
    sys.path.insert(0, bip_dir)
    import reference

    with open(os.path.join(bip_dir, "packet_encoding_test_vectors.csv"), newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    keys = ["mid_send_garbage_terminator", "mid_recv_garbage_terminator", "out_session_id",
            "out_ciphertext", "out_ciphertext_endswith"]
    for row in rows:
        check = recompute(reference, row, BITCOIN_MAGIC)
        for k in keys:
            if check[k] != row[k]:
                sys.exit(f"Self check failed for vector {row['in_idx']} field {k}")
    print(f"// self check with Bitcoin magic passed for {len(rows)} vectors", file=sys.stderr)

    for row in rows:
        print(to_cpp(recompute(reference, row, VELINCOIN_MAGIC)))


if __name__ == "__main__":
    main()
