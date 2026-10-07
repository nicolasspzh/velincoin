#!/usr/bin/env bash
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
#
# Sets up a Velincoin server: a node for the main network and one for the
# test network, plus the live block explorer for both. Run it as root on
# Ubuntu 24.04 (or newer) or Debian 13, x86_64:
#
#   curl -fsSL https://velincoin.vercel.app/server/install.sh | bash
#
# Running it again updates the programs and keeps all data.
# Guide: doc/velincoin/server-einrichten.md

set -euo pipefail

BASE_URL="${VELINCOIN_BASE_URL:-https://velincoin.vercel.app/server}"
PACKAGE="velincoin-server-linux-x86_64.tar.gz"
PACKAGE_SHA256="@PACKAGE_SHA256@"
PREFIX=/opt/velincoin
DATADIR=/var/lib/velincoin
SERVICES="velincoind-main velincoind-test velincoin-explorer-main velincoin-explorer-test"

say() { printf '\n==> %s\n' "$*"; }
fail() { printf '\nFehler: %s\n' "$*" >&2; exit 1; }

[ "$(id -u)" -eq 0 ] || fail "Bitte als root ausführen (anmelden mit: ssh root@DEINE-IP)."
[ "$(uname -m)" = "x86_64" ] || fail "Dieses Skript ist nur für x86_64-Server."
. /etc/os-release
case "${ID}:${VERSION_ID%%.*}" in
    ubuntu:2[4-9]|debian:1[3-9]) ;;
    *) fail "Gebraucht wird Ubuntu 24.04 (oder neuer) oder Debian 13. Auf diesem Server läuft: ${PRETTY_NAME}" ;;
esac

say "Pakete installieren"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq python3 ufw curl ca-certificates >/dev/null

say "Auslagerungsspeicher (1 GB), damit 1 GB RAM sicher reicht"
if ! swapon --show --noheadings | grep -q .; then
    fallocate -l 1G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile >/dev/null
    swapon /swapfile
    grep -q '^/swapfile ' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
else
    echo "Schon vorhanden."
fi

say "Benutzer velincoin"
if ! id velincoin >/dev/null 2>&1; then
    useradd --system --home-dir "$DATADIR" --create-home --shell /usr/sbin/nologin velincoin
fi
mkdir -p "$DATADIR"
chown velincoin:velincoin "$DATADIR"
chmod 750 "$DATADIR"

say "Velincoin herunterladen"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
curl -fsSL "$BASE_URL/$PACKAGE" -o "$tmp/$PACKAGE"
echo "$PACKAGE_SHA256  $tmp/$PACKAGE" | sha256sum -c --quiet - || fail "Die Prüfsumme des Downloads stimmt nicht. Bitte später nochmals versuchen."
mkdir -p "$tmp/pkg"
tar -xzf "$tmp/$PACKAGE" -C "$tmp/pkg" --strip-components=1
"$tmp/pkg/bin/velincoind" -version >/dev/null 2>&1 || fail "velincoind startet auf diesem System nicht (zu altes Linux?)."

say "Programme installieren"
for s in $SERVICES; do systemctl stop "$s" 2>/dev/null || true; done
rm -rf "$PREFIX"
mkdir -p "$PREFIX"
cp -r "$tmp/pkg/." "$PREFIX/"
ln -sf "$PREFIX/bin/velincoin-cli" /usr/local/bin/velincoin-cli
install -m 644 "$PREFIX"/systemd/*.service /etc/systemd/system/

say "Dienste starten"
systemctl daemon-reload
for s in $SERVICES; do systemctl enable --now "$s" >/dev/null 2>&1; done

say "Firewall: SSH, Velincoin (9733, 29733) und Explorer (80, 8080) erlauben"
ufw allow OpenSSH >/dev/null
ufw allow 9733/tcp >/dev/null
ufw allow 29733/tcp >/dev/null
ufw allow 80/tcp >/dev/null
ufw allow 8080/tcp >/dev/null
ufw --force enable >/dev/null

ip=$(curl -fsS4 https://api.ipify.org 2>/dev/null || hostname -I | awk '{print $1}')
say "Fertig"
cat <<EOM
Velincoin läuft jetzt auf diesem Server und startet nach einem Neustart von selbst.

  Explorer Testnetz:  http://$ip/
  Explorer Hauptnetz: http://$ip:8080/
  Node Hauptnetz:     $ip:9733
  Node Testnetz:      $ip:29733

Nützliche Befehle:
  systemctl status velincoind-test        Läuft der Testnetz-Node?
  runuser -u velincoin -- velincoin-cli -datadir=$DATADIR -testnet4 getblockcount
  runuser -u velincoin -- velincoin-cli -datadir=$DATADIR getconnectioncount
  journalctl -u velincoin-explorer-test   Meldungen des Explorers

Erneut ausführen aktualisiert die Programme, die Blockchain bleibt erhalten.
EOM
