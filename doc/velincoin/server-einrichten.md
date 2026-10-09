Velincoin-Server einrichten (Netcup VPS)
========================================

> **Projekt beendet (9. Oktober 2026):** Velincoin läuft nicht mehr auf dem
> Server `159.195.4.228`, der Live-Explorer ist offline. Diese Anleitung gilt
> weiter für einen neuen Server. Einstieg: [wiederaufbau.md](wiederaufbau.md).

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
| Live-Explorer Testnetz | 80 | Webseite mit allen Blöcken, jeder neue Block nach Sekunden |
| Live-Explorer Hauptnetz | 8080 | dasselbe für das Hauptnetz |

Es spielt keine Rolle, was vorher auf dem Server lief. Ein älteres Setup mit
`setup-seed-node.sh` wird abgelöst, und Blöcke eines alten Testnetzes kommen
zur Seite (siehe README, «Neustarts des Testnetzes»).

Auf einem Minimal-System (zum Beispiel «debian 13 minimal» bei Netcup) zuerst
`curl` installieren:

```
apt-get update && apt-get install -y curl ca-certificates
```

Dann diesen Befehl kopieren, im Terminal mit
Rechtsklick einfügen und Enter drücken. Es ist eine einzige Zeile:

```
curl -fsSL https://raw.githubusercontent.com/nicolasspzh/velincoin/main/website/server/install.sh | VELINCOIN_BASE_URL=https://raw.githubusercontent.com/nicolasspzh/velincoin/main/website/server bash
```

Läuft die Website wieder (siehe [wiederaufbau.md](wiederaufbau.md), Teil 5),
geht es auch kürzer:

```
curl -fsSL https://velincoin.vercel.app/server/install.sh | bash
```

**Server mit anderen Programmen:** Das Skript schaltet die Firewall `ufw` ein
und erlaubt nur SSH und die Velincoin-Ports. Vorher mit `ss -tlnp` nachsehen,
welche Ports andere Programme brauchen, und sie danach mit
`ufw allow <port>/tcp` wieder erlauben. Details in
[wiederaufbau.md](wiederaufbau.md), Teil 2.

Früher lud der Server zusätzlich einen Explorer auf die Website hoch (Dienst
`velincoin-explorer-sync`, mit einem GitHub-Token). Den gibt es nicht mehr, der
Live-Explorer reicht. Das Skript schaltet diesen Dienst ab und löscht den Token
auf dem Server. Den Token danach auch auf GitHub widerrufen.

Das Skript braucht etwa eine Minute. Am Ende zeigt es die Adressen der
Explorer und der Nodes an. Danach ist der Server fertig: Er startet nach einem
Neustart von selbst wieder, und die Blockchain bleibt erhalten.


Den Explorer ansehen
--------------------

Dafür braucht es keine Konsole, nur den Browser:

- **Live-Explorer Testnetz:** http://159.195.4.228/
- **Live-Explorer Hauptnetz:** http://159.195.4.228:8080/

Die Website und die Wallet (*Hilfe → Block Explorer öffnen*) verlinken den
Live-Explorer. Der Browser zeigt «Nicht sicher» an, weil der Server noch kein
HTTPS hat. Für einen Explorer, der nur liest, ist das unbedenklich.


Prüfen, ob alles läuft
----------------------

```
systemctl status velincoind-test velincoind-main
runuser -u velincoin -- velincoin-cli -datadir=/var/lib/velincoin -testnet4 getblockcount
```


Schritt 4: Server in der Wallet
-------------------------------

Ist schon erledigt: Die IP-Adresse ist als fester Seed eingetragen
(`contrib/seeds/`, siehe `seed-server.md`), und die Wallet verbindet sich bei
jedem Start von selbst mit dem Server. Niemand muss eine IP-Adresse eingeben.


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
  noch einmal aus. Vorher die Programme neu bauen und mit
  `contrib/velincoin/server/package.sh` packen (siehe README).
