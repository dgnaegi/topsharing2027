import bothWebp from '../assets/hero.webp'
import bothWebp800 from '../assets/hero-800.webp'
import bothJpg from '../assets/hero.jpg'
import nicoleWebp from '../assets/hero-nicole.webp'
import nicoleWebp800 from '../assets/hero-nicole-800.webp'
import nicoleJpg from '../assets/hero-nicole.jpg'
import melanieWebp from '../assets/hero-melanie.webp'
import melanieWebp800 from '../assets/hero-melanie-800.webp'
import melanieJpg from '../assets/hero-melanie.jpg'
import wideAvif1280 from '../assets/hero-wide-1280.avif'
import wideAvif1920 from '../assets/hero-wide-1920.avif'
import wideAvif2560 from '../assets/hero-wide-2560.avif'
import wideAvif3200 from '../assets/hero-wide-3200.avif'
import wideAvif3840 from '../assets/hero-wide-3840.avif'
import wideWebp1280 from '../assets/hero-wide-1280.webp'
import wideWebp1920 from '../assets/hero-wide-1920.webp'
import wideWebp2560 from '../assets/hero-wide-2560.webp'
import wideWebp3200 from '../assets/hero-wide-3200.webp'
import wideWebp3840 from '../assets/hero-wide-3840.webp'
import wideJpg from '../assets/hero-wide.jpg'

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

/**
 * Breitbild für Querformat-Screens, aus originals/hero-desk.png (sRGB, Lanczos, leicht
 * nachgeschärft). Bis 3840w für Retina. Seitenverhältnis 1.871. Die beiden stehen rechts,
 * links ist freie Wand.
 */
export const PHOTO_WIDE = {
  avif: `${wideAvif1280} 1280w, ${wideAvif1920} 1920w, ${wideAvif2560} 2560w, ${wideAvif3200} 3200w, ${wideAvif3840} 3840w`,
  webp: `${wideWebp1280} 1280w, ${wideWebp1920} 1920w, ${wideWebp2560} 2560w, ${wideWebp3200} 3200w, ${wideWebp3840} 3840w`,
  jpg: wideJpg,
}
