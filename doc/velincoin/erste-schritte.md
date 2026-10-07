Erste Schritte mit Velincoin
============================

Diese Anleitung zeigt, wie ihr Velincoin selbst ausprobiert: Node starten, Wallet
anlegen, Coins minen und senden. Alle Befehle sind für Linux. Sie gehen davon
aus, dass ihr im Ordner des Repositorys seid und Velincoin nach dem README
kompiliert habt. Die Programme liegen dann in `build/bin/`.

Kurz die wichtigsten Begriffe:

- **Node:** das Programm `velincoind`. Es lädt die Blockchain, prüft alle Blöcke
  und redet mit anderen Nodes.
- **CLI:** das Programm `velincoin-cli`. Damit schickt ihr Befehle an euren
  laufenden Node.
- **Wallet:** eure Schlüssel und Adressen. Sie liegt im Datenordner des Nodes.

Es gibt drei Netze. Für den Anfang empfehle ich Regtest.

| Netz | Start mit | Wofür |
|---|---|---|
| Regtest | `-regtest` | Üben auf dem eigenen Computer. Blöcke entstehen sofort, nur ihr seid im Netz. |
| Testnetz | `-testnet4` | Ein echtes Netz mit mehreren Computern, aber ohne Wert. Ein Block dauert etwa 1 bis 2 Minuten (siehe unten). |
| Hauptnetz | (nichts) | Das echte Velincoin-Netz. Noch nicht öffentlich gestartet. |


1. Üben mit Regtest
-------------------

### Node starten

```
build/bin/velincoind -regtest -daemon
```

`-daemon` startet den Node im Hintergrund. Prüfen, ob er läuft:

```
build/bin/velincoin-cli -regtest getblockchaininfo
```

Dort steht unter anderem `"chain": "regtest"` und `"blocks": 0`.

### Wallet anlegen und Adresse holen

```
build/bin/velincoin-cli -regtest createwallet "anna"
build/bin/velincoin-cli -regtest getnewaddress
```

Der zweite Befehl gibt eine neue Adresse aus, zum Beispiel `bcrt1q...`.
(Im Regtest beginnen Adressen noch wie bei Bitcoin mit `bcrt1`.)

### Minen

```
build/bin/velincoin-cli -regtest generatetoaddress 101 <eure-adresse>
build/bin/velincoin-cli -regtest getbalance
```

Warum 101 Blöcke? Die Belohnung eines Blocks (50 VLC) ist erst nach 100 weiteren
Blöcken ausgebbar. Nach 101 Blöcken ist also genau die erste Belohnung frei, und
`getbalance` zeigt `50.00000000`.

### Senden

Zweite Wallet anlegen und etwas schicken:

```
build/bin/velincoin-cli -regtest createwallet "ben"
build/bin/velincoin-cli -regtest -rpcwallet=ben getnewaddress
build/bin/velincoin-cli -regtest -rpcwallet=anna -named sendtoaddress address=<bens-adresse> amount=12.5 fee_rate=1
build/bin/velincoin-cli -regtest generatetoaddress 1 <annas-adresse>
build/bin/velincoin-cli -regtest -rpcwallet=ben getbalance
```

Sind mehrere Wallets geladen, muss man mit `-rpcwallet=` sagen, welche gemeint
ist. Der Block nach dem Senden bestätigt die Zahlung. Danach hat Ben `12.50000000`.

### Node stoppen

```
build/bin/velincoin-cli -regtest stop
```


2. Das Velincoin-Testnetz
-------------------------

Im Testnetz könnt ihr mit mehreren Computern ein echtes kleines Netz bilden.

### Node starten und verbinden

```
build/bin/velincoind -testnet4 -daemon
```

Im Testnetz verbindet sich ein Node nach etwa einer Minute von selbst mit dem
Seed-Server `159.195.4.228:29733`. Über ihn findet ihr euch gegenseitig. Direkt
verbinden könnt ihr euch zusätzlich so, auf dem zweiten Computer:

```
build/bin/velincoin-cli -testnet4 addnode "<IP-des-ersten-Computers>:29733" "add"
build/bin/velincoin-cli -testnet4 getconnectioncount
```

Damit Verbindungen von aussen ankommen, muss der Port **29733** (TCP) in der
Firewall und gegebenenfalls im Router offen sein. Im selben Heimnetz reicht die
lokale IP-Adresse, zum Beispiel `192.168.1.20`.

### Minen im Testnetz

```
build/bin/velincoin-cli -testnet4 createwallet "test"
build/bin/velincoin-cli -testnet4 getnewaddress
build/bin/velincoin-cli -testnet4 generatetoaddress 1 <adresse> 2000000000
```

Die grosse Zahl am Ende ist die maximale Anzahl Versuche. Ohne sie gibt der
Befehl schon nach einer Million Versuchen auf, und das reicht fast nie.

**Wie lange dauert das?** Das Testnetz ist auf einen Block alle 90 Sekunden
eingestellt. Am Anfang braucht ein Block im Durchschnitt etwa 270 Millionen
Versuche. Der eingebaute Miner nutzt nur einen Prozessorkern und braucht dafür
etwa **1 bis 2 Minuten**. Es ist Glückssache: Manchmal geht es schneller,
manchmal länger. Auf eurem Computer kann es schneller oder langsamer sein.

Die Start-Schwierigkeit ist auch die niedrigste. Schneller als etwa eine Minute
pro Block wird es mit einem Prozessorkern also nicht. Ist die Schwierigkeit
gestiegen, weil viele minen, und hat 3 Minuten lang niemand einen Block
gefunden, darf der nächste Block wieder mit der niedrigsten Schwierigkeit
gemined werden.

Wichtig: Geminte Coins sind erst nach 100 weiteren Blöcken ausgebbar. Mined also
zum Beispiel 110 Blöcke, dann sind die ersten 10 Belohnungen (500 VLC) frei. Mit
einem Prozessorkern dauert das etwa zwei bis drei Stunden.

Die Schwierigkeit passt sich alle 2016 Blöcke automatisch an: Kommen die Blöcke
schneller als alle 90 Sekunden, wird es schwieriger, kommen sie langsamer,
wird es leichter.

### Grafische Wallet

```
build/bin/velincoin-qt -testnet4
```

Statt `velincoind` könnt ihr auch die grafische Wallet starten. Sie enthält einen
eigenen Node. Beide gleichzeitig mit demselben Datenordner geht nicht.

### Testnetz-Adresse in der Windows-Wallet

Jedes Netz hat eigene Wallets und eigene Adressen. Eine Adresse mit `vlc1` gehört
zum Hauptnetz, eine mit `tvlc1` zum Testnetz.

1. Im Startmenü **Velincoin Core (testnet)** öffnen, nicht "Velincoin Core". Im
   Fenstertitel steht dann `[testnet4]`.
2. Beim ersten Start gibt es im Testnetz noch keine Wallet: **File > Create
   Wallet** wählen und einen Namen eingeben.
3. **Receive > Create new receiving address**. Die Adresse beginnt mit `tvlc1`.

### Transaktionen im eigenen Block Explorer öffnen

Läuft der Block Explorer auf eurem Computer (siehe
[contrib/velincoin/explorer/README.md](../../contrib/velincoin/explorer/README.md)),
kann die Wallet jede Transaktion direkt darin öffnen:

1. **Settings > Options** (Deutsch: **Einstellungen > Optionen**), Reiter
   **Display** (**Anzeige**).
2. Bei **Third-party transaction URLs** (**Transaktions-URLs von Drittparteien**) eintragen:

   ```
   http://127.0.0.1:8080/tx/%s
   ```

   `%s` ersetzt die Wallet durch die Transaktions-ID. `8080` ist der Port, auf
   dem der Explorer läuft (Standard, änderbar mit `--port`).
3. Mit **OK** bestätigen und die Wallet neu starten.

Danach hat in der Liste der Transaktionen das Kontextmenü (Rechtsklick) einen
Eintrag mit dieser Adresse. In der Wallet ist bewusst kein Explorer
voreingestellt, weil es noch keinen öffentlichen Live-Explorer gibt.


3. Wo liegen die Daten?
-----------------------

| Was | Ort (Linux) |
|---|---|
| Datenordner Hauptnetz | `~/.velincoin/` |
| Datenordner Testnetz | `~/.velincoin/testnet4/` |
| Datenordner Regtest | `~/.velincoin/regtest/` |
| Einstellungen | `~/.velincoin/velincoin.conf` |
| Einstellungen der grafischen Wallet | `~/.config/Velincoin/` |

Die Wallets liegen im jeweiligen Datenordner unter `wallets/`. **Wer die Wallet-
Dateien hat, hat die Coins.** Macht Sicherungen mit
`velincoin-cli backupwallet <ziel-datei>` und gebt die Dateien niemandem.

Einen Ordner neu beginnen: Node stoppen und den entsprechenden Unterordner
löschen, zum Beispiel `~/.velincoin/regtest/`. Achtung: Damit sind auch die
Wallets darin weg.


4. Hilfe
--------

```
build/bin/velincoind -help
build/bin/velincoin-cli -regtest help
build/bin/velincoin-cli -regtest help sendtoaddress
```

`help` ohne Befehl listet alle Befehle, `help <befehl>` erklärt einen Befehl mit
Beispielen.
