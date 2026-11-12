export interface FaqItem {
  question: string
  answer: string
}

/**
 * Häufige Fragen zur Regierungsratswahl. Formuliert wie Suchanfragen, beantwortet mit vollen
 * Namen, damit Suchmaschinen und Sprachmodelle die Antworten zitieren können.
 * Bei Änderungen die statische Fassung und das FAQPage-JSON-LD in index.html nachziehen.
 */
export const FAQ: FaqItem[] = [
  {
    question: 'Wer kandidiert für die AL bei den Regierungsratswahlen 2027 im Kanton Zürich?',
    answer:
      'Für die Alternative Linke (AL) kandidieren Nicole Wyss und Melanie Berner gemeinsam für den Zürcher Regierungsrat. Nicole Wyss ist Kantonsrätin, Melanie Berner Alt-Kantonsrätin.',
  },
  {
    question: 'Was bedeutet Top-Sharing im Regierungsrat?',
    answer:
      'Top-Sharing ist Jobsharing in einer Führungsposition. Wird Melanie Berner oder Nicole Wyss in den Regierungsrat gewählt, teilen sich die beiden das Amt, die Arbeit und den Lohn.',
  },
  {
    question: 'Warum kandidieren Melanie Berner und Nicole Wyss zu zweit?',
    answer:
      'Ein Regierungsamt übersteigt ein 100%-Pensum bei weitem. Das schliesst Menschen mit Care-Arbeit aus, häufig Frauen. Zu zweit bringen sie zwei Perspektiven in die Regierung und können die Arbeit verlässlich aufteilen.',
  },
  {
    question: 'Wer unterstützt die Kandidatur?',
    answer:
      'Die SP Kanton Zürich und die Grünen Kanton Zürich unterstützen die AL-Kandidatur von Nicole Wyss und Melanie Berner für die Regierungsratswahlen 2027.',
  },
  {
    question: 'Wofür setzen sich Melanie Berner und Nicole Wyss im Regierungsrat ein?',
    answer:
      'Für einen solidarischen Kanton Zürich: bezahlbaren Wohnraum, Löhne, die zum Leben reichen, gerechte Steuern für Superreiche und Firmen, gute Gesundheitsversorgung für alle, eine starke Volksschule und Grundrechte für alle Menschen im Kanton.',
  },
  {
    question: 'Wo wohnen die beiden Kandidatinnen?',
    answer:
      'Beide wohnen in der Stadt Zürich: Nicole Wyss im Kreis 3, Melanie Berner im Kreis 9. Damit sind sie die einzigen Kandidierenden für den Regierungsrat, die in der Stadt Zürich leben.',
  },
]
