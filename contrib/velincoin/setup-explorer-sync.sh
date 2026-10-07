#!/usr/bin/env bash
# Lässt explorer_sync.py auf dem Seed-Server rund um die Uhr laufen. Es hält
# den Block Explorer auf der Website aktuell, mit den Daten des Server-Nodes.
#
# Voraussetzung: setup-seed-node.sh ist auf diesem Server gelaufen.
# Als root ausführen:
#
#   bash setup-explorer-sync.sh
#
# Das Skript fragt beim ersten Mal nach einem GitHub-Token (Fine-grained token,
# nur Repository velincoin, Contents: Read and write). Es speichert ihn in
# /etc/velincoin/github-token.txt, lesbar nur für root und den Dienst.
# Danach richtet es den systemd-Dienst velincoin-explorer-sync ein und startet ihn.
#
# Neuen Token eintragen: /etc/velincoin/github-token.txt löschen und das Skript
# nochmals ausführen.

set -euo pipefail

SRC_DIR=/usr/local/src/velincoin
SYNC_PY="$SRC_DIR/contrib/velincoin/explorer/explorer_sync.py"
CONF_DIR=/etc/velincoin
TOKEN_FILE="$CONF_DIR/github-token.txt"
DATA_DIR=/var/lib/velincoind
UNIT=/etc/systemd/system/velincoin-explorer-sync.service

if [ "$(id -u)" -ne 0 ]; then
    echo "Bitte als root ausführen." >&2
    exit 1
fi
if [ ! -f "$SYNC_PY" ] || ! id velincoin >/dev/null 2>&1; then
    echo "Zuerst setup-seed-node.sh ausführen." >&2
    exit 1
fi

if [ ! -s "$TOKEN_FILE" ]; then
    echo "GitHub-Token einfügen (er wird beim Tippen nicht angezeigt), dann Enter:"
    read -r -s token
    echo
    token="$(printf '%s' "$token" | tr -d '[:space:]')"
    if [ -z "$token" ]; then
        echo "Kein Token eingegeben." >&2
        exit 1
    fi
    install -m 0640 -o root -g velincoin /dev/null "$TOKEN_FILE"
    printf '%s\n' "$token" > "$TOKEN_FILE"
    unset token
    echo "Token gespeichert in $TOKEN_FILE"
fi

cat > "$UNIT" <<EOF
[Unit]
Description=Velincoin Explorer-Sync (Block Explorer auf der Website aktuell halten)
After=velincoind.service network-online.target
Wants=velincoind.service network-online.target

[Service]
User=velincoin
Group=velincoin
Environment=PYTHONUNBUFFERED=1
ExecStart=/usr/bin/python3 $SYNC_PY --chain testnet4 --datadir $DATA_DIR \\
    --db $DATA_DIR/explorer-testnet4.sqlite --token-file $TOKEN_FILE
Restart=on-failure
RestartSec=60

PrivateTmp=true
ProtectSystem=full
ProtectHome=true
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable velincoin-explorer-sync
systemctl restart velincoin-explorer-sync

echo
echo "Fertig. Der Explorer-Sync läuft und startet nach einem Neustart von selbst."
echo "Meldungen ansehen (beenden mit Ctrl+C):"
echo "  journalctl -u velincoin-explorer-sync -f"
