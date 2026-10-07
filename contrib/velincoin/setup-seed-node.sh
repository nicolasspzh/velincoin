#!/usr/bin/env bash
# Richtet auf einem frischen Debian-Server einen Velincoin-Node für das
# Testnetz ein, der rund um die Uhr läuft (Seed-Node).
#
# Gedacht für Debian 13 (trixie). Als root auf dem Server ausführen:
#
#   bash setup-seed-node.sh
#
# Was das Skript macht:
#   1. Pakete zum Kompilieren installieren
#   2. Velincoin Core von GitHub holen und velincoind + velincoin-cli kompilieren
#      (ohne Wallet, ohne GUI, ohne Tests)
#   3. Systembenutzer "velincoin" anlegen
#   4. /etc/velincoin/velincoin.conf anlegen (Testnetz, RPC nur lokal)
#   5. Den systemd-Dienst aus contrib/init/velincoind.service einrichten und starten
#
# Das Skript darf mehrmals laufen. Ein zweiter Lauf holt den neuesten Code,
# kompiliert neu und startet den Dienst neu. Blockchain und velincoin.conf
# bleiben dabei erhalten.
#
# Einstellbar über Umgebungsvariablen:
#   BRANCH    Git-Branch, der kompiliert wird (Standard: main)
#   REPO_URL  Git-Repository (Standard: https://github.com/nicolasspzh/velincoin.git)

set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/nicolasspzh/velincoin.git}"
BRANCH="${BRANCH:-main}"
SRC_DIR=/usr/local/src/velincoin
CONF_DIR=/etc/velincoin
CONF_FILE="$CONF_DIR/velincoin.conf"
DATA_DIR=/var/lib/velincoind
P2P_PORT=29733

if [ "$(id -u)" -ne 0 ]; then
    echo "Bitte als root ausführen." >&2
    exit 1
fi
# Ein Server mit contrib/velincoin/server/install.sh nutzt dieselben Ports
if [ -f /etc/systemd/system/velincoind-test.service ]; then
    echo "Dieser Server ist mit install.sh eingerichtet (doc/velincoin/server-einrichten.md)." >&2
    echo "Zum Aktualisieren install.sh nochmals ausführen." >&2
    exit 1
fi

echo "==> 1/5 Pakete installieren"
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y --no-install-recommends \
    build-essential cmake pkgconf python3 libevent-dev libboost-dev git ca-certificates

echo "==> 2/5 Code holen und kompilieren (Branch $BRANCH)"
if [ -d "$SRC_DIR/.git" ]; then
    git -C "$SRC_DIR" fetch --depth 1 origin "$BRANCH"
    git -C "$SRC_DIR" reset --hard FETCH_HEAD
else
    git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$SRC_DIR"
fi
echo "Commit: $(git -C "$SRC_DIR" log -1 --format='%h %s')"

# Der Compiler braucht pro Job grob 1.5 GB Arbeitsspeicher (doc/build-unix.md).
mem_mb=$(awk '/^MemTotal:/ { print int($2 / 1024) }' /proc/meminfo)
jobs=$(( mem_mb / 1500 ))
if [ "$jobs" -lt 1 ]; then jobs=1; fi
if [ "$jobs" -gt "$(nproc)" ]; then jobs=$(nproc); fi
echo "Kompiliere mit $jobs Job(s). Das dauert eine Weile."

cmake -S "$SRC_DIR" -B "$SRC_DIR/build" \
    -DBUILD_GUI=OFF -DENABLE_WALLET=OFF -DWITH_ZMQ=OFF -DENABLE_IPC=OFF \
    -DBUILD_TESTS=OFF -DBUILD_BENCH=OFF
# Intern heissen die Ziele wie bei Bitcoin Core, die fertigen Programme velincoin...
cmake --build "$SRC_DIR/build" -j"$jobs" --target bitcoind bitcoin-cli
install -m 0755 "$SRC_DIR/build/bin/velincoind" /usr/bin/velincoind
install -m 0755 "$SRC_DIR/build/bin/velincoin-cli" /usr/bin/velincoin-cli

echo "==> 3/5 Systembenutzer velincoin"
if ! id velincoin >/dev/null 2>&1; then
    useradd --system --user-group --home-dir "$DATA_DIR" --no-create-home \
        --shell /usr/sbin/nologin velincoin
fi

echo "==> 4/5 Konfiguration $CONF_FILE"
install -d -m 0710 -o root -g velincoin "$CONF_DIR"
if [ -e "$CONF_FILE" ]; then
    echo "Bleibt unverändert, existiert schon."
else
    cat > "$CONF_FILE" <<EOF
# Velincoin Seed-Node (Testnetz), angelegt von setup-seed-node.sh
#
# Testnetz statt Hauptnetz
testnet4=1
# Verbindungen von aussen annehmen (Testnetz: TCP-Port $P2P_PORT)
listen=1
# Der RPC-Zugang ist nur von diesem Server aus erreichbar (Standard).
# Nie rpcallowip oder rpcbind für das Internet öffnen.
EOF
    chown root:velincoin "$CONF_FILE"
    chmod 0640 "$CONF_FILE"
fi

echo "==> 5/5 Dienst velincoind einrichten und starten"
install -m 0644 "$SRC_DIR/contrib/init/velincoind.service" /etc/systemd/system/velincoind.service
systemctl daemon-reload
systemctl enable velincoind
# Nach einem Neustart des Testnetzes (neuer Genesis-Block oder höhere niedrigste
# Schwierigkeit, siehe README) startet der Node mit den alten Blöcken nicht
# mehr. Sie werden dann zur Seite gelegt, und der Node lädt die neue Kette.
log_file="$DATA_DIR/testnet4/debug.log"
log_start=$(stat -c %s "$log_file" 2>/dev/null || echo 0)
systemctl restart velincoind
for _ in $(seq 90); do
    [ "$(stat -c %s "$log_file" 2>/dev/null || echo 0)" -lt "$log_start" ] && log_start=0
    new_log=$(tail -c +"$((log_start + 1))" "$log_file" 2>/dev/null || true)
    # Other genesis block, or blocks below today's lowest difficulty (older test network)
    if grep -qE "Incorrect or no genesis block found|LoadBlockIndexGuts: CheckProofOfWork failed" <<<"$new_log"; then
        old_dir="$DATA_DIR/testnet4-alte-kette-$(date +%Y%m%d-%H%M%S)"
        echo "Das Testnetz wurde neu gestartet. Die Blöcke der alten Kette kommen nach $old_dir."
        systemctl stop velincoind
        mkdir -p "$old_dir"
        for d in blocks chainstate indexes; do
            if [ -e "$DATA_DIR/testnet4/$d" ]; then mv "$DATA_DIR/testnet4/$d" "$old_dir/"; fi
        done
        chown -R velincoin:velincoin "$old_dir"
        systemctl start velincoind
        break
    fi
    if grep -q "init message: Done loading" <<<"$new_log"; then break; fi
    sleep 1
done
# Der Explorer-Sync (setup-explorer-sync.sh) soll mit dem neuen Code laufen
if systemctl is-enabled --quiet velincoin-explorer-sync 2>/dev/null; then
    systemctl restart velincoin-explorer-sync
fi

# Nur falls die Firewall ufw aktiv ist: Port öffnen. Ohne Firewall ist er offen.
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
    ufw allow "$P2P_PORT/tcp"
fi

echo
echo "Warte, bis der Node bereit ist ..."
cli=(velincoin-cli -datadir="$DATA_DIR" -testnet4)
# velincoin-cli -rpcwait wartet nicht auf die Cookie-Datei, deshalb zuerst darauf warten.
for _ in $(seq 120); do
    [ -e "$DATA_DIR/testnet4/.cookie" ] && break
    sleep 1
done
"${cli[@]}" -rpcwait -rpcwaittimeout=120 getblockchaininfo

echo
echo "Fertig. Der Node läuft und startet nach einem Neustart des Servers von selbst."
echo "Nützliche Befehle:"
echo "  systemctl status velincoind                      Läuft der Dienst?"
echo "  ${cli[*]} getblockchaininfo   Blockhöhe"
echo "  ${cli[*]} getconnectioncount  Anzahl Verbindungen"
echo "  journalctl -u velincoind -f                      Meldungen des Dienstes"
