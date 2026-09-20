import { postJson } from './client'

export interface SupportSubmission {
  firstName: string
  lastName: string
  email: string
  campaign: boolean
  publicSupport: boolean
  role?: string
  quote?: string
  image?: string
}

export function submitSupport(data: SupportSubmission): Promise<{ ok: true }> {
  return postJson('/support', data)
}
