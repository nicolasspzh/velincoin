#!/usr/bin/env bash
# Copyright (c) 2026 The Velincoin developers
# Distributed under the MIT software license, see the accompanying
# file COPYING or http://www.opensource.org/licenses/mit-license.php.
#
# Sets up a Velincoin server: a node for the main network and one for the
# test network, and the live block explorer for both. Run it as root on
# Ubuntu 24.04 (or newer) or Debian 13, x86_64:
#
#   curl -fsSL https://velincoin.vercel.app/server/install.sh | bash
#
# Running it again updates the programs and keeps all data. It also replaces
# a server set up with contrib/velincoin/setup-seed-node.sh.
# Guide: doc/velincoin/server-einrichten.md

set -euo pipefail

BASE_URL="${VELINCOIN_BASE_URL:-https://velincoin.vercel.app/server}"
PACKAGE="velincoin-server-linux-x86_64.tar.gz"
PACKAGE_SHA256="@PACKAGE_SHA256@"
PREFIX=/opt/velincoin
DATADIR=/var/lib/velincoin
CONF_DIR=/etc/velincoin
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
    useradd --system --user-group --home-dir "$DATADIR" --create-home --shell /usr/sbin/nologin velincoin
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

say "Dienste anhalten"
for s in $SERVICES velincoin-explorer-sync; do systemctl stop "$s" 2>/dev/null || true; done
# Ein Setup von setup-seed-node.sh (Dienst "velincoind", Daten in /var/lib/velincoind)
# würde dieselben Ports belegen. Es wird durch die Dienste unten ersetzt.
if [ -f /etc/systemd/system/velincoind.service ]; then
    systemctl disable --now velincoind >/dev/null 2>&1 || true
    rm -f /etc/systemd/system/velincoind.service
    echo "Das ältere Setup (Dienst velincoind) ist abgelöst. Seine Daten in /var/lib/velincoind bleiben liegen."
fi
# Den Explorer auf der Website gibt es nicht mehr, der Live-Explorer reicht.
# Ältere Setups luden ihn mit dem Dienst velincoin-explorer-sync und einem
# GitHub-Token alle 20 Minuten hoch. Beides wird entfernt.
if [ -f /etc/systemd/system/velincoin-explorer-sync.service ]; then
    systemctl disable velincoin-explorer-sync >/dev/null 2>&1 || true
    rm -f /etc/systemd/system/velincoin-explorer-sync.service
    echo "Der Explorer auf der Website (Dienst velincoin-explorer-sync) ist abgeschaltet."
fi
if [ -f "$CONF_DIR/github-token.txt" ]; then
    rm -f "$CONF_DIR/github-token.txt"
    echo "Der GitHub-Token in $CONF_DIR/github-token.txt ist gelöscht. Bitte ihn auch auf"
    echo "GitHub widerrufen (Settings > Developer settings > Personal access tokens)."
fi

say "Programme installieren"
rm -rf "$PREFIX"
mkdir -p "$PREFIX"
cp -r "$tmp/pkg/." "$PREFIX/"
ln -sf "$PREFIX/bin/velincoin-cli" /usr/local/bin/velincoin-cli
for unit in "$PREFIX"/systemd/*.service; do
    # Ältere Pakete enthalten noch den Dienst des Website-Explorers
    case "$unit" in */velincoin-explorer-sync.service) continue ;; esac
    install -m 644 "$unit" /etc/systemd/system/
done
systemctl daemon-reload

say "Dienste starten"
log_file="$DATADIR/testnet4/debug.log"
log_start=$(stat -c %s "$log_file" 2>/dev/null || echo 0)
for s in $SERVICES; do systemctl enable --now "$s" >/dev/null 2>&1; done
# Nach einem Neustart des Testnetzes (neuer Genesis-Block oder höhere niedrigste
# Schwierigkeit, siehe README) startet der Node mit den alten Blöcken nicht
# mehr. Sie kommen dann zur Seite, und der Node lädt die neue Kette.
for _ in $(seq 90); do
    [ "$(stat -c %s "$log_file" 2>/dev/null || echo 0)" -lt "$log_start" ] && log_start=0
    new_log=$(tail -c +"$((log_start + 1))" "$log_file" 2>/dev/null || true)
    # Other genesis block, or blocks below today's lowest difficulty (older test network)
    if grep -qE "Incorrect or no genesis block found|LoadBlockIndexGuts: CheckProofOfWork failed" <<<"$new_log"; then
        old_dir="$DATADIR/testnet4-alte-kette-$(date +%Y%m%d-%H%M%S)"
        echo "Das Testnetz wurde neu gestartet. Die Blöcke der alten Kette kommen nach $old_dir."
        systemctl stop velincoind-test
        mkdir -p "$old_dir"
        for d in blocks chainstate indexes; do
            if [ -e "$DATADIR/testnet4/$d" ]; then mv "$DATADIR/testnet4/$d" "$old_dir/"; fi
        done
        chown -R velincoin:velincoin "$old_dir"
        systemctl start velincoind-test
        break
    fi
    if grep -q "init message: Done loading" <<<"$new_log"; then break; fi
    sleep 1
done

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

  Live-Explorer Testnetz:  http://$ip/
  Live-Explorer Hauptnetz: http://$ip:8080/
  Node Hauptnetz:          $ip:9733
  Node Testnetz:           $ip:29733

Nützliche Befehle:
  systemctl status velincoind-test        Läuft der Testnetz-Node?
  runuser -u velincoin -- velincoin-cli -datadir=$DATADIR -testnet4 getblockcount
  runuser -u velincoin -- velincoin-cli -datadir=$DATADIR getconnectioncount

Erneut ausführen aktualisiert die Programme, die Blockchain bleibt erhalten.
EOM
