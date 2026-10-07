Velincoin-Server einrichten (Netcup VPS)
========================================

Ein Server, der rund um die Uhr läuft, hält das Velincoin-Netz am Leben:

- Die Wallets verbinden sich automatisch mit ihm, niemand muss mehr eine IP
  mit `addnode` eingeben.
- Neue Blöcke kommen auch dann an, wenn gerade nur eine Person online ist.
- Der Block Explorer läuft auf demselben Server und zeigt jeden neuen Block
  sofort.

Diese Anleitung ist für Leute ohne Linux-Erfahrung. Was auf dem Server
installiert wird, erledigt ein Skript.


Was ist Ubuntu?
---------------

Ubuntu ist ein kostenloses Betriebssystem, so wie Windows, nur für Server. Es
ist eine Linux-Version und auf Servern am weitesten verbreitet. Man bedient
den Server nicht mit Maus und Fenstern, sondern über eine Textverbindung
(SSH) von seinem eigenen Computer aus. Dafür reicht das Terminal, das in
Windows 10 und 11 schon eingebaut ist.


Schritt 1: Server bestellen
---------------------------

Gewählt ist **Netcup VPS piko** (1 Kern, 1 GB RAM, 30 GB SSD, etwa 2 € im
Monat, 12 Monate Laufzeit). Das reicht, weil die Velincoin-Blockchain noch
sehr klein ist.

1. Auf netcup.com das Paket bestellen und ein Kundenkonto anlegen.
2. Als Betriebssystem **Ubuntu 24.04** wählen. Kann man das beim Bestellen
   nicht wählen, geht es später im **Server Control Panel (SCP)**:
   Server auswählen, *Medien*, *Images*, dort Ubuntu 24.04 installieren.
3. Nach der Bestellung kommen E-Mails mit den Zugangsdaten. Wichtig sind:
   - die **IP-Adresse** des Servers (zum Beispiel `203.0.113.45`)
   - das **Root-Passwort** (root ist der Administrator auf Linux)

Die IP-Adresse ist nicht geheim, sie kommt später in die Wallet. Das Passwort
ist geheim: niemandem schicken, auch nicht in einem Chat.


Schritt 2: Mit dem Server verbinden
-----------------------------------

1. In Windows das Startmenü öffnen und **Terminal** (oder **PowerShell**)
   starten.
2. Eingeben, mit der eigenen IP-Adresse:

   ```
   ssh root@203.0.113.45
   ```

3. Beim ersten Mal fragt Windows, ob man dem Server vertraut
   (`Are you sure you want to continue connecting`). `yes` eingeben und Enter.
4. Das Root-Passwort eingeben. Beim Tippen erscheinen keine Zeichen, das ist
   normal. Enter drücken.
5. Jetzt ist man auf dem Server angemeldet. Die Zeile beginnt mit
   `root@...:~#`.

Tipp: Im Terminal fügt ein **Rechtsklick** kopierten Text ein.

Empfohlen: gleich zu Beginn ein eigenes, neues Passwort setzen. `passwd`
eingeben und das neue Passwort zweimal tippen.


Schritt 3: Velincoin installieren
---------------------------------

Das Installationsskript lädt die fertigen Velincoin-Programme für Linux, legt
einen eigenen Benutzer `velincoin` an, öffnet die Ports in der Firewall und
richtet alles so ein, dass es nach einem Neustart des Servers von selbst
wieder läuft:

| Dienst | Port | Zweck |
|---|---|---|
| Velincoin Hauptnetz | 9733 | Wallets im Hauptnetz verbinden sich hierher |
| Velincoin Testnetz | 29733 | Wallets im Testnetz verbinden sich hierher |
| Block Explorer | 80 | Webseite mit allen Blöcken, live |

Auf einem Minimal-System (zum Beispiel «debian 13 minimal» bei Netcup) zuerst
`curl` installieren:

```
apt-get update && apt-get install -y curl ca-certificates
```

Dann diesen Befehl kopieren, im Terminal mit
Rechtsklick einfügen und Enter drücken. Es ist eine einzige Zeile:

```
curl -fsSL https://raw.githubusercontent.com/nicolasspzh/velincoin/claude/dazzling-maxwell-vld1af/website/server/install.sh | VELINCOIN_BASE_URL=https://raw.githubusercontent.com/nicolasspzh/velincoin/claude/dazzling-maxwell-vld1af/website/server bash
```

Sobald die Dateien auch auf der Website liegen (nach dem Zusammenführen in
`main`), geht es kürzer:

```
curl -fsSL https://velincoin.vercel.app/server/install.sh | bash
```

Das Skript braucht etwa eine Minute. Am Ende zeigt es die Adressen der beiden
Explorer und der beiden Nodes an. Danach ist der Server fertig: Er startet
nach einem Neustart von selbst wieder, und die Blockchain bleibt erhalten.

Prüfen, ob alles läuft:

```
systemctl status velincoind-test velincoind-main
runuser -u velincoin -- velincoin-cli -datadir=/var/lib/velincoin -testnet4 getblockcount
```

Im Browser zeigt `http://IP-ADRESSE/` den Explorer des Testnetzes und
`http://IP-ADRESSE:8080/` den des Hauptnetzes.


Schritt 4: Server in die Wallet eintragen
-----------------------------------------

Die IP-Adresse (oder ein Name dafür, siehe unten) wird im Code als fester
Seed eingetragen (`vFixedSeeds` bzw. `vSeeds` in
`src/kernel/chainparams.cpp`, siehe `seed-server.md`). Danach wird ein neuer
Installer gebaut. Wallets mit diesem Installer verbinden sich beim Start
automatisch mit dem Server.


Optional: Ein Name statt der IP-Adresse
---------------------------------------

Statt `203.0.113.45` kann der Explorer unter einem Namen erreichbar sein. Gratis
geht das zum Beispiel mit DuckDNS (`velincoin.duckdns.org`, falls noch frei).
Ein Name hat einen weiteren Vorteil: Zieht der Server einmal um, ändert man nur
den Namen, die Wallets müssen nicht neu installiert werden.


Kosten und Pflege
-----------------

- Etwa 2 € im Monat, 12 Monate Vertragslaufzeit.
- Der Server braucht keine tägliche Pflege. Updates von Ubuntu installiert er
  selbst (unattended-upgrades ist bei Ubuntu standardmässig an).
- Für eine neue Velincoin-Version führt man das Installationsskript einfach
  noch einmal aus.
