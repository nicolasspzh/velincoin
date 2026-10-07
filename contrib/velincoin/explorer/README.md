Velincoin Block Explorer
========================

Ein Block Explorer ist eine Webseite, auf der jeder die Blockchain ansehen kann:
Blöcke, Transaktionen und den Kontostand jeder Adresse. Für einen neuen Coin ist
das wichtig, weil damit jeder selbst nachprüfen kann, was im Netz passiert.

Der Explorer liest die Daten von einem laufenden Velincoin-Core-Node, speichert
einen eigenen Index in einer SQLite-Datei und zeigt alles im Browser an. Er
braucht nur Python 3, keine Zusatzpakete. Getestet habe ich ihn mit Python 3.11
unter Linux.

| Datei | Inhalt |
|---|---|
| `explorer.py` | Das Programm: Index, Webseiten und JSON-API |
| `static/` | Aussehen (CSS), Charts (JavaScript) und Logo |
| `test_explorer.py` | Automatischer Test mit einem privaten Regtest-Node |


Was der Explorer zeigt
----------------------

- **Übersicht:** Blockhöhe, erzeugte Coins, Belohnung pro Block, nächste
  Halbierung, Schwierigkeit, geschätzte Hashrate, neueste Blöcke und
  unbestätigte Transaktionen.
- **Block:** alle Angaben zum Block und seine Transaktionen.
- **Transaktion:** Eingänge und Ausgänge mit Adressen und Beträgen, Gebühr, ob
  eine Ausgabe schon ausgegeben wurde. Auch unbestätigte Transaktionen.
- **Adresse:** Kontostand, erhaltene und gesendete Coins, Verlauf.
- **Statistik:** Charts zu erzeugten Coins, Schwierigkeit, Blöcken pro Tag und
  Transaktionen pro Tag. Jeder Chart lässt sich auch als Tabelle anzeigen.
- **Suche:** nach Blockhöhe, Block-Hash, Transaktions-ID oder Adresse.

Einen **Preis-Chart** gibt es nicht. Einen Preis gibt es erst, wenn VLC
irgendwo gehandelt wird.


Voraussetzungen
---------------

1. **Velincoin Core läuft** im gewünschten Netz, mit allen Blöcken (kein
   Pruning, das ist die Standardeinstellung).
2. **Der RPC-Server ist eingeschaltet.** Über ihn fragt der Explorer den Node ab.
   - `velincoind` hat ihn immer eingeschaltet.
   - In der grafischen Wallet: *Settings > Options > Main >* Häkchen bei
     *Enable RPC server*, danach das Programm neu starten. Oder in
     `velincoin.conf` die Zeile `server=1` eintragen.
3. **Python 3** ist installiert. Unter Windows von https://www.python.org/,
   beim Installieren *Add python.exe to PATH* ankreuzen.

Der Explorer meldet sich beim Node mit der Cookie-Datei an, die der Node selbst
anlegt. Er sucht sie im Standard-Datenordner, also unter Windows in
`%LOCALAPPDATA%\Velincoin`, unter Linux in `~/.velincoin`. Passwörter muss man
deshalb normalerweise nicht eintragen.


Starten
-------

Testnetz (Standard):

```
python3 explorer.py
```

Unter Windows heisst der Befehl meistens `py explorer.py`. Danach im Browser
http://127.0.0.1:8080/ öffnen. Beim ersten Start liest der Explorer alle
Blöcke ein. Das dauert je nach Länge der Kette einen Moment. Die Seite zeigt den
Fortschritt an.

Andere Netze:

```
python3 explorer.py --chain main
python3 explorer.py --chain regtest
```

Beenden mit Ctrl+C. Beim nächsten Start liest der Explorer nur die neuen Blöcke.

### Wichtige Optionen

| Option | Bedeutung | Standard |
|---|---|---|
| `--chain` | `main`, `testnet4` oder `regtest` | `testnet4` |
| `--datadir` | Datenordner von Velincoin Core, falls nicht der Standard | Standard-Ordner |
| `--rpcport` | RPC-Port des Nodes | 9732, 29732 oder 18443 |
| `--rpcuser`, `--rpcpassword` | Anmeldung mit Benutzer und Passwort statt Cookie-Datei | Cookie |
| `--db` | SQLite-Datei für den Index | `explorer-<netz>.sqlite` in diesem Ordner |
| `--bind`, `--port` | Wo die Webseite erreichbar ist | `127.0.0.1`, `8080` |

`python3 explorer.py --help` zeigt alle Optionen.

### Index neu aufbauen

Explorer beenden und die Datei `explorer-<netz>.sqlite` (und die Dateien mit
`-wal` und `-shm` am Ende) löschen. Beim nächsten Start baut er alles neu auf.


Als Teil der Website veröffentlichen (Vercel)
--------------------------------------------

Vercel und ähnliche Dienste zeigen nur fertige Dateien an. Einen Node können
sie nicht abfragen. Darum kann der Explorer alle Seiten als Dateien speichern,
eine **Momentaufnahme** der Blockchain:

```
py contrib/velincoin/explorer/explorer.py --export website/explorer
```

Das Netz wählt ihr wie immer mit `--chain` (Standard: Testnetz). Die Wallet
muss dabei laufen, mit eingeschaltetem RPC-Server. Danach liegt im Ordner
`website/explorer` für jeden Block, jede Transaktion und jede Adresse eine
eigene Seite, im Design der Website. Die Website verlinkt im Menü auf
`explorer/index.html`. Dann den Ordner `website` wie gewohnt bei Vercel
hochladen.

- Jede Seite zeigt oben, von wann die Daten sind. Neue Blöcke erscheinen erst
  nach einem neuen Export und erneutem Hochladen.
- Die Suche funktioniert auch ohne Server. Sie nutzt die Datei
  `search-index.js` aus dem Export.
- Schrift und Farben kommen aus `website/assets`. Der Export gehört deshalb in
  den Ordner `website/explorer`.
- Für sehr lange Ketten ist das nicht gedacht, weil jede Seite eine eigene Datei
  wird.

Ist Vercel mit dem GitHub-Repository verbunden, veröffentlicht Vercel bei jedem
Push auf den eingestellten Branch automatisch neu. Dann gehört der Export in
ein Commit: Export ausführen, den Ordner `website/explorer` committen und
pushen. In den Projekteinstellungen von Vercel muss dafür als Root Directory
`website` eingestellt sein.


Automatisch aktualisieren (explorer_sync.py)
--------------------------------------------

`explorer_sync.py` erledigt Export und Hochladen von selbst. Es läuft neben der
Wallet, schaut alle 5 Minuten nach neuen Blöcken und Zahlungen und lädt nur die
geänderten Dateien mit der GitHub-API in den Ordner `website/explorer` auf dem
Branch `main`. Vercel veröffentlicht danach automatisch. Git muss dafür nicht
installiert sein.

Einmalig einrichten:

1. Auf GitHub einen Token erstellen: **Settings > Developer settings > Personal
   access tokens > Fine-grained tokens > Generate new token**. Bei
   *Repository access* nur das Repository `velincoin` auswählen, bei
   *Repository permissions* **Contents** auf **Read and write** stellen.
2. Den Token in eine Datei `github-token.txt` neben `explorer_sync.py` speichern.
   Diese Datei nie weitergeben und nie committen. Sie steht in `.gitignore`.

Starten, während die Wallet mit RPC-Server läuft:

```
py explorer_sync.py
```

Beenden mit Ctrl+C. `py explorer_sync.py --once` aktualisiert nur einmal.

- Die Website kann nur eine Blockchain zeigen. Zeigt sie bereits eine andere
  Kette, zum Beispiel die eines anderen, nicht verbundenen Computers, bricht
  das Programm ab. Mit `--replace` ersetzt es sie trotzdem.
- Ein neuer Block ändert nur wenige Dateien. Die Zahl der Bestätigungen und der
  Stand werden im Browser aus `search-index.js` berechnet.
- Getestet mit `test_explorer_sync.py` gegen eine nachgebaute GitHub-API.


JSON-API
--------

Für andere Programme gibt es dieselben Daten als JSON:

| Adresse | Inhalt |
|---|---|
| `/api/status` | Netz, Höhe des Index und des Nodes, erzeugte Coins |
| `/api/block/<höhe oder hash>` | Block mit Liste der Transaktions-IDs |
| `/api/tx/<txid>` | Transaktion wie vom Node, plus `spent_by` bei ausgegebenen Ausgaben |
| `/api/address/<adresse>` | Kontostand und Verlauf (höchstens 1000 Einträge) |
| `/api/charts` | Die Daten der Charts |

Beträge mit dem Namen `..._sats`, `balance`, `received` und `sent` sind in
Satoshi, also in Hundertmillionstel VLC. Beispiel: `150000000` sind 1.5 VLC.


Öffentlich betreiben
--------------------

Standardmässig ist die Webseite nur auf dem eigenen Computer erreichbar
(`127.0.0.1`). Für eine öffentliche Seite, zum Beispiel `explorer.velincoin.com`:

1. Velincoin Core und den Explorer auf einem Server laufen lassen, der immer an
   ist.
2. Den Explorer weiter auf `127.0.0.1` lassen und einen Webserver wie Caddy oder
   nginx davor setzen. Der kümmert sich um HTTPS.
3. Den RPC-Port des Nodes **nie** im Internet öffnen. Über ihn könnte man die
   Wallet steuern.
4. Auf dem Explorer-Server **keine Wallet mit Guthaben** betreiben.

Der Explorer ist für kleine und mittlere Ketten gebaut. Bei sehr vielen Besuchern
oder einer sehr langen Kette wäre eine grössere Lösung nötig.


Test
----

```
python3 test_explorer.py --bindir <ordner-mit-velincoind>
```

Der Test startet einen privaten Regtest-Node in einem temporären Ordner, erzeugt
Blöcke und Transaktionen und prüft dann:

- Alle Block-Hashes im Index stimmen mit dem Node überein.
- Die Summe der erzeugten Coins stimmt mit der Summe aller offenen Ausgaben des
  Nodes überein (`gettxoutsetinfo`).
- Der Kontostand jeder Adresse stimmt mit `scantxoutset` des Nodes überein.
- Nach einem Reorg (Blöcke werden durch andere ersetzt) stimmt wieder alles.
- Alle Seiten und die API antworten, die Suche funktioniert, eingegebener
  HTML-Code wird nicht ausgeführt.


Grenzen
-------

- Unbestätigte Transaktionen erscheinen auf der Transaktionsseite, aber noch
  nicht im Verlauf einer Adresse.
- Alle Zeiten sind in UTC (Schweizer Winterzeit = UTC + 1 Stunde).
- Die Hashrate ist eine Schätzung des Nodes aus den letzten 120 Blöcken.
