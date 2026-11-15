export interface SupportFormValues {
  firstName: string
  lastName: string
  email: string
  role: string
  quote: string
  image: FileList
}

export type SupportDraft = Omit<SupportFormValues, 'image'>

export const EMPTY_DRAFT: SupportDraft = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  quote: '',
}

export type FormMode = 'help' | 'quote'

export const FORM_INTRO: Record<FormMode, string> = {
  help: 'Wir melden uns bei dir, sobald es etwas zu tun gibt, zum Beispiel Flyer verteilen oder bei einer Standaktion mithelfen.',
  quote:
    'Dein Name und dein Zitat erscheinen auf dieser Website. Funktion und Foto sind freiwillig.',
}

export const FORM_SUBMIT: Record<FormMode, string> = {
  help: 'Ich bin dabei',
  quote: 'Zitat senden',
}
