import bothWebp from '../assets/hero.webp'
import bothWebp800 from '../assets/hero-800.webp'
import bothJpg from '../assets/hero.jpg'
import nicoleWebp from '../assets/hero-nicole.webp'
import nicoleWebp800 from '../assets/hero-nicole-800.webp'
import nicoleJpg from '../assets/hero-nicole.jpg'
import melanieWebp from '../assets/hero-melanie.webp'
import melanieWebp800 from '../assets/hero-melanie-800.webp'
import melanieJpg from '../assets/hero-melanie.jpg'

/**
 * Foto: Goran Basic. Alle drei Fassungen haben denselben Ausschnitt (2:3, 1600 × 2400),
 * zugeschnitten aus den Originalen in frontend/originals/.
 */
export interface PhotoSet {
  webp: string
  webp800: string
  jpg: string
}

export const PHOTO_WIDTH = 1600
export const PHOTO_HEIGHT = 2400

export const PHOTO_BOTH: PhotoSet = { webp: bothWebp, webp800: bothWebp800, jpg: bothJpg }

/** Gleiches Foto, nur die genannte Person farbig. */
export const PHOTO_HIGHLIGHT = {
  'nicole-wyss': { webp: nicoleWebp, webp800: nicoleWebp800, jpg: nicoleJpg },
  'melanie-berner': { webp: melanieWebp, webp800: melanieWebp800, jpg: melanieJpg },
} satisfies Record<string, PhotoSet>
