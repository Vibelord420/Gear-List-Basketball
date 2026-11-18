TVC Blues Team-App  (GitHub-Projekt: TVC-Blues-Team-App)

TVC TEAM-APP (After-Action Review + Gear-Checkliste)
GitHub Pages + Firebase (beides kostenlos). Dein Firebase-Projekt und deine config.js bleiben unverändert.

A) DATEIEN AUSTAUSCHEN
1. Im GitHub-Repository diese Dateien hochladen und die alten ersetzen:
   index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png
2. config.js NICHT ersetzen (darin stehen deine Firebase-Werte).
3. Nach ca. 1 Minute ist die neue Version live. Falls noch die alte erscheint: Seite neu laden
   (auf dem Handy die App-Verknüpfung einmal schließen und neu öffnen).

B) FIRESTORE-REGELN ERSETZEN (wichtig, sonst funktionieren Rollen und Reviews nicht)
1. Firebase-Konsole > Firestore Database > Regeln.
2. Alles durch den Inhalt von firestore.rules ersetzen und "Veröffentlichen" tippen.
   Die bisherige Regel für users/{uid} ist darin enthalten, deine Checklisten-Daten bleiben geschützt.

C) ERSTEN ADMIN FESTLEGEN
1. Öffne die App und registriere dich mit deinem Benutzernamen (Konto erstellen).
2. Firebase-Konsole > Authentication > Nutzer: UID deines Kontos kopieren.
3. Firestore Database > Sammlung starten: Sammlung "admins", Dokument-ID = deine UID,
   ein beliebiges Feld, z. B. ok = true. Speichern.
4. App neu laden: Im Menü erscheint "Benutzerverwaltung".
   Weitere Admins legst du auf dieselbe Weise an.

D) ROLLEN
- Alle neuen Konten sind Spieler.
- Admins machen unter "Benutzerverwaltung" einzelne Konten zu Trainern (und wieder zu Spielern).
- Trainer legen Termine an, führen Reviews zusammen, bearbeiten die Auswertung und geben sie frei.
- Spieler schreiben eigene Punkte (privat im eigenen Konto), senden sie mit Namen oder anonym an die Trainer
  und sehen die Auswertung erst nach der Freigabe.

E) DATENSCHUTZ, KURZ
- Reviews mit Namen können nur der Autor und die Trainer lesen.
- Anonyme Reviews enthalten keine Nutzerdaten. Wer das Firebase-Projekt verwaltet, sieht in der Konsole
  trotzdem alle Daten, aber bei anonymen Reviews steht kein Autor dabei.
- Konten bestehen aus Benutzername (Anzeigename), E-Mail-Adresse und Passwort. Die E-Mail wird nur für Anmeldung,
  Bestätigung und "Passwort vergessen" verwendet. Bitte nehmt das in eure Datenschutzerklärung auf.

F) E-MAIL, PASSWORT VERGESSEN
- Neue Konten registrieren sich mit Benutzername, E-Mail und Passwort. Die Anmeldung geht mit E-Mail oder
  (bei alten Konten) mit dem Benutzernamen.
- "Passwort vergessen?" auf der Anmeldeseite schickt einen Link per E-Mail. Das geht ohne weitere Einstellung
  (Firebase > Authentication > Anmeldemethode > E-Mail/Passwort muss aktiv sein, ist es bereits).
- Alte Konten (nur Benutzername) sehen im Menü einen Hinweis und tragen unter "Konto" eine E-Mail nach.
  Sie erhalten eine Bestätigungs-E-Mail; nach dem Klick auf den Link gilt die neue Adresse, danach meldet man sich
  mit der E-Mail an. Für die Änderung muss man frisch angemeldet sein.
- Alte Konten, deren Passwort schon vergessen ist und die noch keine E-Mail haben, kann nur ein Admin zurücksetzen:
  Firebase-Konsole > Authentication > Konto löschen, danach registriert sich die Person neu (Gear-Daten gehen verloren).
- Optional: Firebase > Authentication > Vorlagen: Absendername und Sprache der E-Mails auf Deutsch stellen.
  Die Mails können im Spam-Ordner landen.
- Benutzernamen sind eindeutig (ohne Beachtung der Groß-/Kleinschreibung). Bestehende Namen werden beim ersten Login
  automatisch reserviert.

G) ZENTRALE TERMINE
- Menü > "Termine": Trainings und Spiele des Vereins. Alle sehen dieselben Termine. Die Termine sind dieselben, die
  im After-Action Review ausgewertet werden.
- Trainer: "+ Termin" (manuell), "Trainings planen", "Spiele importieren", "Ferien".
- Trainings planen: Standard Dienstag und Donnerstag um 20:00 Uhr, nur an Schultagen in Baden-Württemberg.
  Ausgeschlossen werden Schulferien (Liste unter "Ferien", kann bearbeitet werden) und gesetzliche Feiertage in BW
  (werden berechnet). Bewegliche Ferientage und Brückentage einzelner Schulen sind NICHT enthalten. Einzelne Termine
  kannst du nachträglich löschen oder absagen. Erneutes Planen legt keine Doppelten an.
- Ferien-Standardwerte: Kultusministerium Baden-Württemberg (Stand November 2026, bis 2028). Bitte vor jeder Saison
  prüfen und unter "Ferien" anpassen.
- Spiele importieren (aus einer HTML-Liste): Spielplan auf basketball-bund.net öffnen, Tabelle markieren, kopieren,
  im Import-Fenster einfügen (Strg+V). Alternativ HTML-Quelltext einfügen oder eine .html-Datei wählen.
  Verein im Auswahlfeld wählen (Voreinstellung: Name mit "Cannstatt"), prüfen, importieren.
  Übernommen werden: beide Teams (Erstgenannt = Heim), Heim-/Auswärtsspiel, Datum, Uhrzeit, Spieltag, Link zum Spiel.
  Erneutes Importieren aktualisiert die Spiele (über die Spiel-Nummer), es entstehen keine Doppelten.
  Wichtig: Die Erkennung beruht auf Annahmen zum Aufbau der Seite. Prüfe die Vorschau vor dem Import und korrigiere
  Datum, Uhrzeit und Spieltag bei Bedarf direkt in der Vorschau.
- Spieler: Termin antippen > "Meine Anpassungen": ausblenden, eigene Uhrzeit, eigene Notiz. Das gilt nur für das eigene
  Konto und ändert den Vereinstermin nicht.

H) BEKANNTE GRENZEN
- Die Regeln wurden von Hand geprüft, aber nicht im Firebase-Emulator getestet. Teste nach dem Veröffentlichen
  mit einem Spieler- und einem Trainerkonto (Firebase-Konsole > Regeln > Regel-Playground hilft dabei).
- Bilder in Statistik-Einträgen werden verkleinert und im Dokument gespeichert; Firestore erlaubt ca. 1 MB pro Dokument.

I) GEAR-LISTE: VORSCHLÄGE, KATEGORIEN, REIHENFOLGE
- Beim ersten Start dieser Version werden die entfernten Einträge (Unterhemd, Unterhose, Shooting-Shirt,
  Trainingsjacke, Suspensorium, Stirnband, Sonstiges Zubehör, Mütze, Magnesium, Schlüssel, Geldbeutel, Kamera,
  Kameraausrüstung, Gelatine + Vitamin C) aus der Standardliste und aus allen kommenden Terminen gelöscht.
  Vergangene Listen bleiben unverändert. Das passiert automatisch und nur einmal pro Konto.
- Unter "+ Eintrag" stehen sie als Vorschläge zur Auswahl (mehrere gleichzeitig), dazu Sport-Tights,
  Privatschlüssel und Hallenschlüssel. Bereits vorhandene Einträge werden nicht noch einmal angeboten.
- Kategorien: Vorbereitung, Sportbekleidung, Freizeitbekleidung, Wertsachen, Nachbereitung, Accessoires, Nahrung.
  Eine Kategorie erscheint in der Liste nur, wenn sie Einträge enthält.
  Beim Hinzufügen gilt das Feld "Kategorie" für alle gewählten Vorschläge und den eigenen Eintrag.
  Steht es auf "Standard", bekommt jeder Vorschlag seine eigene Standardkategorie.
- Kategorien verwalten: "Bearbeiten" > "Kategorien verwalten". Dort umbenennen (Namen ändern, Enter),
  verschieben (▲ ▼), neue Kategorien hinzufügen und löschen (Einträge bleiben, ohne Kategorie).
  Im Bearbeiten-Modus verschieben ▲ ▼ an der Überschrift eine Kategorie samt allen Einträgen.
  Kategorien gelten für alle Listen (Spiel und Training) und werden mit dem Konto synchronisiert.
- Reihenfolge: "Bearbeiten" tippen, dann mit ▲ ▼ verschieben (innerhalb der Kategorie).
  "Als Standardliste speichern" übernimmt Reihenfolge und Kategorien für neue Listen.

J) AFTER-ACTION REVIEW: TRAINER- UND SPIELERVERSION
- Trainer sehen wie bisher das Team-Review mit Zeitstrahl, Vorbereitung und Regeln, dazu "Rückmeldungen".
- Spieler wählen einen Termin aus der Liste (von den Trainern angelegt) und schreiben "Mein Review":
  ohne Zeitstrahl, Vorbereitung und Regeln, mit Feldern "Für mich" und "Für die Mannschaft".
- "Zwischenspeichern" legt einen privaten Entwurf im eigenen Konto ab. "Abschicken" sendet an die Trainer,
  wahlweise nur die Teameinträge oder zusätzlich die persönlichen Einträge, mit Namen oder anonym.
  Danach sind "Erneut senden" und "Zurückziehen" möglich.
- Video-Link und Einträge unter "2. Was ist passiert" zählen zu den Teameinträgen.
- "Diese Verbesserung ins nächste Training oder Spiel übernehmen": Im nächsten Review erscheint oben
  "Aus früheren Terminen prüfen". Dort wählt der Spieler den früheren Termin. Angezeigt werden die eigene
  Verbesserung und die Teamverbesserung aus dem freigegebenen Team-Review der Trainer.
- Trainer: Unter "Rückmeldungen" stehen Team- und persönliche Einträge getrennt. "Übernehmen" fügt einen
  Punkt ins Team-Review ein. Ältere Abgaben im bisherigen Format bleiben lesbar.
- Die Firestore-Regeln müssen dafür nicht geändert werden.

K) KI-ZUSAMMENFASSUNG DER RÜCKMELDUNGEN (GEMINI ÜBER FIREBASE)
Einmalig einrichten:
1. Firebase-Konsole > Projekt > "AI Logic" (unter KI-Dienste) > "Jetzt starten".
2. Als Anbieter die "Gemini Developer API" wählen (kostenloses Kontingent). Den Schritten folgen.
3. Für das kostenlose Kontingent muss das Projekt im Spark-Tarif sein (kein verknüpftes Rechnungskonto).
4. Falls die Konsole dabei "App Check" erzwingt: entweder die Erzwingung für AI Logic ausschalten oder
   reCAPTCHA v3 für die Web-App einrichten und den Website-Schlüssel in config.js ergänzen:
     window.FIREBASE_APPCHECK_KEY = "DEIN_RECAPTCHA_V3_SCHLUESSEL";
Benutzen: Als Trainer einen Termin öffnen > "Rückmeldungen". Oben steht die Auswertung (Zahlen, ohne KI),
darunter "KI-Zusammenfassung" > "Zusammenfassen". Vorschläge mit "Übernehmen" ins Team-Review einfügen.
- Gesendet werden nur Teameinträge: ohne Namen, ohne persönliche Einträge, ohne Bilder.
- Die Texte gehen an Google. Im kostenlosen Kontingent darf Google sie nach meinem Stand zur Verbesserung
  seiner Produkte verwenden. Bitte die aktuellen Bedingungen prüfen und das Team informieren.
- Modellname: Feld "KI-Modell" (Standard gemini-3.5-flash-lite). Wenn Google ein Modell abschaltet,
  dort den aktuellen Namen aus der Firebase-Dokumentation eintragen. Gilt dann für alle Trainer.
- Das KI-Modul (Firebase 12.5.0) wird erst beim Klick geladen. Der Rest der App bleibt auf 10.12.2.

L) SPRACHE UND ZENTRALE TERMINE
- Die Sprache wird nur noch oben neben "Abmelden" umgestellt (DE/EN) und gilt für die ganze App.
- Gear-Liste und After-Action Review nutzen dieselben Termine aus dem Terminplan der Trainer.
  Kommende Team-Termine erscheinen automatisch in der Gear-Liste, befüllt aus der Standardliste.
  Verschiebt ein Trainer einen Termin, wandern Datum und Uhrzeit mit; Häkchen bleiben erhalten.
  Abgesagte oder vom Spieler ausgeblendete Termine verschwinden. Eine eigene Uhrzeit des Spielers wird übernommen.
- Team-Termine lassen sich in der Gear-Liste nicht löschen (nur im Terminplan der Trainer).
- Selbst angelegte Termine (+ Spiel, Trainings planen) sind privat und nur im eigenen Konto gespeichert.
- Melden sich mehrere Personen nacheinander auf demselben Gerät an, bekommt ein neues Konto eine frische
  Liste statt der Daten der vorherigen Person.

M) NAME UND GITHUB-PROJEKT
- App-Name: "TVC Blues Team-App" (Browser-Tab, Startseite, installierte App). Kurzname auf dem Homescreen: "TVC Blues".
- Die Adresse ist jetzt https://<dein-github-name>.github.io/TVC-Blues-Team-App/
  Alte Links und Lesezeichen auf den früheren Projektnamen leiten bei GitHub Pages NICHT weiter.
- Wer die App auf dem Handy installiert hat: bitte einmal unter der neuen Adresse öffnen und neu installieren.
- Firebase: Die Domain (<dein-github-name>.github.io) bleibt gleich, unter Authentication > Settings >
  Authorized domains ist nichts zu ändern. Konten und Daten bleiben erhalten.

N. Gear-Checkliste: editierbare Überschrift
   Über der Liste steht im AAR-Stil "Spiel · Sa., 14.11.2026 · Gegner" bzw. "Training · Di., 17.11.2026 · Titel".
   Antippen (✎) öffnet Datum/Notiz zum Bearbeiten. Änderungen betreffen nur die eigene Liste, nicht den zentralen Termin.

O. Anmeldung
   Angemeldet wird ausschließlich mit E-Mail-Adresse und Passwort. Der Benutzername ist nur Anzeigename.
   (Login per Benutzername ist ohne Server nicht möglich, ohne E-Mails öffentlich abrufbar zu machen.)

P. Passwortlänge
   Neue Passwörter brauchen mindestens 8 Zeichen (Prüfung in der App bei der Registrierung).
   Bestehende kürzere Passwörter funktionieren weiter. Für eine serverseitige Durchsetzung in der
   Firebase-Konsole unter Authentication → Einstellungen die Passwortrichtlinie aktivieren (Mindestlänge 8).

Q. Textfelder auf dem Smartphone
   Textboxen wachsen beim Schreiben mit (max. 60 % der Bildschirmhöhe, danach scrollbar) und schrumpfen wieder.
   Schrift 16 px (kein automatisches Hineinzoomen auf dem iPhone), größere Tippflächen (mind. 48 px).
   Passende Tastatur: E-Mail-Tastatur beim Login, Großschreibung am Satzanfang und Rechtschreibprüfung in Textboxen.
   Das aktive Feld wird beim Tippen über die Tastatur geschoben. Ab 80 % des Zeichenlimits erscheint ein Zähler.
   Login: Enter springt ins nächste Feld, erst im letzten Feld wird angemeldet bzw. registriert.

R. AAR: Video zentral, Rückmeldungen, Export, Zusammenfassung
   Video: Den YouTube-Link pro Spiel legen nur die Trainer fest (im Team-Review oder unter Termine → Termin bearbeiten).
     Er gilt für alle; Spieler sehen „Spiel-Video öffnen“ und tragen unter „2. Was ist passiert“ nur Zeitpunkte
     oder eigene Links zu einzelnen Stellen ein.
   Team-Review: eine Version pro Spiel/Training, nur Trainer bearbeiten. Mein Review: jede/r Spieler/in einzeln.
   Rückmeldungen (Trainer): oben das gespeicherte Team-Review, dann Auswertung, Gemini, Export und die Spielerreviews.
   Export für externe KI: Kopieren, als .txt herunterladen oder teilen. Ohne Namen und Bilder; persönliche Einträge
     nur per Häkchen. Die Antwort der KI unter „Zusammenfassung“ einfügen.
   Zusammenfassung (neuer Reiter, Trainer bearbeiten, Spieler lesen nach Freigabe): Kurzfassung (max. 500 Zeichen, kopierbar) und ausführliche Fassung.
     Füllbar per Gemini oder per eingefügter Antwort einer externen KI, alle Felder anpassbar.
   Sichtbarkeit: „Entwurf (nur Trainer)“ oder „Für alle Spieler freigeben“. Spieler sehen sie dann im selben Reiter, nur lesend.
   WICHTIG: firestore.rules neu veröffentlichen (Sammlung „aarsum“: Trainer schreiben, alle lesen nach Freigabe).

S. AAR-Terminübersicht in zwei Spalten
   Links „Kommende Termine“, rechts „Vergangene Termine“, jeweils mit Anzahl – auf allen Bildschirmen.
   Auf Smartphones kompakt: kurzes Datum (Sa., 14.11.26), kleines Typ-Etikett, Titel darunter, Überschriften „Kommend“/„Vergangen“.

T. Übungen im Team-Review (1. Gesetzter Fokus)
   Trainer tragen unter 1. beliebig viele Übungen ein: Name, Beschreibung, YouTube-Link (optional) und bis zu 4 Bilder
   (werden automatisch verkleinert). Reihenfolge per ↑/↓ änderbar. Gespeichert wird mit „Speichern“ im Team-Review.
   Spieler sehen die Übungen sofort (auch vor Freigabe des Team-Reviews) in „Mein Review“ unter 1.
   bei „Was wollte das Team erreichen?“ – nur lesend. Auch im freigegebenen Team-Review und in den Rückmeldungen sichtbar.
   Neue Sammlung „aarex“: alle Angemeldeten lesen, nur Trainer schreiben → firestore.rules neu veröffentlichen.
   AAR-Übersicht: Trainings ohne Titel zeigen keinen Platzhalter „(ohne Titel)“ mehr.

U. Mobile Bedienbarkeit (nach UI-Muster-Prüfung)
   Zurück-Taste/-Geste des Browsers bzw. Android: führt eine Ebene zurück (AAR-Termin → Liste → Start,
     Gear-Sheet schließen, Gear-Terminübersicht → Liste, Termin-Detail → Terminliste) statt die App zu verlassen.
     Ungespeicherte Eingaben in „Mein Review“ und „Zusammenfassung“ werden dabei gesichert.
   Tippflächen mind. 44 × 44 px (Kopfzeile, DE/EN, Reiter, Filter, −/+, kleine Knöpfe).
   Kontraste nach WCAG AA (≥ 4,5:1) in Hell- und Dunkelmodus: Etiketten, aktive Reiter/Filter, Minutenleiste.
   „Bewegung reduzieren“ (Systemeinstellung) schaltet Übergänge und weiches Scrollen ab;
     der Fortschrittsbalken animiert per transform statt width.
   Sheets nutzen 92dvh und scrollen die Seite dahinter nicht mit (overscroll-behavior: contain).

V. Bereichsfotos und neuer Name „Ausrüstungsliste“
   Die Gear-Checkliste heißt auf Deutsch jetzt „Ausrüstungsliste“ (englisch weiter „Gear checklist“); die Icons bleiben.
   Jeder Bereich hat ein eigenes Foto (Ordner img/ – bitte mit hochladen):
     After-Action Review = Plätze von oben (img/aar.jpg), Termine = Korb im Abendlicht (img/termine.jpg),
     Ausrüstungsliste = Ball auf dem Hartplatz (img/ausruestung.jpg), Benutzerverwaltung = blauer Hallenboden (img/benutzer.jpg).
   Heller Modus: Foto im Kopfbereich unter einem blauen Verlauf. Dunkler Modus: Foto als stark abgedunkelter Seitenhintergrund,
     Karten und Listen bleiben auf festen Flächen. Die Startseite zeigt die Bereiche als 2×2-Bildkacheln.
   Fotos: Unsplash (freie Lizenz). Ein Foto tauschen = gleichnamige Datei in img/ ersetzen (ca. 900–1000 px, JPEG).

W. Anmeldung mit Foto und Fotos als Akzent
   Anmeldung: Vollbild-Foto (Korb im Gegenlicht, blau eingefärbt, img/anmeldung.jpg), das Anmeldefeld liegt auf einer festen Fläche.
   Ausrüstungsliste: Ist alles abgehakt, erscheint „Alles drin – x von x gepackt“ mit Foto (img/alles-drin.jpg)
     und „Viel Erfolg!“ (Spiel) bzw. „Gutes Training!“ (Training).
   Leere Zustände (keine Termine im AAR, keine Übungen) zeigen ein kleines rundes Bild (img/leer.jpg).
