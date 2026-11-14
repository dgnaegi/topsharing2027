export type SupportMode = 'help' | 'quote' | 'give'

export interface SupportOption {
  mode: SupportMode
  /** Titel ab Tablet-Breite. */
  title: string
  /** Kurzer Titel für schmale Screens, wo drei Kacheln nebeneinander stehen. */
  short: string
  help: string
}

export const SUPPORT_OPTIONS: SupportOption[] = [
  {
    mode: 'help',
    title: 'Mithelfen',
    short: 'Mithelfen',
    help: 'An Ständen stehen, Flyer stecken, mit anpacken',
  },
  {
    mode: 'quote',
    title: 'Öffentlich unterstützen',
    short: 'Zitat',
    help: 'Mit Name und Zitat auf der Website',
  },
  {
    mode: 'give',
    title: 'Spenden',
    short: 'Spenden',
    help: 'Per Twint oder Überweisung',
  },
]

/** Alter Anker der früheren Spenden-Sektion. Öffnet weiterhin direkt den Spenden-Tab. */
export const DONATE_HASH = '#spenden'

export const PANEL_ID = 'unterstuetzen-panel'
export const tabId = (mode: SupportMode) => `unterstuetzen-tab-${mode}`
