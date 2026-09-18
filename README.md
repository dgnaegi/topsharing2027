# Berner & Wyss 2027

Website zur Kandidatur von Melanie Berner und Nicole Wyss für den Regierungsrat des Kantons
Zürich, Wahlen 2027. React + Vite Frontend, Node.js/Express Backend, deployed auf Scalingo.

Kein Login, keine Datenbank. Das Formular „Zitat einreichen" schickt Vor- und Nachname, Zitat
und optionales Foto per E-Mail an `daniel@gnaegi.me`.

---

## Domain anpassen

Sobald die echte Domain feststeht: `frontend/site.config.json` anpassen. Das reicht, `index.html`,
`robots.txt` und `sitemap.xml` übernehmen den Wert automatisch. Für die Absenderadresse der Mails
`MAIL_FROM` in `backend/.env` setzen.

---

## Mac Setup (erstmalig)

### 1. Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Node.js

```bash
brew install node
node --version   # sollte >= 20 sein
```

### 3. Scalingo CLI (für Deployments)

```bash
brew install scalingo/stable/scalingo
scalingo login
```

---

## Brevo (Mailversand)

1. Konto auf brevo.com erstellen (Gratis-Tarif: 300 Mails/Tag)
2. Settings → SMTP & API → SMTP → neuen SMTP-Key generieren
3. Auf Scalingo setzen:

```bash
scalingo --region osc-fr1 --app berner-wyss2027 env-set \
  BREVO_SMTP_USER=your@email.com \
  BREVO_SMTP_KEY=xsmtp-xxxx
```

---

## Lokal starten

```bash
# 1. Backend
cd backend
cp .env.example .env
# .env: BREVO_SMTP_USER und BREVO_SMTP_KEY eintragen
npm install
npm run dev              # → http://localhost:3001

# 2. Frontend (neuer Terminal-Tab)
cd frontend
npm install
npm run dev              # → http://localhost:5173
```

---

## Deploy auf Scalingo

Region: `osc-fr1`, App-Name: `berner-wyss2027`, Git-Remote: `scalingo`

```bash
git subtree push --prefix backend scalingo main
git subtree push --prefix frontend scalingo main
```

---

## Nützliche Befehle

| Befehl | Was es macht |
|---|---|
| `npm run lint` | Lint-Fehler prüfen |
| `npm run lint:fix` | Lint-Fehler automatisch beheben |
| `npm run format` | Code mit Prettier formatieren |

## Dokumentation

| Datei | Zweck |
|---|---|
| [docs/DESIGN.md](docs/DESIGN.md) | Farben, Typografie, Komponenten-Styles |
| [docs/SEO.md](docs/SEO.md) | Meta-Tags, Keywords, strukturierte Daten |
| [docs/SECURITY.md](docs/SECURITY.md) | Checkliste für Security-Reviews |
| [docs/MICROCOPY.md](docs/MICROCOPY.md) | Tonalität und Textregeln |
| [docs/MARKDOWN_GUIDELINES.md](docs/MARKDOWN_GUIDELINES.md) | Regeln für alle MD-Dateien |
