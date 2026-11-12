import { ResponsivePhoto } from './ResponsivePhoto'
import { PHOTO_HIGHLIGHT } from '../data/photos'
import type { Candidate } from '../data/candidates'
import { Frame, Layer, HitFront, HitBack } from './AboutPhoto.styled'

const SIZES = '(min-width: 900px) 480px, 100vw'

interface Props {
  active: Candidate['slug']
  onSelect: (slug: Candidate['slug']) => void
}

/**
 * Zwei gleich zugeschnittene Fassungen übereinander: Nicole farbig liegt fix unten, Melanie
 * farbig wird darüber ein- und ausgeblendet. So geht das Bild direkt von einer Fassung in die
 * andere über, ohne Zwischenzustand.
 *
 * Im Foto sitzt Melanie Berner vorne, Nicole Wyss steht dahinter (geprüft an hero-melanie.jpg).
 */
export function AboutPhoto({ active, onSelect }: Props) {
  return (
    <Frame>
      <Layer $visible>
        <ResponsivePhoto
          photo={PHOTO_HIGHLIGHT['nicole-wyss']}
          alt={
            active === 'nicole-wyss'
              ? 'Nicole Wyss (hinten) und Melanie Berner (vorne), Nicole farbig hervorgehoben'
              : ''
          }
          sizes={SIZES}
        />
      </Layer>
      <Layer $visible={active === 'melanie-berner'}>
        <ResponsivePhoto
          photo={PHOTO_HIGHLIGHT['melanie-berner']}
          alt={
            active === 'melanie-berner'
              ? 'Melanie Berner (vorne) und Nicole Wyss (hinten), Melanie farbig hervorgehoben'
              : ''
          }
          sizes={SIZES}
        />
      </Layer>
      <HitBack
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        aria-label="Nicole Wyss auswählen"
        aria-pressed={active === 'nicole-wyss'}
        onClick={() => onSelect('nicole-wyss')}
      />
      <HitFront
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        aria-label="Melanie Berner auswählen"
        aria-pressed={active === 'melanie-berner'}
        onClick={() => onSelect('melanie-berner')}
      />
    </Frame>
  )
}
