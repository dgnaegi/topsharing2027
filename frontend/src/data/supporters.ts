import data from './supporters.json'

export interface Supporter {
  slug: string
  firstName: string
  lastName: string
  role?: string
  quote: string
}

export const SUPPORTER_PHOTO_WIDTH = 800
export const SUPPORTER_PHOTO_HEIGHT = 1000

export const supporterPhoto = (slug: string): string => `/unterstuetzende/${slug}.webp`

export const SUPPORTERS: Supporter[] = [...(data as Supporter[])].sort((a, b) =>
  `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`, 'de-CH'),
)
