# Guideline für MD-Dateien

Regeln für alle Dokumente in `docs/`.

## Grundsatz

So kurz wie möglich. Ein Dokument ist fertig, wenn nichts mehr weggelassen werden kann, nicht wenn nichts mehr hinzugefügt werden könnte.

## Struktur

- Ein `#`-Titel, danach `##`-Abschnitte. Keine tiefere Verschachtelung als `###`.
- Tabellen statt Fliesstext, wo ein Vergleich möglich ist (✓ / ✗, Regel / Beispiel).
- Codeblöcke nur für Code, Tokens oder Konfiguration, nicht für Prosa.
- Kein Inhaltsverzeichnis. Bei unter 300 Zeilen braucht es keins.

## Sprache

- Deutsch, Du-Form, wie in [MICROCOPY.md](./MICROCOPY.md) beschrieben.
- Keine Gedankenstriche (–, —) im Fliesstext. Punkt oder Komma statt Einschub.
- Keine Füllwörter: „einfach", „lediglich", „im Grunde", „quasi".
- Aktiv statt Passiv.

## Pflege

- Jede MD-Datei hat genau einen Zweck. Neue Themen bekommen eine neue Datei statt einen neuen Abschnitt in einer bestehenden.
- Veraltete Abschnitte werden gelöscht, nicht auskommentiert oder als „(deprecated)" markiert.
- Beispiele und Codeblöcke müssen zum aktuellen Stand des Codes passen, sonst raus damit.

## Vorhandene Dokumente

| Datei | Zweck |
|---|---|
| [DESIGN.md](./DESIGN.md) | Farben, Typografie, Komponenten-Styles |
| [SEO.md](./SEO.md) | Meta-Tags, Keywords, strukturierte Daten |
| [SECURITY.md](./SECURITY.md) | Checkliste für Security-Reviews |
| [MICROCOPY.md](./MICROCOPY.md) | Tonalität und Textregeln für alle UI-Texte |
