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
| Testnetz | `-testnet4` | Ein echtes Netz mit mehreren Computern, aber ohne Wert. Minen dauert echt lange. |
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

Es gibt noch keine Seed-Server. Ein Node findet den anderen nur, wenn ihr die
Adresse angebt. Auf dem zweiten Computer:

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
build/bin/velincoin-cli -testnet4 -rpcclienttimeout=0 generatetoaddress 1 <adresse> 100000000000
```

Die grosse Zahl am Ende ist die maximale Anzahl Versuche. Ohne sie gibt der
Befehl schon nach einer Million Versuchen auf, und das reicht fast nie.
`-rpcclienttimeout=0` braucht es, weil `velincoin-cli` sonst nach 15 Minuten
aufgibt.

Kommt `[]` zurück, wurde kein Block gefunden. Das passiert, wenn alle Nonces
eines Blocks durchprobiert sind oder die Versuche aufgebraucht sind. Dann den
Befehl einfach nochmals starten.

**Wie lange dauert das?** Ein Block braucht im Durchschnitt etwa 4,3 Milliarden
Versuche. Ein Prozessorkern schaffte bei einer Messung rund 3,4 Millionen
Versuche pro Sekunde (auf einem Server, der gleichzeitig andere Arbeit hatte).
Das ergibt mit einem Kern grob 15 bis 25 Minuten pro Block. Velincoin verteilt
die Suche auf alle Prozessorkerne. Bei einer Messung auf einem Server mit 4
Kernen waren es rund 11 Millionen Versuche pro Sekunde statt 3,5 Millionen mit
einem Kern, also gut 3-mal schneller. Es bleibt Glückssache: Manchmal geht es
viel schneller, manchmal viel länger.

Die Zahl der Kerne lässt sich mit `-minerthreads=<n>` festlegen, zum Beispiel
`-minerthreads=4`. Der Standard `0` nutzt alle Kerne. Weniger Kerne sind
sinnvoll, wenn der Computer nebenbei noch gut bedienbar sein soll.

Wichtig: Gemined Coins sind erst nach 100 weiteren Blöcken ausgebbar. Im
Testnetz mit einem einzigen Computer dauert das also mehr als einen Tag. Senden
übt ihr deshalb am besten zuerst im Regtest.

### Grafische Wallet

```
build/bin/velincoin-qt -testnet4
```

Statt `velincoind` könnt ihr auch die grafische Wallet starten. Sie enthält einen
eigenen Node. Beide gleichzeitig mit demselben Datenordner geht nicht.

Unter Windows startet die Verknüpfung "Velincoin Core (testnet)" im Startmenü die
grafische Wallet im Testnetz. Minen geht dort in der Konsole (Menü Fenster →
Konsole), ohne `velincoin-cli` davor:

```
generatetoaddress 1 <adresse> 100000000000
```


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
