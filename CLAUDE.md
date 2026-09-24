# Berner & Wyss 2027: CLAUDE.md

## Project Overview

Website zur Regierungsratskandidatur von Melanie Berner und Nicole Wyss (Kanton Zürich, Wahlen
2027). React/TypeScript-Frontend, Node.js/Express/TypeScript-Backend, deployed auf Scalingo.

Kein Login, keine Datenbank, kein S3. Das Formular „Unterstützen" (Kampagne mitmachen und/oder öffentlich unterstützen) schickt die Eingaben
(inkl. Foto als Mail-Anhang) direkt per E-Mail an `daniel@gnaegi.me`.

## Stack

| Layer | Technologie | Hinweis |
|---|---|---|
| Frontend | React 18 + TypeScript + Vite | styled-components v6 |
| Backend | Node.js + Express + TypeScript | Ein Endpunkt: `POST /api/v1/support` |
| Mail | Nodemailer + Brevo SMTP | Kein DB-Speicher, jede Einreichung ist eine E-Mail |
| Hosting | Scalingo | PaaS, europäisches Hosting |

## Repository-Struktur

```
berner-wyss2027/
├── backend/
│   ├── src/
│   │   ├── index.ts              # Express-Entry-Point
│   │   ├── errors.ts
│   │   ├── middleware/{validate,errorHandler}.ts
│   │   ├── routes/support.ts     # Formular-Endpunkt
│   │   └── services/mail.ts
│   ├── .env.example
│   ├── Procfile
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── main.tsx, App.tsx, theme.ts, GlobalStyle.ts, styled.d.ts
│   │   ├── components/           # Foo.tsx + Foo.styled.ts (Bänder: Hero, Team, Support, Donate)
│   │   ├── fonts.css             # @font-face + Lineto-Disclaimer (nicht entfernen)
│   │   ├── data/supporters.ts    # Platzhalter-Unterstützende (manuell gepflegt)
│   │   ├── routes/               # HomePage, PrivacyPage, ImpressumPage
│   │   ├── api/{client,endpoints}.ts
│   │   └── hooks/usePageMeta.ts
│   ├── webfonts/                 # Ruder Plakat (Lizenz: nur al-zh.ch, siehe docs/DESIGN.md)
│   ├── public/{robots.txt,sitemap.xml,llms.txt}
│   └── index.html
├── docs/{DESIGN,SEO,SECURITY,MICROCOPY,MARKDOWN_GUIDELINES}.md
├── LICENSE                       # WTFPL
└── README.md
```

## Lokal starten

```bash
cd backend && cp .env.example .env && npm install && npm run dev   # :3001
cd frontend && npm install && npm run dev                          # :5173
```

## Scalingo-Deployment

```bash
git subtree push --prefix backend scalingo main
git subtree push --prefix frontend scalingo main
```

## Scalingo-Konfiguration

App: `topsharing`, Region `osc-fr1` (einzige Region des Kontos). Env-Vars werden nur auf Scalingo
gesetzt, nie im Repo. Der Brevo-Key gehört nicht in diese Datei (sie ist eingecheckt).

```bash
scalingo --region osc-fr1 --app topsharing env-set \
  BREVO_SMTP_USER='daniel.gnaegi@outlook.com' \
  BREVO_SMTP_KEY='<SMTP-Key aus Brevo: Settings > SMTP & API>' \
  MAIL_FROM='"Berner & Wyss 2027" <noreply@wyss-berner.ch>'
```

Vor dem Setzen mit `scalingo --region osc-fr1 --app topsharing env` prüfen, ob die Variablen dort
schon belegt sind. `env-set` startet die App neu.

## Konventionen

- API-Routen unter `/api/v1/`. Strict TypeScript, kein `any`.
- **Max. 150 Zeilen pro Datei.** Wächst eine Datei darüber hinaus, wird sie gesplittet.
- **Ein Component pro Datei.** Styling immer in `Foo.styled.ts`, nie inline im Component-File.
- Theme-Tokens ausschliesslich in `frontend/src/theme.ts`. Kein inline `style={{}}` für Dinge,
  die das Theme abdeckt.
- Vor jedem Commit: `npm run lint` und `npm run format` in `frontend/` und `backend/`.

## Texte & Design

- Jeder UI-Text, jede Fehlermeldung, jedes Formularlabel folgt **[docs/MICROCOPY.md](docs/MICROCOPY.md)**.
  Insbesondere: keine Gedankenstriche, nichts, das nach KI-generiertem Text klingt.
- Farben, Typografie und Komponenten-Styles: **[docs/DESIGN.md](docs/DESIGN.md)**.
- SEO-Keywords und Meta-Tag-Vorlagen: **[docs/SEO.md](docs/SEO.md)**.
- Security-Checkliste für Reviews: **[docs/SECURITY.md](docs/SECURITY.md)**.
- Accessibility-Checkliste für Reviews: **[docs/A11Y.md](docs/A11Y.md)**.
- Regeln für neue MD-Dateien: **[docs/MARKDOWN_GUIDELINES.md](docs/MARKDOWN_GUIDELINES.md)**.

## Domain

Zentral in `frontend/site.config.json` (`siteUrl`). Speist `index.html` (`__SITE_URL__`-Token,
ersetzt via Vite-Plugin in `vite.config.ts`) sowie `robots.txt`/`sitemap.xml` (generiert von
`frontend/scripts/generate-public-seo.mjs`, läuft automatisch vor `dev` und `build`). Override
ohne Code-Änderung: Env-Var `VITE_SITE_URL`. Mail-Absenderadresse separat via `MAIL_FROM` in
`backend/.env`.

## Unterstützende pflegen

Die Liste (`SupportersSection`) ist vorerst nicht auf der Startseite eingebunden. Es gibt keine Datenbank. Neue Unterstützungs-Zitate kommen als E-Mail an `daniel@gnaegi.me`.
Nach Prüfung werden sie manuell in `frontend/src/data/supporters.ts` ergänzt.
