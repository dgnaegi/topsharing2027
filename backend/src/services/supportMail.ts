const SITE_URL = process.env.SITE_URL || 'https://zusammen-mehr.ch'

export interface SupportMailInput {
  firstName: string
  lastName: string
  email: string
  kinds: string
  publicSupport: boolean
  role?: string
  quote?: string
  photoFilename?: string
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function slugify(...parts: string[]): string {
  return parts
    .join(' ')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const block = (text: string) =>
  `<pre style="white-space:pre-wrap;font-family:inherit;background:#f2f2f2;padding:12px">${escapeHtml(text)}</pre>`

function claudePrompt(d: SupportMailInput): string {
  return [
    '/unterstuetzer-hinzufuegen',
    `Name: ${d.firstName} ${d.lastName}`,
    `Funktion: ${d.role || 'keine'}`,
    `Zitat: ${d.quote ?? ''}`,
    `Foto: ${d.photoFilename ? `~/Downloads/${d.photoFilename}` : 'keines eingereicht'}`,
  ].join('\n')
}

function replyText(d: SupportMailInput): string {
  return [
    `Hallo ${d.firstName}`,
    '',
    'Danke, dass du Melanie und Nicole unterstützt. Ich betreue die Website zur Kandidatur und habe dein Zitat aufgeschaltet:',
    `${SITE_URL}/#stimmen`,
    '',
    'Wenn du etwas ändern möchtest oder Fragen hast, antworte einfach auf diese Mail.',
    '',
    'Liebe Grüsse',
    'Daniel',
  ].join('\n')
}

export function buildSupportMailHtml(d: SupportMailInput): string {
  const data = `
    <p><strong>Name:</strong> ${escapeHtml(d.firstName)} ${escapeHtml(d.lastName)}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(d.email)}</p>
    <p><strong>Art:</strong> ${d.kinds}</p>`

  if (!d.publicSupport) return data

  const reply = replyText(d)
  const mailto = `mailto:${d.email}?subject=${encodeURIComponent('Dein Zitat für Melanie und Nicole')}&body=${encodeURIComponent(reply)}`

  return `${data}
    <p><strong>Funktion:</strong> ${d.role ? escapeHtml(d.role) : 'keine'}</p>
    <p><strong>Zitat:</strong> ${escapeHtml(d.quote ?? '').replace(/\n/g, '<br>')}</p>
    <p>${d.photoFilename ? `Foto im Anhang: ${escapeHtml(d.photoFilename)}` : 'Kein Foto eingereicht.'}</p>
    <hr>
    <h3>Für Claude Code</h3>
    <p>Foto in den Download-Ordner speichern, dann diesen Text im Projekt einfügen:</p>
    ${block(claudePrompt(d))}
    <hr>
    <h3>Antwort an ${escapeHtml(d.firstName)}</h3>
    <p><a href="${escapeHtml(mailto)}">Antwort als neue Mail öffnen</a></p>
    ${block(reply)}`
}
