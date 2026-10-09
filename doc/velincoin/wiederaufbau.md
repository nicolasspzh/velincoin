Velincoin: Archiv und Wiederaufbau
==================================

Das Projekt ist am 9. Oktober 2026 beendet worden. Velincoin wird vom Server
`159.195.4.228` entfernt, die Website auf Vercel wird abgeschaltet. Dieses
Repository bleibt auf GitHub und enthält alles, um Velincoin wieder aufzubauen:
den Code, den fertigen Windows-Installer, das fertige Server-Paket, den Block
Explorer und die Anleitungen.

Diese Seite ist der Einstieg. Sie sagt, was wo liegt, was beim Abschalten
verloren geht und in welcher Reihenfolge man alles wieder aufbaut.


Was im Repository liegt
-----------------------

| Was | Wo | Anleitung |
|---|---|---|
| Code von Velincoin Core (Node, CLI, grafische Wallet) | `src/` | [README](../../README.md), Abschnitt «Kompilieren» |
| Fertiger Windows-Installer der Wallet | `website/download/velincoin-win64-setup.exe` | Teil 1 unten |
| Fertiges Server-Paket (Linux, x86_64) | `website/server/velincoin-server-linux-x86_64.tar.gz` | Teil 2 unten |
| Installationsskript für den Server | `website/server/install.sh` (Vorlage: `contrib/velincoin/server/install.sh`) | [server-einrichten.md](server-einrichten.md) |
| systemd-Dienste des Servers | `contrib/velincoin/server/systemd/` | Teil 2 unten |
| Block Explorer | `contrib/velincoin/explorer/` | [Explorer-README](../../contrib/velincoin/explorer/README.md) |
| Website | `website/`, dazu `vercel.json` | Teil 5 unten |
| Feste Seeds (Server-Adressen im Programm) | `contrib/seeds/`, daraus `src/chainparamsseeds.h` | [seed-server.md](seed-server.md) |
| Wallet über die Kommandozeile, Regtest | | [erste-schritte.md](erste-schritte.md) |
| Älteres Server-Setup (kompiliert auf dem Server) | `contrib/velincoin/setup-seed-node.sh` | [seed-server.md](seed-server.md) |

Prüfsummen (SHA-256) der fertigen Dateien beim Projektende:

| Datei | SHA-256 |
|---|---|
| `velincoin-win64-setup.exe` | `96b5d7ea160d2a6ba2f7cb4d2a4792d75e52dfad36de763508cfe4ed27103b35` |
| `velincoin-server-linux-x86_64.tar.gz` | `5f075a695e2a55b1a71be929a97cd5542c8758288d8c27068f2e99c15e242502` |

Die Prüfsumme des Server-Pakets steht auch in `website/server/install.sh`. Das
Skript bricht ab, wenn der Download nicht dazu passt.


Was beim Abschalten verloren geht
---------------------------------

- **Die Blockchain auf dem Server.** Haupt- und Testnetz lagen in
  `/var/lib/velincoin`. Nach dem Löschen gibt es sie nur noch dort, wo noch
  eine Wallet die Blöcke gespeichert hat. Ein neuer Server beginnt sonst
  wieder beim Genesis-Block. Die Genesis-Blöcke sind fest im Code, die Regeln
  bleiben also dieselben.
- **Test-VLC.** Sie hatten nie einen Wert. Wer seine Wallet-Datei behält, hat
  seine Adressen und Schlüssel noch. Coins hat er aber nur, wenn die alte Kette
  mit seinen Blöcken weiterlebt.
- **Der Live-Explorer** unter `http://159.195.4.228/` und `:8080`. Seine
  Datenbank wird aus der Blockchain neu aufgebaut, es geht nichts Eigenes
  verloren.
- **Die Website** auf Vercel. Sie liegt vollständig im Ordner `website/`.

Wallets auf den Windows-Computern bleiben erhalten, auch wenn man Velincoin
Core deinstalliert. Sie liegen in `%LOCALAPPDATA%\Velincoin` (Hauptnetz) und
`%LOCALAPPDATA%\Velincoin\testnet4` (Testnetz), jeweils im Unterordner
`wallets`. Der Server selbst hatte keine Wallet: Das Server-Paket ist ohne
Wallet gebaut (`-DENABLE_WALLET=OFF`, siehe `contrib/velincoin/server/package.sh`).


Teil 1: Die Wallet (Windows)
----------------------------

Den Installer gibt es fertig im Repository. Neu kompilieren muss man nur, wenn
sich die Server-Adresse ändert (siehe Teil 3).

1. Auf GitHub die Datei `website/download/velincoin-win64-setup.exe` öffnen und
   mit dem Download-Knopf herunterladen (etwa 28 MB).
2. Prüfsumme vergleichen. In PowerShell im Download-Ordner:

   ```
   Get-FileHash .\velincoin-win64-setup.exe -Algorithm SHA256
   ```

   Das Ergebnis muss mit der Tabelle oben übereinstimmen.
3. Installer starten. Windows SmartScreen warnt, weil der Installer nicht
   signiert ist: *Weitere Informationen*, dann *Trotzdem ausführen*.
4. Im Startmenü **Velincoin Core (testnet)** starten und eine Wallet erstellen.
5. Minen: links auf **Mining**, dann **Mining starten**. Ein Block dauert im
   Testnetz mit einem Prozessorkern etwa 1 bis 2 Minuten und bringt 50 Test-VLC.
   Geminte Coins sind erst nach 100 weiteren Blöcken ausgebbar.
6. Wallet sichern: Die Übersicht erinnert daran, bis man **Jetzt sichern**
   klickt.

**Ohne Server:** Die Wallet versucht beim Start, sich mit `159.195.4.228` zu
verbinden. Läuft dort kein Velincoin mehr, findet sie niemanden. Dann verbindet
man die Computer von Hand: *Fenster → Node hinzufügen* und die IP-Adresse eines
anderen Computers mit laufender Wallet eintragen. Der Standardport ist
vorausgefüllt (Hauptnetz 9733, Testnetz 29733). Der andere Computer muss dafür
aus dem Internet erreichbar sein (Port im Router freigeben). Einfacher ist ein
neuer Server (Teil 2).

Wallet unter Linux und über die Kommandozeile:
[erste-schritte.md](erste-schritte.md).


Teil 2: Der Server
------------------

Der Server betreibt einen Node für das Hauptnetz und einen für das Testnetz,
dazu je einen Live-Explorer. Die ausführliche Anleitung für Leute ohne
Linux-Erfahrung steht in [server-einrichten.md](server-einrichten.md). Hier die
Kurzfassung.

### Voraussetzungen

- Ein Server, der rund um die Uhr läuft, x86_64, mit **Ubuntu 24.04** (oder
  neuer) oder **Debian 13**. 1 GB RAM reicht. Vorher lief Velincoin auf einem
  Netcup VPS mit Debian 13.
- Zugang als `root` über SSH.

### Installieren

Die Website auf Vercel gibt es nicht mehr. Darum lädt man das Skript und das
Paket direkt von GitHub. Als `root` auf dem Server:

```
apt-get update && apt-get install -y curl ca-certificates
curl -fsSL https://raw.githubusercontent.com/nicolasspzh/velincoin/main/website/server/install.sh | VELINCOIN_BASE_URL=https://raw.githubusercontent.com/nicolasspzh/velincoin/main/website/server bash
```

Das ist eine einzige Zeile. Das Skript braucht etwa eine Minute und macht
Folgendes:

| Schritt | Ergebnis |
|---|---|
| Pakete | installiert `python3`, `ufw`, `curl`, `ca-certificates` |
| Auslagerungsspeicher | legt `/swapfile` (1 GB) an, falls es noch keinen gibt |
| Benutzer | Systembenutzer `velincoin`, Datenordner `/var/lib/velincoin` |
| Programme | `/opt/velincoin` (Programme, Explorer, Dienst-Vorlagen), Link `/usr/local/bin/velincoin-cli` |
| Dienste | `velincoind-main`, `velincoind-test`, `velincoin-explorer-main`, `velincoin-explorer-test` in `/etc/systemd/system/`, starten automatisch nach einem Neustart |
| Firewall (ufw) | erlaubt SSH, 9733, 29733, 80, 8080 und **schaltet ufw ein** |

**Achtung bei einem Server mit anderen Programmen:** Das Skript schaltet die
Firewall `ufw` ein und erlaubt nur SSH und die Velincoin-Ports. Brauchen andere
Programme weitere Ports, sind diese danach gesperrt. Vorher mit `ss -tlnp`
nachsehen, welche Ports belegt sind, und sie nach der Installation mit
`ufw allow <port>/tcp` wieder erlauben. Ausserdem belegen die Explorer die Ports
80 und 8080. Läuft dort schon ein Webserver, startet der Explorer nicht. Dann in
`/etc/systemd/system/velincoin-explorer-*.service` bei `--port` einen freien
Port eintragen, `systemctl daemon-reload` und
`systemctl restart velincoin-explorer-main velincoin-explorer-test`.

### Ports

| Dienst | Port | Zweck |
|---|---|---|
| Node Hauptnetz | 9733 | Wallets im Hauptnetz verbinden sich hierher |
| Node Testnetz | 29733 | Wallets im Testnetz verbinden sich hierher |
| Live-Explorer Testnetz | 80 | `http://<IP>/` |
| Live-Explorer Hauptnetz | 8080 | `http://<IP>:8080/` |
| RPC (Steuerung) | 9732, 29732 | nur auf dem Server selbst (`127.0.0.1`), **nie** im Internet öffnen |

### Prüfen

```
systemctl status velincoind-main velincoind-test velincoin-explorer-main velincoin-explorer-test
runuser -u velincoin -- velincoin-cli -datadir=/var/lib/velincoin -testnet4 getblockcount
runuser -u velincoin -- velincoin-cli -datadir=/var/lib/velincoin -testnet4 getconnectioncount
journalctl -u velincoind-test -n 50
```

### Aktualisieren

Das Installationsskript nochmals ausführen. Die Blockchain bleibt erhalten.
Für neue Programme zuerst das Paket neu bauen (README, Abschnitt
«Server-Programme für Linux»), dann `contrib/velincoin/server/package.sh`
ausführen und `website/server/` committen.


Teil 3: Neuer Server mit anderer IP-Adresse
-------------------------------------------

Die Adresse `159.195.4.228` (und die IPv6-Adresse
`2a00:11c0:5f:4539:1448:c9ff:fe1d:3565`) ist fest in die Wallet eingebaut.
Bekommt der neue Server eine andere Adresse, muss sie an diesen Stellen ersetzt
werden:

| Datei | Wofür |
|---|---|
| `contrib/seeds/nodes_main.txt` | Feste Seeds Hauptnetz, Port 9733 |
| `contrib/seeds/nodes_testnet4.txt` | Feste Seeds Testnetz, Port 29733 |
| `src/chainparamsseeds.h` | Wird aus den beiden Dateien erzeugt, siehe unten |
| `src/qt/velincoinserver.h` (`HOSTS`) | Die Wallet verbindet sich beim Start direkt damit, auch der Link zum Live-Explorer |
| `website/index.html` | Links zum Live-Explorer |
| `contrib/velincoin/explorer/README.md`, `doc/velincoin/server-einrichten.md`, `doc/velincoin/seed-server.md`, `README.md` | Nur Text |

`src/chainparamsseeds.h` neu erzeugen, im Ordner `contrib/seeds`:

```
python3 generate-seeds.py . > ../../src/chainparamsseeds.h
```

Mit `git grep 159.195.4.228` findet man alle Stellen. Danach den
Windows-Installer neu bauen (README, «Windows-Installationsprogramm») und
`build-win/velincoin-win64-setup.exe` nach `website/download/` kopieren. Alte
Wallets finden den neuen Server sonst nur über *Fenster → Node hinzufügen*.

Tipp: Statt einer IP-Adresse einen Namen verwenden (zum Beispiel über DuckDNS
oder eine eigene Domain). Zieht der Server später nochmals um, ändert man nur
den Namen und muss die Wallet nicht neu bauen.


Teil 4: Der Block Explorer
--------------------------

- **Auf dem Server** läuft er nach Teil 2 von selbst, für beide Netze. Seine
  Datenbank (`/var/lib/velincoin/explorer-*.sqlite`) baut er beim ersten Start
  aus der Blockchain auf.
- **Auf dem eigenen Computer** neben einer laufenden Wallet: Python 3
  installieren, in der Wallet den RPC-Server einschalten (*Einstellungen →
  Optionen → Allgemein → RPC-Server aktivieren*, oder `server=1` in
  `velincoin.conf`), dann:

  ```
  py contrib/velincoin/explorer/explorer.py
  ```

  und im Browser http://127.0.0.1:8080/ öffnen. Unter Linux heisst der Befehl
  `python3`.

Alles Weitere, auch die JSON-API und der Test:
[contrib/velincoin/explorer/README.md](../../contrib/velincoin/explorer/README.md).


Teil 5: Die Website
-------------------

Die Website ist reines HTML, CSS und JavaScript im Ordner `website/`, ohne
Build-Schritt. `website/index.html` lässt sich auch direkt mit einem
Doppelklick öffnen.

Wieder online stellen mit Vercel:

1. Auf vercel.com ein neues Projekt anlegen und das GitHub-Repository
   `nicolasspzh/velincoin` verbinden.
2. Als Branch `main` wählen. Die Datei `vercel.json` im Repository leitet die
   Startseite auf `website/index.html` um. Ein Build-Befehl ist nicht nötig.
3. Optional die Domain eintragen (in Vercel unter den Domains des Projekts und
   beim Domain-Anbieter).

Danach funktioniert auch wieder die kurze Installationszeile
`curl -fsSL https://velincoin.vercel.app/server/install.sh | bash`, sofern das
neue Projekt wieder unter diesem Namen läuft.


Anhang: Velincoin von einem Server entfernen
--------------------------------------------

So wurde Velincoin beim Projektende vom Server entfernt. Andere Programme auf
dem Server bleiben unberührt. Zuerst nachsehen, was da ist (ändert nichts):

```
ps aux | grep -i velincoin | grep -v grep
systemctl list-units --all | grep -iE "velincoin|explorer"
find / -iname "*velincoin*" -not -path "/proc/*" -not -path "/sys/*" 2>/dev/null
ufw status numbered
```

Dann entfernen. Das kann man nicht rückgängig machen:

```
# Dienste stoppen und Autostart entfernen
systemctl disable --now velincoin-explorer-main velincoin-explorer-test velincoind-main velincoind-test
rm -f /etc/systemd/system/velincoind-main.service \
      /etc/systemd/system/velincoind-test.service \
      /etc/systemd/system/velincoin-explorer-main.service \
      /etc/systemd/system/velincoin-explorer-test.service
systemctl daemon-reload

# Programme, Daten, Konfiguration, Quellcode (install.sh und setup-seed-node.sh)
rm -rf /opt/velincoin /var/lib/velincoin /var/lib/velincoind /etc/velincoin /root/.velincoin /usr/local/src/velincoin
rm -f /usr/bin/velincoind /usr/bin/velincoin-cli /usr/local/bin/velincoin-cli

# Benutzer (löscht auf Debian und Ubuntu auch die gleichnamige Gruppe)
userdel velincoin

# Firewall: die Velincoin-Ports schliessen
ufw delete allow 9733/tcp
ufw delete allow 29733/tcp
```

Die Ports 80 und 8080 nur schliessen, wenn kein anderes Programm sie braucht
(`ss -tlnp | grep -E ':80 |:8080 '` zeigt nach dem Stoppen der Explorer nichts
mehr an). Dann `ufw delete allow 80/tcp` und `ufw delete allow 8080/tcp`.

Bewusst nicht entfernt werden die Pakete, die die Skripte installiert haben
(`python3`, `ufw`, `curl`, `git`, `cmake`, `build-essential` und weitere), und
der Auslagerungsspeicher `/swapfile`. Andere Programme können sie brauchen.
