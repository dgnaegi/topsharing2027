import styled from 'styled-components'

export const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border: ${({ theme }) => theme.borderStructural};
  background: ${({ theme }) => theme.colors.muted};
`

export const Layer = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Hit = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.signal};
    outline-offset: -6px;
  }
`

/** Hintere Person (Nicole Wyss): Rechteck, liegt im DOM vor der vorderen. */
export const HitBack = styled(Hit)`
  left: 13.9%;
  top: 6.6%;
  width: 73.7%;
  height: 65.8%;
`

/** Vordere, sitzende Person (Melanie Berner): Umriss als Polygon, Prozent vom Bildausschnitt. */
export const HitFront = styled(Hit)`
  inset: 0;
  clip-path: polygon(
    39.8% 23.2%,
    46.5% 22.4%,
    51.3% 26.1%,
    56.1% 30.5%,
    58.9% 35%,
    59.9% 40%,
    58.5% 42%,
    58.5% 48.3%,
    62.4% 48.9%,
    62.8% 54.1%,
    67.2% 57.6%,
    67.2% 60.5%,
    68.2% 62.4%,
    66.8% 64.3%,
    67.7% 69.5%,
    72.3% 70%,
    100% 84.7%,
    100% 100%,
    43.6% 100%,
    39.8% 72%,
    28.2% 72%,
    28.2% 38.8%,
    31.2% 36.2%,
    34% 31.1%,
    36.9% 26.1%
  );

  /* Mit clip-path wäre der Fokusring abgeschnitten: beim Tastaturfokus den ganzen Rahmen zeigen. */
  &:focus-visible {
    clip-path: none;
  }
`
