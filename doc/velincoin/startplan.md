Startplan Velincoin bis Freitag, 9. Oktober 2026
===============================================

Stand: Dienstag, 6. Oktober 2026. Vier Tage, zwei Personen.

Dieser Plan geht davon aus, dass am Freitag ein **kleiner Start** stattfindet:
Das Hauptnetz läuft, ihr zwei und ein paar Bekannte können die Wallet
herunterladen, minen und VLC senden. Börse, Handel und Phantom gehören
**nicht** dazu, das ist in vier Tagen nicht machbar.

Legende: **[Ich]** = kann Claude im Repo erledigen. **[Ihr]** = braucht euch,
eure Computer, Router, Domain oder Geld.


0. Zuerst entscheiden (heute, Dienstag)
---------------------------------------

Diese Punkte blockieren alles andere. Sobald der erste echte Block im Hauptnetz
gemined ist, lassen sie sich nur noch ändern, wenn man die Kette neu beginnt.

- [ ] **[Ihr] Mining-Algorithmus.** SHA-256 behalten oder wechseln?
  Siehe [sha256-risiko.md](sha256-risiko.md). Ein Wechsel auf RandomX oder
  Merged Mining ist bis Freitag **nicht realistisch**, das ist ein grosser und
  heikler Umbau. Realistisch heisst: Freitag mit SHA-256 starten und offen
  sagen, dass das Netz am Anfang nicht gegen Angriffe geschützt ist.
- [ ] **[Ihr] ASIC-Frage.** Bei der Start-Schwierigkeit findet ein einziger
  SHA-256-ASIC-Miner sehr viel schneller Blöcke als eure Computer. Die
  Schwierigkeit passt sich erst nach 2016 Blöcken an, und auch dann um höchstens
  das Vierfache. Wer früh mit einem ASIC kommt, bekommt also einen grossen Teil
  der ersten Coins. Das muss euch bewusst sein, bevor ihr den Start öffentlich
  macht.
- [ ] **[Ihr] Wer ist dabei?** Nur ihr zwei und Bekannte (empfohlen) oder
  öffentlich mit Ankündigung?
- [ ] **[Ihr] Zugang zur Domain `velincoin.com`** klären: Wo ist sie registriert,
  wer kann DNS-Einträge ändern?


1. Code fertig machen (Dienstag bis Mittwoch)
---------------------------------------------

- [ ] **[Ich]** Alle Änderungen in den Hauptbranch übernehmen (Pull Request,
  ihr gebt frei).
- [ ] **[Ich]** Seed-Namen in `src/kernel/chainparams.cpp` eintragen, sobald die
  Namen feststehen (Schritt 2). Zum Beispiel `seed1.velincoin.com` und
  `seed2.velincoin.com`.
- [ ] **[Ich]** Fertige Programme bauen: Windows-Installer und Linux-Version,
  dazu eine Datei mit SHA-256-Prüfsummen, damit jeder den Download prüfen kann.
  Der erste Windows-Build dauert mehrere Stunden.
- [ ] **[Ihr]** Die Windows-Wallet (`velincoin-qt`) von Hand anschauen. Die
  Fenster wurden noch nie von einem Menschen geprüft.
- [ ] **[Ich]** Release auf GitHub anlegen. Dafür muss das Repo öffentlich sein
  oder die Downloads müssen woanders liegen. **[Ihr]** entscheidet das.


2. Server einrichten (Mittwoch)
-------------------------------

- [ ] **[Ihr] Seed 1:** Windows-11-PC zu Hause nach
  [seed-windows.md](seed-windows.md). Wichtigste Punkte: Portweiterleitung 9733,
  CGNAT prüfen, DynDNS.
- [ ] **[Ihr] Seed 2:** kleiner gemieteter Linux-Server (VPS) nach
  [seed-server.md](seed-server.md). Hat eine feste IP, ist unabhängig von eurem
  Heimanschluss. Er eignet sich auch für Explorer und Webseite (Schritt 4).
- [ ] **[Ihr] DNS-Einträge** bei `velincoin.com`: je `seed1` und `x9.seed1`,
  `seed2` und `x9.seed2`. Warum das `x9.` nötig ist, steht in
  [seed-windows.md](seed-windows.md), Schritt 10.
- [ ] **[Ihr]** Mit `Resolve-DnsName` (Windows) oder `dig` (Linux) prüfen, dass
  alle vier Namen die richtige IP liefern.
- [ ] **[Ich]** Danach die Namen in den Code eintragen und neu bauen (Schritt 1).


3. Mining starten (Mittwochabend oder Donnerstagmorgen)
-------------------------------------------------------

**Vorher:** Wallet anlegen und **sofort sichern** (`backupwallet` oder in der
GUI *Datei > Wallet sichern*). Ohne Sicherung sind die geminten Coins bei einem
Festplattenschaden weg.

Wie lange es dauert (Schätzung, nicht im Hauptnetz gemessen):

- Ein Block braucht im Schnitt rund 4,3 Milliarden Versuche.
- Der eingebaute Miner nutzt einen Prozessorkern. Gemessen wurden im Testnetz
  rund 3,4 Millionen Versuche pro Sekunde, also etwa **20 Minuten pro Block**.
- Für 101 Blöcke mit einem Kern: rund **35 Stunden**. Mit zwei Computern rund
  **18 Stunden**. Glück spielt mit, es kann deutlich schneller oder langsamer
  gehen.
- Wer gleichzeitig mined, sollte über die Seeds verbunden sein. Sonst entstehen
  zwei getrennte Ketten, und die kürzere geht verloren.

Aufgaben:

- [ ] **[Ihr]** Beide Nodes laufen und sind miteinander verbunden
  (`getconnectioncount` mindestens 1).
- [ ] **[Ihr]** Beide minen mit `generatetoaddress` auf eine eigene Adresse.
- [ ] **[Ich, optional]** Eine Anleitung für einen Miner, der alle Prozessorkerne
  nutzt. Das muss ich zuerst prüfen und testen, bevor ich es empfehle.
- [ ] **[Ihr]** Ab Blockhöhe 101: erste Zahlung von einer Wallet zur anderen.


4. Explorer und Webseite (Donnerstag)
-------------------------------------

- [ ] **[Ihr + Ich]** Explorer auf dem VPS starten
  ([explorer/README.md](../../contrib/velincoin/explorer/README.md)). Ich
  schreibe die Anleitung für den Dauerbetrieb mit HTTPS, zum Beispiel unter
  `explorer.velincoin.com`.
- [ ] **[Ich]** Einfache Webseite für `velincoin.com`:
  - Was ist Velincoin, die Regeln (21 Mio., 10 Minuten, Halbierung)
  - Download mit Prüfsummen
  - Anleitung: installieren, verbinden, minen
  - Link zum Explorer
  - **Ehrlicher Hinweis:** neues, kleines Netz, kein Handel, kein Marktwert,
    nicht gegen 51%-Angriffe geschützt
- [ ] **[Ihr]** Webseite auf den Server oder zu einem Hoster hochladen.
  Wo `velincoin.com` heute hinzeigt, weiss ich nicht.


5. Freitag: Start
-----------------

- [ ] **[Ihr]** Letzter Test: frischer Computer, Installer herunterladen, Wallet
  findet das Netz von selbst (ohne `addnode`), Kette wird geladen.
- [ ] **[Ihr]** Explorer zeigt die aktuelle Blockhöhe.
- [ ] **[Ihr]** Bekannte einladen.
- [ ] **[Ich]** README aktualisieren: Status "gestartet", Seed-Namen, Links.


Was bewusst nicht bis Freitag geht
----------------------------------

| Thema | Warum nicht |
|---|---|
| Kaufen und Verkaufen | Braucht eine Börse, die VLC aufnimmt, oder eine eigene Lösung. Rechtliche Abklärung nötig (FINMA, Geldwäschereigesetz). |
| Phantom oder MetaMask | Nur über einen Token auf einer anderen Blockchain, mit Bridge. Grosser und sicherheitskritischer Aufwand. |
| Anderer Mining-Algorithmus | Grosser Umbau im Kern des Programms, braucht Tests. |
| macOS-Version | Noch nicht angepasst. |
| Mobile Wallet | Gibt es nicht. |


Was schiefgehen kann
--------------------

- **CGNAT beim Heimanschluss:** Dann kann Seed 1 zu Hause nicht als Seed dienen.
  Ausweg: zwei VPS.
- **Windows-Build dauert lange oder bricht ab:** Darum früh anfangen.
- **Mining dauert länger als geschätzt:** Ist Glückssache. Notfalls ist die
  erste Zahlung erst am Wochenende möglich. Der Start am Freitag geht trotzdem.
- **Jemand mined mit einem ASIC:** Siehe Schritt 0.
