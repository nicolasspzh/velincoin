#!/usr/bin/env bash
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
#
# Packs the Linux server programs, the block explorer and the systemd units
# into website/server/, where install.sh downloads them from.
#
# Build the programs first (see README, "Server-Programme für Linux"):
#   make -C depends HOST=x86_64-pc-linux-gnu NO_QT=1 NO_ZMQ=1 NO_USDT=1 NO_QR=1
#   cmake -B build-linux --toolchain depends/x86_64-pc-linux-gnu/toolchain.cmake \
#     -DBUILD_GUI=OFF -DENABLE_WALLET=OFF -DBUILD_TESTS=OFF -DBUILD_BENCH=OFF \
#     -DWITH_ZMQ=OFF -DENABLE_IPC=OFF -DBUILD_UTIL=OFF -DBUILD_TX=OFF -DBUILD_WALLET_TOOL=OFF
#   cmake --build build-linux --target bitcoind bitcoin-cli
# Then, from the repository root:
#   contrib/velincoin/server/package.sh [build-linux]

set -euo pipefail

ROOT=$(cd "$(dirname "$0")/../../.." && pwd)
BUILD=${1:-$ROOT/build-linux}
OUT=$ROOT/website/server
NAME=velincoin-server-linux-x86_64

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
pkg=$work/$NAME
mkdir -p "$pkg/bin" "$pkg/explorer/static" "$pkg/systemd"

for prog in velincoind velincoin-cli; do
    cp "$BUILD/bin/$prog" "$pkg/bin/"
    strip "$pkg/bin/$prog"
done
cp "$ROOT/contrib/velincoin/explorer/explorer.py" "$pkg/explorer/"
cp -r "$ROOT/contrib/velincoin/explorer/static/." "$pkg/explorer/static/"
cp "$ROOT/contrib/velincoin/server/systemd/"*.service "$pkg/systemd/"
cp "$ROOT/COPYING" "$pkg/"

mkdir -p "$OUT"
# Same file contents give the same archive, so an unchanged package keeps its checksum
tar --sort=name --owner=0 --group=0 --numeric-owner --mtime='2026-01-01 00:00:00' \
    -C "$work" -cf - "$NAME" | gzip -n -9 > "$OUT/$NAME.tar.gz"
sha=$(sha256sum "$OUT/$NAME.tar.gz" | cut -d' ' -f1)
sed "s/@PACKAGE_SHA256@/$sha/" "$ROOT/contrib/velincoin/server/install.sh" > "$OUT/install.sh"
chmod 755 "$OUT/install.sh"
echo "$OUT/$NAME.tar.gz"
echo "sha256 $sha"
ls -l "$OUT"
