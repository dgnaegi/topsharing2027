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
      'In Adliswil geboren und aufgewachsen, hat Nicole\u00A0Wyss (50) nach dem Studium der Kunstgeschichte, Kommunikation & Journalistik und deutscher Literatur in Fribourg und Paris wieder nach Zürich zurückgefunden, wo sie mit ihrer Familie (Kinder: 11 & 14) seit über 20 Jahren im Kreis 3 zu Hause ist.',
      'Beruflich hat sie neben redaktionellen Arbeiten für Film- & Gamefestivals gearbeitet, war für Video- und Fernsehproduktion tätig und hat Film- und Fotorecherchen für Museumsprojekte ausgeführt.',
      'Seit 2014 ist sie ein gewähltes Mitglied der Kreisschulbehörde Limmattal und seit Herbst 2021 vertritt sie die Alternative Linke im Zürcher Kantonsrat.',
    ],
    kantonsratUrl:
      'https://www.kantonsrat.zh.ch/mitglieder/mitglied/?id=e406787c01ae497bbe52672d4f6227fb',
  },
  {
    slug: 'melanie-berner',
    name: 'Melanie\u00A0Berner',
    bio: [
      'Melanie\u00A0Berner (45) ist seit 24 Jahren in der Stadt Zürich zuhause. Gekommen, um Politikwissenschaft, Ethnologie und Wirtschafts- und Sozialgeschichte zu studieren, geblieben, weil sie hier ein Zuhause gefunden hat. Sie lebt mit ihren Kindern (7 & 10) im Kreis 9.',
      'Nach elf Jahren engagierter Tätigkeit bei einer Mediengewerkschaft (u.a. als verantwortliche Fachsekretärin für Medienpolitik) hat sie sich 2025 beruflich dem bildungs(-politischen) Bereich zugewandt. Anfang 2026 hat sie den CAS Quereinstieg in die Schulleitung an der PHZH erfolgreich abgeschlossen.',
      'Von 2019 bis 2023 hat sie die Alternative Linke im Zürcher Kantonsrat vertreten und seit Juni 2026 ist sie ein gewähltes Mitglied der Kreisschulbehörde Zürichberg.',
    ],
    kantonsratUrl:
      'https://www.kantonsrat.zh.ch/mitglieder/mitglied/?id=3aae98596ea243b6a44433840c05cb88',
  },
]
