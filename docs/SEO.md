# SEO

Suchmaschinenoptimierung für die Kandidatur von Melanie Berner und Nicole Wyss.

## Zielkeywords

Priorität von oben nach unten. Jedes Keyword muss natürlich im Fliesstext vorkommen, nicht nur in Meta-Tags.

| Keyword | Wo verwenden |
|---|---|
| zusammen mehr | Kampagnenname und Domain. Title, H1 (Slogan), `og:site_name`, JSON-LD (`WebSite.name`) |
| Regierungsratswahl Zürich 2027 | Titel, Eckenmetadaten (Hero), erster Absatz |
| Kandidierende Regierungsrat | H1 (Claim „in den Regierungsrat"), Meta-Description |
| Melanie Berner | Title, H1, JSON-LD `Person`. Überall, wo sie erwähnt wird (voller Name, nicht nur „Melanie") |
| Nicole Wyss | Title, H1, JSON-LD `Person`. Überall, wo sie erwähnt wird (voller Name, nicht nur „Nicole") |
| Regierungsrat Kandidatinnen Zürich | H2, Meta-Description |
| Regierungsratswahlen Kanton Zürich | Fliesstext, Impressum/About |
| Zürcher Regierungsrat, Regierungsrat Kanton Zürich | H2 (visuell versteckter Zusatz), Fliesstext |
| Top-Sharing, Jobsharing Regierungsrat | Kandidaturtext. „Jobsharing" ist der Begriff der Medien |
| AL Regierungsrat Zürich, Alternative Linke | JSON-LD, llms.txt |

## Abschnittsüberschriften

Die sichtbaren H2 sind ein Wort („spenden", „über uns"). Jede H2 trägt deshalb einen
`VisuallyHidden`-Zusatz mit Keyword, z.B. „spenden für den Wahlkampf zur Regierungsratswahl
Zürich 2027". Der Zusatz muss für Screenreader sinnvoll lesbar bleiben, keine Keyword-Listen.

Namen und Jahr (2027) immer zusammen mit „Regierungsrat" oder „Regierungsratswahl" nennen, nie isoliert. Das ist die Suchintention der Zielgruppe.

## Seitentitel & Description

| Seite | Title | Description (max. 155 Zeichen) |
|---|---|---|
| Startseite | `Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027` | `zusammen mehr: Melanie Berner und Nicole Wyss (AL) kandidieren gemeinsam im Top-Sharing für den Regierungsrat Zürich 2027. Unterstütze die Kandidatur.` |
| Datenschutz | `Datenschutzerklärung: Berner & Wyss 2027` | `Datenschutzerklärung zur Kandidatur von Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027.` |
| Impressum | `Impressum: Berner & Wyss 2027` | `Impressum der Kandidatur von Melanie Berner und Nicole Wyss für die Regierungsratswahl Zürich 2027.` |

## HTML-Head (jede Seite)

```html
<html lang="de-CH">
<title>Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027</title>
<meta name="description" content="zusammen mehr: Melanie Berner und Nicole Wyss (AL) kandidieren gemeinsam im Top-Sharing für den Regierungsrat Zürich 2027. Unterstütze die Kandidatur." />
<meta name="keywords" content="Regierungsratswahl Zürich 2027, Kandidierende Regierungsrat, Melanie Berner, Nicole Wyss, Regierungsrat Kandidatinnen Zürich" />
<link rel="canonical" href="https://zusammen-mehr.ch/" />

<meta property="og:type" content="website" />
<meta property="og:title" content="Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027" />
<meta property="og:description" content="Kandidierende für den Regierungsrat des Kantons Zürich, Wahlen 2027." />
<meta property="og:image" content="https://zusammen-mehr.ch/og-zusammen-mehr.jpg" />
<meta property="og:locale" content="de_CH" />

<meta name="twitter:card" content="summary_large_image" />
```

> Die Domain ist zentral konfiguriert: `frontend/site.config.json` anpassen, fertig. Daraus
> speisen sich `index.html` (via `__SITE_URL__`-Platzhalter) sowie `robots.txt` und
> `sitemap.xml` (generiert von `frontend/scripts/generate-public-seo.mjs`, läuft automatisch vor
> `dev` und `build`). Alternativ per Env-Var `VITE_SITE_URL` überschreiben, ohne die Datei
> anzufassen, z.B. auf Scalingo. Die Absenderadresse der Mails liegt separat in
> `backend/.env` als `MAIL_FROM`.

## Strukturierte Daten (JSON-LD)

Ein `@graph` in `frontend/index.html`, verknüpft über `@id`:

- `WebSite` mit `name: "zusammen mehr"` und `alternateName`. Damit kann Google den Kampagnennamen
  als Site-Namen im Suchergebnis anzeigen.
- `Organization` (die Kampagne) mit `sameAs` auf Instagram und `member` auf beide Personen.
- Je ein `Person` für Melanie Berner und Nicole Wyss mit `jobTitle` (Kantonsrätin bzw.
  Alt-Kantonsrätin AL), `affiliation` (Alternative Linke Zürich) und `colleague`.

Kommen neue Profile dazu (Kantonsrat, Wikipedia, eigene Social-Media-Konten), gehören sie als
`sameAs` an die jeweilige `Person`. Das ist der stärkste Hebel, damit Google die Seite den
Namen zuordnet.

## Statischer Crawler-Inhalt

`index.html` enthält im `#root` eine statische Fassung von H1, Kandidaturtext und Abschnitten.
Wird Text in einer Section-Komponente, `candidates.ts`, oder `articles.ts` geändert, die statische Fassung nachziehen. KI-Crawler (GPTBot, ClaudeBot, PerplexityBot) führen kein JavaScript aus und sehen nur diese Fassung.

## Ausserhalb des Codes

- Google Search Console: Domain verifizieren, `sitemap.xml` einreichen, Startseite zur
  Indexierung anfragen.
- Backlinks mit den Namen als Linktext: AL-Website, Kantonsrats-Profile, Instagram-Bio,
  Medienberichte. Ohne solche Links rankt eine neue Domain für Personennamen kaum.

## Semantisches HTML

- Ein `<h1>` pro Seite, danach `<h2>` für Abschnitte (Kandidatur, Unterstützen, Spenden).
- `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>` statt `<div>` überall dort, wo es strukturell stimmt.
- Bilder brauchen beschreibenden `alt`-Text mit Namen, z.B. `alt="Melanie Berner und Nicole Wyss"`, nicht `alt="Bild"`.

## KI-Crawler (GEO)

`frontend/public/llms.txt` hält eine knappe, faktische Zusammenfassung der Kandidatur für LLM-Crawler bereit, analog zu `robots.txt`, aber für Sprachmodelle. `robots.txt` erlaubt Google, Bing sowie GPTBot, ClaudeBot und PerplexityBot explizit.

## Core Web Vitals

- Bilder mit `width`/`height`, damit kein Layout-Sprung entsteht.
- Bilder unterhalb des ersten Viewports mit `loading="lazy"`.
- Schriften mit `font-display: swap`.
- Kein render-blockierendes Skript im `<head>`.
