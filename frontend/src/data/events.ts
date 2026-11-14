import data from './events.json'

export interface CampaignEvent {
  /** Eindeutig und URL-tauglich, dient als Anker-ID. */
  slug: string
  title: string
  /** Lokale Zürcher Zeit, ISO ohne Zeitzone: '2026-12-02T19:30'. */
  start: string
  venue: string
  address: string
  /** Absätze. Namen der Kandidatinnen mit \u00A0, siehe docs/MICROCOPY.md. */
  description: string[]
  url?: string
}

/**
 * Termine werden in events.json gepflegt. Vergangene Termine blendet die Seite automatisch
 * aus, sie dürfen dort also stehen bleiben. Die Reihenfolge spielt keine Rolle.
 */
export const EVENTS: CampaignEvent[] = data
