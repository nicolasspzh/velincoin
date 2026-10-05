Das SHA-256-Risiko von Velincoin
================================

Velincoin nutzt im Moment denselben Mining-Algorithmus wie Bitcoin: SHA-256.
Dieses Dokument erklärt, warum das für eine kleine, neue Kette ein Risiko ist,
welche Möglichkeiten es gibt und was wir empfehlen.

Hinweis: Die Beispiele aus der Vergangenheit unten stammen aus dem allgemeinen
Wissen des Verfassers. Sie wurden für dieses Dokument nicht nachgeprüft. Bitte
vor wichtigen Entscheidungen selbst nachlesen.


Das Problem: der 51%-Angriff
----------------------------

Bei Proof of Work gilt die Kette mit der meisten Arbeit als die richtige. Wer
mehr Rechenleistung hat als alle anderen Miner zusammen, kann deshalb im Geheimen
eine eigene, längere Kette bauen und sie später veröffentlichen. Alle Nodes
wechseln dann auf diese Kette.

Beispiel:

1. Mallory schickt Anna 1000 VLC für ein Auto. Die Zahlung ist in Block 500.
2. Gleichzeitig mined Mallory heimlich eine andere Kette ab Block 499. In ihr
   schickt Mallory die 1000 VLC an sich selbst.
3. Anna wartet 6 Bestätigungen und übergibt das Auto.
4. Mallory veröffentlicht die geheime Kette. Sie ist länger, also übernehmen alle
   Nodes sie. Annas Zahlung ist verschwunden, Mallory hat Auto und Coins.

Das nennt man Doppelausgabe (Double Spend). Ein Angreifer kann damit keine
fremden Coins stehlen und keine Regeln brechen, zum Beispiel keine Coins aus dem
Nichts erzeugen. Er kann aber eigene Zahlungen rückgängig machen und Blöcke
anderer Miner verdrängen.


Warum SHA-256 bei einer kleinen Kette besonders gefährlich ist
--------------------------------------------------------------

Für SHA-256 gibt es spezielle Mining-Maschinen (ASICs). Fast die ganze Leistung
dieser Maschinen arbeitet heute für Bitcoin. Im Vergleich dazu wird Velincoin am
Anfang winzig sein, vielleicht ein paar Computer von uns und Freunden.

Das heisst konkret:

- Schon **ein einzelner** gekaufter oder gemieteter ASIC-Miner hat sehr
  wahrscheinlich mehr Leistung als das ganze Velincoin-Netz am Anfang.
- Es gibt Marktplätze, auf denen man Mining-Leistung stundenweise mieten kann.
  Ein Angriff braucht also keine eigene Hardware.
- Ein grosser Bitcoin-Pool könnte Velincoin mit einem winzigen Bruchteil seiner
  Leistung übernehmen, ohne dass es bei Bitcoin auffällt.

Aus der Vergangenheit (nicht nachgeprüft, siehe oben) sind mehrere erfolgreiche
51%-Angriffe auf kleinere Proof-of-Work-Coins bekannt, zum Beispiel auf
Bitcoin Gold, Ethereum Classic und Vertcoin.

**Wann ist das Risiko wirklich ernst?** Ein Angriff kostet Geld (Strom oder
Miete). Er lohnt sich nur, wenn man dabei mehr gewinnt. Solange VLC keinen Preis
hat und nirgends gegen echtes Geld getauscht wird, gibt es kaum einen Grund
anzugreifen, ausser Spass oder Sabotage. Das Risiko wird ernst, sobald VLC
einen Marktwert bekommt, zum Beispiel durch eine Börse oder durch Verkauf.


Die Möglichkeiten
-----------------

### 1. SHA-256 behalten und das Risiko akzeptieren

- Kein Aufwand.
- Für ein Lern- und Freundesprojekt ohne Marktwert vertretbar.
- Für einen Coin mit echtem Wert **nicht** sicher.

### 2. Merged Mining mit Bitcoin (AuxPoW)

Bitcoin-Miner können Velincoin "nebenbei" mitminen, ohne zusätzlichen Strom.
Ein Hash wird für beide Ketten verwendet. So hat es Namecoin gemacht, und Dogecoin
macht es mit Litecoin.

- Vorteil: Wenn grosse Pools mitmachen, ist Velincoin durch einen Teil der
  Bitcoin-Leistung geschützt. Das ist die einzige Möglichkeit, wirklich viel
  Leistung zu bekommen.
- Nachteil: Es hilft nur, wenn grosse Pools tatsächlich mitmachen. Am Anfang tun
  sie das wahrscheinlich nicht, und solange schützt es nicht.
- Nachteil: Grosser Programmieraufwand. Die Blockstruktur ändert sich, und das
  muss sehr sorgfältig getestet werden. Es gibt aber bestehenden Code aus Namecoin
  und Dogecoin, an dem man sich orientieren kann.

### 3. Ein anderer Mining-Algorithmus

| Algorithmus | Bekannt von | Hinweis |
|---|---|---|
| Scrypt | Litecoin, Dogecoin | Es gibt ebenfalls ASICs mit viel Leistung. Gleiches Problem wie SHA-256, nur mit Litecoin statt Bitcoin. |
| RandomX | Monero | Für normale Prozessoren (CPUs) gemacht, ASICs bringen wenig Vorteil. Jeder mit einem Computer kann mitminen. Aber: CPU-Leistung kann man ebenfalls mieten, und Botnetze (gekaperte Computer) nutzen gerne CPU-Coins. |

- Vorteil von RandomX: Die Leistung ist auf viele normale Computer verteilt,
  keine riesige fremde ASIC-Leistung wartet "nebenan".
- Nachteil: Ein neuer Algorithmus muss in Velincoin Core eingebaut werden. Das ist
  eine Änderung am Herz der Konsensregeln mit entsprechendem Fehlerrisiko.
- Ein kleiner Coin ist auch mit RandomX angreifbar, nur weniger leicht.

### 4. Zentrale Absicherung am Anfang

Zum Beispiel feste Kontrollpunkte (Checkpoints) im Code, oder Blöcke, die
zusätzlich von uns signiert sein müssen (ähnlich wie bei Signet).

- Vorteil: Wirkt sofort, egal wie viel Leistung ein Angreifer hat.
- Nachteil: Das Netz ist dann nicht mehr dezentral. Wer die Schlüssel hat,
  kontrolliert die Kette. Das widerspricht der Idee einer Kryptowährung und muss
  offen kommuniziert werden.

### 5. Organisatorische Massnahmen

- Für grosse Beträge viele Bestätigungen verlangen, zum Beispiel 100 statt 6.
- Das Netz überwachen und Alarm schlagen, wenn plötzlich eine lange, unbekannte
  Kette auftaucht.
- Das senkt den Schaden, verhindert aber keinen Angriff.


Unsere Empfehlung
-----------------

1. **Jetzt:** SHA-256 behalten. Velincoin ist im Aufbau und hat keinen Marktwert.
   Wir testen im Testnetz und in einem kleinen Kreis.
2. **Vor einem öffentlichen Start mit echtem Wert:** neu entscheiden. Wenn ihr
   möglichst viel Sicherheit wollt, ist Merged Mining mit Bitcoin der stärkste
   Weg, aber nur, wenn Pools mitmachen. Wenn ihr wollt, dass jeder mit seinem
   Computer minen kann, ist RandomX der passende Weg.
3. **Eine Umstellung so früh wie möglich machen.** Vor dem öffentlichen Start
   ist sie einfach, weil man die Kette neu beginnen kann. Nach dem Start ist sie
   eine Hard Fork, und alle Nodes und Miner müssen gleichzeitig wechseln.
4. In jedem Fall ehrlich kommunizieren, wie sicher das Netz ist, damit niemand
   VLC für sicherer hält, als es ist.
