# JavaScript von Morgen schon heute

Dieses Repository enthält die Präsentation zu meinem Vortrag *JavaScript von Morgen schon heute*. Ein PDF-Export ist unter [etc/export](https://github.com/pburgmer/javascript-presentation-tomorrow-today/tree/master/etc/export) zu finden. Die zugehörige Demo-Anwedung gibt es unter [pburgmer/angularjs-demo-es6](https://github.com/pburgmer/angularjs-demo-es6)

## Zusammenfassung

ECMAScript 2015, der Standard, der als Grundlage für die Implementierung von JavaScript dient, nimmt immer konkretere Formen an. Viele Teile der Spezifikation sind so gut wie fertig, und neuere Browser setzen sie bis zu einem gewissen Grad bereits um. Dennoch kann man heute und auch in naher Zukunft noch keine Anwendung mit ES 2015 ausliefern, da es eben nicht alle relevanten Browser unterstützen. In diesem Vortrag erfahren Sie, wie sich heute schon mit Transpilern und Polyfills in ES 2015 entwickeln lässt und welche Vorteile das bietet. Anhand von Codebeispielen wird gezeigt, wie man proprietäre Lösungen wie RequireJS und Promises durch neue Standards ersetzen kann und seinen Code dadurch zukunftssicher macht.


## Kurz-Bio

Philipp Burgmer studierte an der Hochschule Karlsruhe Informatik und arbeitet als Entwickler, Berater und [Trainer](http://thecodecampus.de) für die [w11k GmbH](http://w11k.de). Er ist Experte für Webtechnologien und beschäftigt sich mit der Gestaltung und Optimierung von Benutzeroberflächen. Privat interessiert er sich für Klettern und DJing.


## Setup

Die Präsentation ist als Web-Anwendung mit [AngularJS](https://angularjs.org/) und [w11k-slides](https://github.com/w11k/w11k-slides) umgesetzt. Um sie lokal laufen zu lassen genügen folgende Aufrufe nach dem Checkout. Anschließend läuft ein lokaler Server (Port siehe Konsolenausgabe).

```
npm install
npm run dist
```