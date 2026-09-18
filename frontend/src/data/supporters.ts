export interface Supporter {
  id: string
  firstName: string
  lastName: string
  quote?: string
  imageUrl?: string
}

// Platzhalter-Daten. Echte Unterstützende werden nach Prüfung der eingereichten
// Formulare (siehe docs/SECURITY.md) hier manuell ergänzt. Es gibt keine
// Datenbank, jede Einreichung landet nur als E-Mail bei daniel@gnaegi.me.
const supporters: Supporter[] = [
  { id: 'ammann-lukas', firstName: 'Lukas', lastName: 'Ammann' },
  {
    id: 'baumann-sara',
    firstName: 'Sara',
    lastName: 'Baumann',
    quote: 'Melanie und Nicole hören zu und handeln danach. Genau das braucht der Regierungsrat.',
  },
  { id: 'frei-thomas', firstName: 'Thomas', lastName: 'Frei' },
  {
    id: 'huber-anja',
    firstName: 'Anja',
    lastName: 'Huber',
    quote: 'Zwei Frauen, die wissen, wie Zürich tickt. Volle Unterstützung.',
  },
  { id: 'keller-david', firstName: 'David', lastName: 'Keller' },
  {
    id: 'meier-julia',
    firstName: 'Julia',
    lastName: 'Meier',
    quote: 'Endlich Kandidatinnen, die konkrete Lösungen statt leere Versprechen bringen.',
  },
  { id: 'schmid-marco', firstName: 'Marco', lastName: 'Schmid' },
  { id: 'weber-nina', firstName: 'Nina', lastName: 'Weber' },
]

export function getSupportersSortedAlphabetically(): Supporter[] {
  return [...supporters].sort((a, b) =>
    `${a.lastName} ${a.firstName}`.localeCompare(`${b.lastName} ${b.firstName}`, 'de-CH'),
  )
}
