import { postJson } from './client'

export interface TestimonialSubmission {
  firstName: string
  lastName: string
  quote: string
  image?: string
}

export function submitTestimonial(data: TestimonialSubmission): Promise<{ ok: true }> {
  return postJson('/testimonials', data)
}
