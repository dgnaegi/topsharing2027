# Security

Checkliste für Security-Reviews dieses Projekts.

## Threat-Modell

- Statische React-Seite plus ein einziger öffentlicher API-Endpunkt (`POST /api/v1/support`), der Formulardaten per E-Mail an `daniel@gnaegi.me` weiterleitet.
- Kein Login, keine Datenbank, keine gespeicherten Nutzerdaten. Der Endpunkt ist der gesamte Angriffsvektor.
- Öffentlich erreichbar, anonyme Nutzung, keine Authentifizierung nötig oder vorgesehen.

## Formular-Endpunkt

- [ ] Body wird mit Zod validiert (Länge, Typ, Pflichtfelder), bevor irgendetwas verarbeitet wird
- [ ] Bild kommt als Data-URL, wird auf erlaubten MIME-Typ (`jpeg`, `png`, `webp`) und Maximalgrösse (2 MB) geprüft, bevor es als Anhang verschickt wird
- [ ] Text aus dem Formular wird vor dem Einsetzen ins E-Mail-HTML escaped (`escapeHtml`), nie roh interpoliert
- [ ] Rate-Limit auf dem Endpunkt (`express-rate-limit`), damit das Formular nicht für Mail-Spam missbraucht werden kann
- [ ] `express.json({ limit })` begrenzt die Body-Grösse serverseitig zusätzlich zur Bildgrössen-Prüfung

## Secrets & Konfiguration

- [ ] SMTP-Zugangsdaten (`BREVO_SMTP_USER`, `BREVO_SMTP_KEY`) nur über `process.env`, nie hartkodiert
- [ ] `.env` ist in `.gitignore`, nie committen
- [ ] Empfänger-Adresse (`daniel@gnaegi.me`) ist serverseitig fest hinterlegt, kommt nie aus Nutzereingaben

## Transport & Header

- [ ] `helmet` aktiv mit restriktiver CSP (`default-src 'self'`)
- [ ] Kein CORS-Wildcard nötig, da Frontend und API same-origin ausgeliefert werden
- [ ] Fehlermeldungen an den Client sind generisch, keine Stacktraces oder interne Details

## Frontend

- [ ] Kein `dangerouslySetInnerHTML`
- [ ] Keine Secrets im Vite-Bundle, nur `VITE_`-Variablen ohne sensiblen Inhalt
- [ ] Externe Links mit `rel="noopener noreferrer"`

## Wartung

- [ ] `npm audit --omit=dev` regelmässig prüfen, vor jedem Deploy sauber
- [ ] Abhängigkeiten aktuell halten, insbesondere `express`, `nodemailer`, `helmet`
