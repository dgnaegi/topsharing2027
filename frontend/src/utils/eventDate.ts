/** Datumsteile für die Terminliste auf Deutsch (Schweiz). Die Zeit erscheint so, wie sie in events.ts steht. */
const day = new Intl.DateTimeFormat('de-CH', { day: 'numeric' })
const month = new Intl.DateTimeFormat('de-CH', { month: 'short' })
const full = new Intl.DateTimeFormat('de-CH', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
const time = new Intl.DateTimeFormat('de-CH', { hour: '2-digit', minute: '2-digit' })

export function eventDateParts(start: string) {
  const d = new Date(start)
  return {
    day: day.format(d),
    month: month.format(d).replace('.', ''),
    /** z. B. „Mittwoch, 2. Dezember 2026, 19:30“ */
    long: `${full.format(d)}, ${time.format(d)}`,
  }
}

/** Ein Termin gilt bis Ende des Tages als aktuell, nicht nur bis zum Beginn. */
export function isUpcoming(start: string, now = new Date()) {
  const end = new Date(start)
  end.setHours(23, 59, 59, 999)
  return end >= now
}
