Velincoin Core
==============

Velincoin (Kürzel **VLC**) ist eine eigene Kryptowährung mit eigener Blockchain.
Der Code ist ein Fork von [Bitcoin Core](https://github.com/bitcoin/bitcoin) v31.1.
Website: https://velincoin.com

Status: **in Entwicklung, noch nicht öffentlich gestartet.** Es gibt noch keine
Server (Seed-Nodes), keine Börse und keinen Block Explorer.

Was ist gleich wie bei Bitcoin?
-------------------------------

Die Geldregeln sind identisch mit Bitcoin:

| Regel | Wert |
|---|---|
| Maximale Menge | 21 Millionen VLC |
| Blockzeit | 1 Block alle 10 Minuten (im Durchschnitt) |
| Belohnung pro Block | 50 VLC am Anfang |
| Halbierung der Belohnung | alle 210 000 Blöcke (etwa alle 4 Jahre) |
| Kleinste Einheit | 0.00000001 VLC (1 "sat") |
| Mining-Algorithmus | SHA-256 (Proof of Work) |
| Anpassung der Schwierigkeit | alle 2016 Blöcke (etwa alle 2 Wochen) |

Was ist anders als bei Bitcoin?
-------------------------------

Velincoin ist ein **komplett eigenes Netzwerk**. Velincoin-Nodes und Bitcoin-Nodes
erkennen sich gegenseitig nicht und tauschen keine Daten aus.

| Einstellung | Bitcoin | Velincoin |
|---|---|---|
| Name im Programm | Bitcoin Core | Velincoin Core |
| Währungseinheit | BTC | VLC |
| Netzwerk-Kennung (Message Start) | `f9 be b4 d9` | `e4 d2 a7 c9` |
| P2P-Port (Verbindung zwischen Nodes) | 8333 | 9733 |
| RPC-Port (Steuerung des Programms) | 8332 | 9732 |
| Klassische Adressen beginnen mit | `1` | `V` |
| Script-Adressen beginnen mit | `3` | `S` |
| SegWit-Adressen beginnen mit | `bc1` | `vlc1` |
| Datenordner (Linux) | `~/.bitcoin` | `~/.velincoin` |
| Konfigurationsdatei | `bitcoin.conf` | `velincoin.conf` |
| Programme | `bitcoind`, `bitcoin-cli`, `bitcoin-wallet`, `bitcoin-tx`, `bitcoin-util`, `bitcoin-qt`, `bitcoin` | `velincoind`, `velincoin-cli`, `velincoin-wallet`, `velincoin-tx`, `velincoin-util`, `velincoin-qt`, `velincoin` |
| Genesis-Block | 3. Januar 2009 | eigener Block, siehe unten |
| Soft Forks (SegWit, Taproot usw.) | nach und nach aktiviert | ab Block 1 aktiv |

### Genesis-Block

Der Genesis-Block ist der allererste Block der Kette. Er ist fest im Code eingebaut.

| Feld | Wert |
|---|---|
| Nachricht | `velincoin.com 05/Oct/2026 Velincoin Genesis` |
| Zeit (Unix) | `1791190318` |
| Nonce | `3153039446` |
| Schwierigkeit (bits) | `0x1d00ffff` (wie Bitcoin) |
| Hash | `000000002e63a20ccb2371805261134fdc98a6a22dad956e5599fca4469f05e7` |
| Merkle Root | `b9b0a6d3e91faa65f910bb26080bd644add054293a045c66c2d63ac5fd82f571` |

Der Block wurde mit `contrib/velincoin/genesis.py` erzeugt. Das Skript prüft sich
selbst, indem es die bekannten Bitcoin-Genesis-Blöcke nachbaut (`--selftest`).

Was noch nicht angepasst ist
----------------------------

- **Texte in der grafischen Wallet (GUI):** sprechen noch von "Bitcoin". Die Texte
  von Node, Kommandozeile und RPC-Befehlen sind angepasst. Bewusst unverändert
  bleiben Links zu den Bitcoin-Standards (BIPs), Titel von Forschungsarbeiten,
  der Copyright-Hinweis von Bitcoin Core und interne Protokoll-Konstanten.
- **Skripte und Anleitungen** in `contrib/`, `share/` und `doc/` (zum Beispiel
  systemd-Dienste, Shell-Vervollständigung, Man-Pages) nennen noch `bitcoind` usw.
- **Signierte Nachrichten:** Nutzen noch den Bitcoin-Text "Bitcoin Signed Message".
- **Testnetze:** `-testnet`, `-testnet4` und `-signet` sind noch die Bitcoin-Testnetze.
  Nur das Hauptnetz und `-regtest` (lokales Testnetz) sind für Velincoin gedacht.
  Im Regtest beginnen Adressen noch wie bei Bitcoin mit `bcrt1`.
- **Seed-Nodes:** Es sind keine eingetragen. Nodes müssen sich im Moment manuell
  verbinden, zum Beispiel mit `-addnode=<ip>:9733`.
- **Mindest-Arbeit der Kette (`nMinimumChainWork`):** steht auf 0. Das ist für eine
  neue Kette nötig. Sobald das Netz läuft, muss der Wert regelmässig erhöht werden.
  Er schützt neue Nodes davor, einer gefälschten Kette mit wenig Arbeit zu folgen.
- **Grafische Wallet (GUI):** noch nicht angepasst und nicht getestet.

Tests
-----

Die Unit-Tests von Bitcoin Core prüfen an vielen Stellen feste Bitcoin-Werte.
Diese Tests wurden für Velincoin angepasst:

- Adressen und private Schlüssel wurden mit `contrib/velincoin/convert_test_vectors.py`
  ins Velincoin-Format umgerechnet (gleicher Inhalt, neues Präfix und neue Prüfsumme).
- Die BIP324-Testdaten (verschlüsselte Verbindung zwischen Nodes) wurden mit
  `contrib/velincoin/gen_bip324_vectors.py` für die Velincoin-Netzwerk-Kennung neu
  berechnet.

Bekannte Testfehler:

- `mining_mainnet.py` (Funktionstest) schlägt fehl. Der Test baut 2016 echt geminte
  Blöcke auf dem Genesis-Block auf. Die mitgelieferten Daten gehören zum Bitcoin-
  Genesis-Block. Für Velincoin müssen sie neu gemined werden, das sind auf einem
  normalen Rechner grob 80 Stunden. Wird später nachgeholt.
- `feature_bind_extra.py` und `rpc_bind.py --ipv4`/`--nonloopback` brauchen IPv6.
  In einer Umgebung ohne IPv6 schlagen sie fehl, das hat nichts mit Velincoin zu tun.

Automatische Tests auf GitHub (GitHub Actions) sind vorerst abgeschaltet. Die
Konfiguration in `.github/workflows/ci.yml` stammt von Bitcoin Core und ist noch
nicht an Velincoin angepasst. Sie lässt sich im Reiter "Actions" von Hand starten.

Tests laufen lassen:

```
ctest --test-dir build -j4
```

Sicherheitshinweis
------------------

Velincoin nutzt SHA-256 wie Bitcoin. Für SHA-256 gibt es spezielle Mining-Maschinen
(ASICs) mit sehr hoher Rechenleistung. Solange das Velincoin-Netz klein ist, könnte
jemand mit gemieteter Rechenleistung die Kette übernehmen (51%-Angriff). Vor einem
öffentlichen Start muss dieses Risiko neu beurteilt werden.

Kompilieren (Linux)
-------------------

```
sudo apt-get install build-essential cmake pkgconf python3 libevent-dev libboost-dev libsqlite3-dev
cmake -B build -DBUILD_GUI=OFF -DWITH_ZMQ=OFF -DENABLE_IPC=OFF
cmake --build build -j4
```

Die Programme liegen danach in `build/bin/`, zum Beispiel `build/bin/velincoind`.

Intern (im Build-System) heissen die Ziele weiterhin wie bei Bitcoin Core, zum
Beispiel `bitcoind`. Nur die fertigen Dateien heissen `velincoind` usw. Das hält
den Unterschied zu Bitcoin Core klein, damit spätere Bitcoin-Updates leichter
übernommen werden können. Die Entwickler-Programme `test_bitcoin` und
`bench_bitcoin` behalten ihren Namen.

Weitere Anleitungen zum Kompilieren stehen in [doc/](doc/). Sie stammen von
Bitcoin Core und gelten auch für Velincoin.

Lizenz
------

Velincoin Core steht wie Bitcoin Core unter der MIT-Lizenz. Siehe [COPYING](COPYING).
Der Copyright-Hinweis der Bitcoin Core Entwickler bleibt erhalten.
