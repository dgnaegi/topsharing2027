import { PHOTO_BOTH, PHOTO_HEIGHT, PHOTO_WIDE, PHOTO_WIDTH } from '../data/photos'
import { heroQuery } from '../theme'

/**
 * Art Direction: Querformat lädt nur das Breitbild (AVIF, WebP, JPG), Hochformat nur das
 * bisherige 2:3-Foto. Der Browser nimmt die erste passende Quelle, lädt also nie beide.
 */
export function HeroPicture() {
  return (
    <picture>
      <source media={heroQuery} type="image/avif" srcSet={PHOTO_WIDE.avif} sizes="100vw" />
      <source media={heroQuery} type="image/webp" srcSet={PHOTO_WIDE.webp} sizes="100vw" />
      <source media={heroQuery} type="image/jpeg" srcSet={PHOTO_WIDE.jpg} />
      <source
        type="image/webp"
        srcSet={`${PHOTO_BOTH.webp800} 800w, ${PHOTO_BOTH.webp} 1600w`}
        sizes="100vw"
      />
      <img
        src={PHOTO_BOTH.jpg}
        alt="Melanie Berner und Nicole Wyss, Kandidatinnen für den Regierungsrat Zürich 2027"
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        decoding="async"
      />
    </picture>
  )
}
