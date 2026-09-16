# SEO

Suchmaschinenoptimierung für die Kandidatur von Melanie Berner und Nicole Wyss.

## Zielkeywords

Priorität von oben nach unten. Jedes Keyword muss natürlich im Fliesstext vorkommen, nicht nur in Meta-Tags.

| Keyword | Wo verwenden |
|---|---|
| Regierungsratswahl Zürich 2027 | Titel, H1, erster Absatz |
| Kandidierende Regierungsrat | H1, Meta-Description |
| Melanie Berner | Überall, wo sie erwähnt wird (voller Name, nicht nur „Melanie") |
| Nicole Wyss | Überall, wo sie erwähnt wird (voller Name, nicht nur „Nicole") |
| Regierungsrat Kandidatinnen Zürich | H2, Meta-Description |
| Regierungsratswahlen Kanton Zürich | Fliesstext, Impressum/About |

Namen und Jahr (2027) immer zusammen mit „Regierungsrat" oder „Regierungsratswahl" nennen, nie isoliert. Das ist die Suchintention der Zielgruppe.

## Seitentitel & Description

| Seite | Title | Description (max. 155 Zeichen) |
|---|---|---|
| Startseite | `Melanie Berner & Nicole Wyss: Kandidierende für den Regierungsrat Zürich 2027` | `Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich. Erfahre mehr und unterstütze die Kandidatur.` |
| Datenschutz | `Datenschutzerklärung: Berner & Wyss 2027` | `Datenschutzerklärung zur Kandidatur von Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027.` |
| Impressum | `Impressum: Berner & Wyss 2027` | `Impressum der Kandidatur von Melanie Berner und Nicole Wyss für die Regierungsratswahl Zürich 2027.` |

## HTML-Head (jede Seite)

```html
<html lang="de-CH">
<title>Melanie Berner & Nicole Wyss: Kandidierende für den Regierungsrat Zürich 2027</title>
<meta name="description" content="Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich. Erfahre mehr und unterstütze die Kandidatur." />
<meta name="keywords" content="Regierungsratswahl Zürich 2027, Kandidierende Regierungsrat, Melanie Berner, Nicole Wyss, Regierungsrat Kandidatinnen Zürich" />
<link rel="canonical" href="https://berner-wyss2027.ch/" />

<meta property="og:type" content="website" />
<meta property="og:title" content="Melanie Berner & Nicole Wyss: Regierungsratswahl Zürich 2027" />
<meta property="og:description" content="Kandidierende für den Regierungsrat des Kantons Zürich, Wahlen 2027." />
<meta property="og:image" content="https://berner-wyss2027.ch/og-image.jpg" />
<meta property="og:locale" content="de_CH" />

<meta name="twitter:card" content="summary_large_image" />
```

> Platzhalter-Domain `berner-wyss2027.ch` ersetzen, sobald die echte Domain feststeht. Betrifft `frontend/index.html`, `frontend/public/robots.txt`, `frontend/public/sitemap.xml` und `frontend/public/llms.txt`.

## Strukturierte Daten (JSON-LD)

Zwei `Person`-Einträge plus `WebSite`, eingebettet in `frontend/index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Melanie Berner & Nicole Wyss: Regierungsratswahl Zürich 2027",
  "url": "https://berner-wyss2027.ch",
  "inLanguage": "de-CH"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Melanie Berner",
  "jobTitle": "Kandidierende für den Regierungsrat des Kantons Zürich",
  "url": "https://berner-wyss2027.ch"
}
```

Gleiches Schema für Nicole Wyss.

## Semantisches HTML

- Ein `<h1>` pro Seite, danach `<h2>` für Abschnitte (Video, Anliegen, Unterstützende, Zitat einreichen).
- `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>` statt `<div>` überall dort, wo es strukturell stimmt.
- Bilder brauchen beschreibenden `alt`-Text mit Namen, z.B. `alt="Melanie Berner und Nicole Wyss"`, nicht `alt="Bild"`.

## KI-Crawler (GEO)

`frontend/public/llms.txt` hält eine knappe, faktische Zusammenfassung der Kandidatur für LLM-Crawler bereit, analog zu `robots.txt`, aber für Sprachmodelle. `robots.txt` erlaubt Google, Bing sowie GPTBot, ClaudeBot und PerplexityBot explizit.

## Core Web Vitals

- Bilder mit `width`/`height`, damit kein Layout-Sprung entsteht.
- Bilder unterhalb des ersten Viewports mit `loading="lazy"`.
- Schriften mit `font-display: swap`.
- Kein render-blockierendes Skript im `<head>`.
