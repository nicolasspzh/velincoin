Seed-Server für Velincoin
=========================

Ein neuer Node kennt am Anfang keine anderen Nodes. Er braucht eine erste Adresse,
um ins Netz zu finden. Danach tauschen die Nodes untereinander Adressen aus und der
Node findet selbst weitere Nodes.

Für diesen ersten Kontakt gibt es drei Wege:

| Weg | Wie es funktioniert | Stand bei Velincoin |
|---|---|---|
| **Manuell** | Man trägt die IP-Adresse eines Nodes selbst ein: `addnode=1.2.3.4:9733` in `velincoin.conf` | Funktioniert jetzt schon |
| **Feste Seeds** (fixed seeds) | Eine Liste von IP-Adressen ist fest ins Programm kompiliert | Liste ist leer |
| **DNS-Seeds** | Ein Name wie `seed.velincoin.com` liefert die IP-Adressen von aktiven Nodes | Noch keiner |

Ohne Seeds müssen alle Nutzer die IP-Adresse eines Nodes kennen. Für einen
öffentlichen Start braucht Velincoin deshalb mindestens feste Seeds, besser auch
DNS-Seeds.


Schritt 1: Server, die rund um die Uhr laufen
---------------------------------------------

Ihr braucht mindestens **zwei** Server an verschiedenen Orten, damit das Netz
nicht von einem einzelnen Rechner abhängt. Ein kleiner gemieteter Linux-Server
(VPS) reicht am Anfang, solange die Kette klein ist.

**Schneller Weg (Testnetz, Debian):** Das Skript
[`contrib/velincoin/setup-seed-node.sh`](../../contrib/velincoin/setup-seed-node.sh)
erledigt die Punkte 1 bis 5 unten in einem Durchgang. Es kompiliert Velincoin Core
auf dem Server (ohne Wallet), legt den Benutzer `velincoin` und
`/etc/velincoin/velincoin.conf` an und startet den Dienst `velincoind`. Als root
auf dem Server ausführen:

```
apt-get update && apt-get install -y curl
curl -fsSLO https://raw.githubusercontent.com/nicolasspzh/velincoin/main/contrib/velincoin/setup-seed-node.sh
bash setup-seed-node.sh
```

Der Server braucht zum Kompilieren mindestens 1.5 GB Arbeitsspeicher. Das Skript
darf später nochmals laufen, um den neuesten Code zu kompilieren.

Von Hand geht es so:

1. Velincoin Core kompilieren oder die fertigen Programme hochladen
   (siehe README, Abschnitt "Kompilieren").
2. In der Firewall den Port öffnen:
   - Hauptnetz: TCP **9733**
   - Testnetz: TCP **29733**
3. `~/.velincoin/velincoin.conf` anlegen, zum Beispiel:

   ```
   # Verbindungen von aussen annehmen
   listen=1
   # Für das Testnetz zusätzlich: testnet4=1
   ```

   Den RPC-Zugang (Port 9732) **nicht** für das Internet öffnen.
4. `velincoind -daemon` starten. Für einen automatischen Start nach einem Neustart
   gibt es die Vorlage `contrib/init/velincoind.service` (systemd). Sie erwartet
   das Programm unter `/usr/bin/velincoind`, die Einstellungen unter
   `/etc/velincoin/velincoin.conf` und einen Systembenutzer `velincoin`. Details
   stehen in [doc/init.md](../init.md).
5. Auf Seed-Servern **keine Wallet mit Guthaben** betreiben.

Ab jetzt können sich andere mit `addnode=<IP-des-Servers>:9733` verbinden.


Schritt 2: Feste Seeds ins Programm eintragen
---------------------------------------------

Sobald die Server laufen, kommen ihre Adressen fest ins Programm.

1. In `contrib/seeds/nodes_main.txt` (Hauptnetz) und
   `contrib/seeds/nodes_testnet4.txt` (Testnetz) den Inhalt durch die eigenen
   Server ersetzen. Eine Adresse pro Zeile, zum Beispiel:

   ```
   1.2.3.4:9733
   5.6.7.8:9733
   ```

   Achtung: Diese Dateien enthalten im Moment noch die Listen von Bitcoin. Sie
   werden zurzeit nicht verwendet.
2. Im Ordner `contrib/seeds` ausführen:

   ```
   python3 generate-seeds.py . > ../../src/chainparamsseeds.h
   ```

   Die Dateien `nodes_signet.txt` und `nodes_test.txt` dürfen dabei nicht leer
   sein, sonst entstehen leere Listen im C++-Code. Im Zweifel einfach die
   eigenen Server auch dort eintragen.
3. In `src/kernel/chainparams.cpp` beim Hauptnetz (`CMainParams`) die Zeile

   ```cpp
   vFixedSeeds.clear();
   ```

   ersetzen durch

   ```cpp
   vFixedSeeds = std::vector<uint8_t>(std::begin(chainparams_seed_main), std::end(chainparams_seed_main));
   ```

   Beim Testnetz (`CTestNet4Params`) entsprechend mit `chainparams_seed_testnet4`.
4. Neu kompilieren und testen: Ein frischer Node ohne `addnode` muss die Server
   von selbst finden.


Schritt 3 (später): DNS-Seeds
-----------------------------

Ein DNS-Seed ist ein kleiner Server, der ständig das Netz absucht und auf
DNS-Anfragen die Adressen von gut erreichbaren Nodes zurückgibt.

1. Unter `velincoin.com` einen Eintrag einrichten, der die Subdomain
   `seed.velincoin.com` an den Seeder-Server weitergibt (ein NS-Eintrag).
2. Auf dem Seeder-Server eine Seeder-Software betreiben. Bitcoin nutzt dafür zum
   Beispiel den "bitcoin-seeder" von Pieter Wuille. Er ist für Bitcoin geschrieben
   und muss für Velincoin angepasst werden: Netzwerk-Kennung `e4d2a7c9`, Port
   `9733`, eigene Start-Adressen.
3. In `src/kernel/chainparams.cpp` beim Hauptnetz eintragen:

   ```cpp
   vSeeds.emplace_back("seed.velincoin.com.");
   ```

Regeln für Betreiber von DNS-Seeds stehen bei Bitcoin in
[doc/dnsseed-policy.md](../dnsseed-policy.md). Sie gelten sinngemäss auch für
Velincoin.


Was ich (Claude) von hier aus nicht machen kann
-----------------------------------------------

Server mieten, Domains einrichten und Programme auf euren Servern starten kann
ich aus dieser Umgebung nicht. Wenn ihr die IP-Adressen eurer Server habt, trage
ich sie gerne in den Code ein (Schritt 2).
