# Berner & Wyss 2027: CLAUDE.md

## Project Overview

Website zur Regierungsratskandidatur von Melanie Berner und Nicole Wyss (Kanton Zürich, Wahlen
2027). React/TypeScript-Frontend, Node.js/Express/TypeScript-Backend, deployed auf Scalingo.

Kein Login, keine Datenbank, kein S3. Das Formular „Zitat einreichen" schickt die Eingaben
(inkl. Foto als Mail-Anhang) direkt per E-Mail an `daniel@gnaegi.me`.

## Stack

| Layer | Technologie | Hinweis |
|---|---|---|
| Frontend | React 18 + TypeScript + Vite | styled-components v6 |
| Backend | Node.js + Express + TypeScript | Ein Endpunkt: `POST /api/v1/testimonials` |
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
│   │   ├── routes/testimonials.ts # Formular-Endpunkt
│   │   └── services/mail.ts
│   ├── .env.example
│   ├── Procfile
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── main.tsx, App.tsx, theme.ts, GlobalStyle.ts, styled.d.ts
│   │   ├── components/           # Foo.tsx + Foo.styled.ts
│   │   ├── data/supporters.ts    # Platzhalter-Unterstützende (manuell gepflegt)
│   │   ├── routes/               # HomePage, PrivacyPage, ImpressumPage
│   │   ├── api/{client,endpoints}.ts
│   │   └── hooks/usePageMeta.ts
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
- Regeln für neue MD-Dateien: **[docs/MARKDOWN_GUIDELINES.md](docs/MARKDOWN_GUIDELINES.md)**.

## Unterstützende pflegen

Es gibt keine Datenbank. Neue Unterstützungs-Zitate kommen als E-Mail an `daniel@gnaegi.me`.
Nach Prüfung werden sie manuell in `frontend/src/data/supporters.ts` ergänzt.
