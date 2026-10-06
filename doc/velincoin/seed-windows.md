Seed-Server auf einem Windows-11-PC
===================================

Diese Anleitung macht aus einem Windows-11-PC, der immer läuft, einen Seed-Server
für Velincoin. Ein Seed-Server ist ein normaler Velincoin-Node, der rund um die
Uhr läuft und von aussen erreichbar ist. Neue Nodes finden über ihn ins Netz.
Hintergrund steht in [seed-server.md](seed-server.md).

Ein einzelner Heim-PC reicht nicht als einziger Seed. Fällt er aus, findet in
dieser Zeit niemand neu ins Netz. Plant deshalb einen zweiten Seed an einem
anderen Ort ein, zum Beispiel einen kleinen gemieteten Server (VPS).

Die Befehle sind für die **PowerShell als Administrator**: Startmenü,
"PowerShell" eingeben, Rechtsklick, "Als Administrator ausführen".


Schritt 1: Velincoin installieren
---------------------------------

1. `velincoin-win64-setup.exe` ausführen (Bauanleitung im README, Abschnitt
   "Windows-Installationsprogramm").
2. Windows zeigt eine SmartScreen-Warnung, weil der Installer nicht digital
   signiert ist. "Weitere Informationen", dann "Trotzdem ausführen".
3. Den vorgeschlagenen Ordner `C:\Program Files\Velincoin` behalten.

Der Node ohne Fenster liegt danach in
`C:\Program Files\Velincoin\daemon\velincoind.exe`, das Steuerprogramm in
`C:\Program Files\Velincoin\daemon\velincoin-cli.exe`.


Schritt 2: Datenordner und Einstellungen
----------------------------------------

Der Node soll später ohne Anmeldung als Systemdienst starten. Darum bekommt er
einen festen Datenordner `C:\Velincoin` statt des normalen Ordners im
Benutzerprofil.

```powershell
New-Item -ItemType Directory -Path C:\Velincoin
notepad C:\Velincoin\velincoin.conf
```

In die Datei `velincoin.conf` schreiben und speichern:

```
# Verbindungen von aussen annehmen
listen=1
# Keine Wallet auf dem Seed-Server
disablewallet=1
```

Wichtig:

- **Kein** `prune=...` setzen. Ein Seed muss alle Blöcke behalten, damit neue
  Nodes die ganze Kette von ihm laden können.
- **Kein** `rpcallowip=...` und kein `rpcbind=...` setzen. Der RPC-Zugang
  (Port 9732) steuert den Node und darf nur auf dem PC selbst erreichbar sein.
  So ist es ohne diese Zeilen eingestellt.

Für das Testnetz kommt zusätzlich die Zeile `testnet4=1` dazu. Dann gilt überall
Port 29733 statt 9733.


Schritt 3: Testlauf
-------------------

```powershell
& "C:\Program Files\Velincoin\daemon\velincoind.exe" -datadir=C:\Velincoin
```

Das Fenster zeigt jetzt das Protokoll des Nodes. In einer zweiten PowerShell
prüfen:

```powershell
& "C:\Program Files\Velincoin\daemon\velincoin-cli.exe" -datadir=C:\Velincoin getblockchaininfo
```

Kommt eine Antwort mit `"chain": "main"`, läuft der Node. Danach beenden:

```powershell
& "C:\Program Files\Velincoin\daemon\velincoin-cli.exe" -datadir=C:\Velincoin stop
```


Schritt 4: Windows-Firewall öffnen
----------------------------------

Weil der Node später ohne Anmeldung läuft, fragt Windows nicht nach. Die Regel
deshalb selbst anlegen:

```powershell
New-NetFirewallRule -DisplayName "Velincoin P2P" -Direction Inbound -Protocol TCP -LocalPort 9733 -Action Allow
```

Nur Port 9733 öffnen, **nie** 9732.


Schritt 5: Automatischer Start beim Hochfahren
----------------------------------------------

Die Windows-Aufgabenplanung startet den Node beim Hochfahren, auch ohne dass
sich jemand anmeldet. Er läuft dann unsichtbar im Hintergrund.

```powershell
$action   = New-ScheduledTaskAction -Execute "C:\Program Files\Velincoin\daemon\velincoind.exe" -Argument "-datadir=C:\Velincoin"
$trigger  = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit ([TimeSpan]::Zero) -RestartCount 999 -RestartInterval (New-TimeSpan -Minutes 1) -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
Register-ScheduledTask -TaskName "Velincoin Node" -Action $action -Trigger $trigger -Settings $settings -User "SYSTEM" -RunLevel Highest
```

Was die Einstellungen bedeuten:

- `-ExecutionTimeLimit ([TimeSpan]::Zero)`: keine Zeitgrenze. Ohne diese
  Einstellung beendet Windows eine Aufgabe nach 3 Tagen.
- `-RestartCount` und `-RestartInterval`: Stürzt der Node ab, startet Windows
  ihn nach einer Minute neu.
- `-User "SYSTEM"`: läuft ohne Anmeldung.

Jetzt starten, ohne neu hochzufahren:

```powershell
Start-ScheduledTask -TaskName "Velincoin Node"
```

Prüfen, ob er läuft, geht wie in Schritt 3 mit `velincoin-cli ... getblockchaininfo`.
Zum Entfernen: `Unregister-ScheduledTask -TaskName "Velincoin Node"`.


Schritt 6: Ruhezustand ausschalten
----------------------------------

Der PC darf nie schlafen, solange er am Strom hängt:

```powershell
powercfg /change standby-timeout-ac 0
powercfg /change hibernate-timeout-ac 0
```

Windows-Updates starten den PC trotzdem ab und zu neu. Das ist kein Problem,
weil der Node durch Schritt 5 von selbst wieder startet. Unter Einstellungen,
Windows Update, "Nutzungszeit" lässt sich steuern, wann Neustarts passieren.


Schritt 7: Router einstellen
----------------------------

Damit andere den PC aus dem Internet erreichen, braucht der Router zwei Dinge.

**1. Feste lokale IP für den PC.** Im Router dem PC immer dieselbe Adresse im
Heimnetz geben, zum Beispiel `192.168.1.20`. Die Einstellung heisst je nach
Router etwa "IP-Adresse immer zuweisen" oder "DHCP-Reservierung".

**2. Portweiterleitung.** TCP-Port **9733** von aussen an diese lokale IP und
Port 9733 weiterleiten.

Velincoin versucht zusätzlich, den Port selbst im Router zu öffnen (PCP oder
NAT-PMP). Das klappt nur, wenn der Router das kann und erlaubt. Verlasst euch
nicht darauf, richtet die Weiterleitung von Hand ein.

**Achtung CGNAT:** Manche Anbieter geben einem Heimanschluss keine eigene
öffentliche IPv4-Adresse. Dann funktioniert keine Portweiterleitung. Prüfen:
Die WAN-IP in der Übersicht des Routers mit der Adresse vergleichen, die eine
Seite wie "Wie ist meine IP" anzeigt. Sind sie verschieden, seid ihr
wahrscheinlich hinter CGNAT. Dann beim Anbieter nach einer öffentlichen
IPv4-Adresse fragen.


Schritt 8: Fester Name statt wechselnder IP (DynDNS)
----------------------------------------------------

Die öffentliche IP eines Heimanschlusses ändert sich meistens ab und zu. Darum
bekommt der Seed einen Namen, der immer auf die aktuelle IP zeigt.

1. Einen DynDNS-Dienst einrichten. Viele Router haben das eingebaut. Sonst gibt
   es Anbieter mit einem kleinen Windows-Programm, das die IP aktuell hält.
2. Bei der Domain `velincoin.com` **zwei** CNAME-Einträge anlegen, die beide auf
   den DynDNS-Namen zeigen:

   | Name | Typ | Ziel |
   |---|---|---|
   | `seed1` | CNAME | euer DynDNS-Name |
   | `x9.seed1` | CNAME | euer DynDNS-Name |

   Warum zwei? Ein Velincoin-Node fragt einen Seed-Namen nicht direkt ab, sondern
   zuerst mit dem Präfix `x9.` (siehe Schritt 10).

Mit diesem Namen können sich andere schon jetzt verbinden:

```
addnode=seed1.velincoin.com:9733
```


Schritt 9: Von aussen testen
----------------------------

Am besten von einem anderen Anschluss aus, zum Beispiel einem Laptop im
Handy-Hotspot. Dort Velincoin starten mit `addnode=seed1.velincoin.com:9733` in
der `velincoin.conf`. Danach auf dem Seed-PC:

```powershell
& "C:\Program Files\Velincoin\daemon\velincoin-cli.exe" -datadir=C:\Velincoin getconnectioncount
```

Eine Zahl grösser als 0 heisst: Jemand ist verbunden. In
`getpeerinfo` steht bei Verbindungen von aussen `"inbound": true`.


Schritt 10: Namen fest ins Programm eintragen
---------------------------------------------

Wenn der Test klappt, kommt der Name in `src/kernel/chainparams.cpp` beim
Hauptnetz (`CMainParams`). Statt

```cpp
vSeeds.clear();
```

steht dann zum Beispiel

```cpp
vSeeds.emplace_back("seed1.velincoin.com");
vSeeds.emplace_back("seed2.velincoin.com");
```

Ein neuer Node fragt beim ersten Start `x9.seed1.velincoin.com` ab. Die `9`
steht für die Dienste, die er verlangt: die ganze Kette (`NODE_NETWORK`, Wert 1)
und SegWit (`NODE_WITNESS`, Wert 8), zusammen 9 (siehe `ThreadDNSAddressSeed` in
`src/net.cpp`). Die Adressen, die dabei herauskommen, speichert er mit dem
Standard-Port 9733 und verbindet sich normal mit ihnen.

Gibt es den `x9.`-Namen nicht, verbindet er sich nur kurz mit `seed1` selbst,
fragt nach weiteren Adressen und trennt wieder. Solange das Netz klein ist, kennt
der Seed kaum andere Adressen. Darum ist der `x9.`-Eintrag aus Schritt 8 nötig.

Prüfen, ob beide Namen funktionieren:

```powershell
Resolve-DnsName seed1.velincoin.com
Resolve-DnsName x9.seed1.velincoin.com
```

Beide müssen die aktuelle öffentliche IP des Heimanschlusses liefern.

Das ist eine vereinfachte Form der DNS-Seeds aus [seed-server.md](seed-server.md):
Jeder Name zeigt auf genau einen Node, es läuft keine eigene Seeder-Software.
Später kann ein richtiger DNS-Seeder dazukommen.


Sicherheit
----------

- Auf dem Seed-PC **keine Wallet mit Guthaben** (darum `disablewallet=1`).
- Windows 11 aktuell halten, Windows-Updates nicht abschalten.
- Port 9732 (RPC) nie im Router oder in der Firewall öffnen.
- Liegen auf dem PC private Daten, ist ein Seed im Internet ein zusätzliches
  Risiko. Besser ist ein PC, der nur diese Aufgabe hat.
- Die öffentliche IP des Heimanschlusses wird über den Seed-Namen bekannt.
