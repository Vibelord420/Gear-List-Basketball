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
