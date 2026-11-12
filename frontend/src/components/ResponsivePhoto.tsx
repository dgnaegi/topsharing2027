import { PHOTO_HEIGHT, PHOTO_WIDTH, type PhotoSet } from '../data/photos'

interface Props {
  photo: PhotoSet
  alt: string
  sizes: string
  eager?: boolean
  className?: string
}

/** WebP in zwei Breiten, JPG als Fallback. Feste Masse, damit beim Laden nichts springt. */
export function ResponsivePhoto({ photo, alt, sizes, eager = false, className }: Props) {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={`${photo.webp800} 800w, ${photo.webp} 1600w`}
        sizes={sizes}
      />
      <img
        src={photo.jpg}
        alt={alt}
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  )
}
