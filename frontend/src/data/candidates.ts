export interface Candidate {
  slug: 'nicole-wyss' | 'melanie-berner'
  name: string
  bio: string[]
  kantonsratUrl: string
}

export const CANDIDATES: Candidate[] = [
  {
    slug: 'nicole-wyss',
    name: 'Nicole\u00A0Wyss',
    bio: [
      'Nicole\u00A0Wyss (50) ist in Adliswil geboren und aufgewachsen und hat in Fribourg und Paris Kunstgeschichte, Kommunikation und Journalistik sowie deutsche Literatur studiert. Seit über 20 Jahren lebt sie mit ihrer Familie im Zürcher Kreis 3, ihre Kinder sind 11 und 14.',
      'Beruflich hat sie redaktionell für Film- und Gamefestivals gearbeitet, war in der Video- und Fernsehproduktion tätig und hat Film- und Fotorecherchen für Museumsprojekte gemacht.',
      'Seit 2014 ist sie gewähltes Mitglied der Kreisschulbehörde Limmattal. Seit Herbst 2021 vertritt sie die Alternative Linke im Zürcher Kantonsrat.',
    ],
    kantonsratUrl:
      'https://www.kantonsrat.zh.ch/mitglieder/mitglied/?id=e406787c01ae497bbe52672d4f6227fb',
  },
  {
    slug: 'melanie-berner',
    name: 'Melanie\u00A0Berner',
    bio: [
      'Melanie\u00A0Berner (45) kam vor 24 Jahren nach Zürich, um Politikwissenschaft, Ethnologie sowie Wirtschafts- und Sozialgeschichte zu studieren. Geblieben ist sie, weil sie hier ein Zuhause gefunden hat. Mit ihren Kindern (7 und 10) lebt sie im Kreis 9.',
      'Elf Jahre lang hat sie bei einer Mediengewerkschaft gearbeitet, unter anderem als verantwortliche Fachsekretärin für Medienpolitik. 2025 ist sie in den Bildungsbereich gewechselt und hat Anfang 2026 an der PHZH den CAS Quereinstieg in die Schulleitung abgeschlossen.',
      'Von 2019 bis 2023 vertrat sie die Alternative Linke im Zürcher Kantonsrat. Seit Juni 2026 ist sie gewähltes Mitglied der Kreisschulbehörde Zürichberg.',
    ],
    kantonsratUrl:
      'https://www.kantonsrat.zh.ch/mitglieder/mitglied/?id=3aae98596ea243b6a44433840c05cb88',
  },
]
