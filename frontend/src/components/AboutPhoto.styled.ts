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
  left: 7.9%;
  top: 6.6%;
  width: 73.7%;
  height: 65.8%;
`

/** Vordere, sitzende Person (Melanie Berner): Umriss als Polygon, Prozent vom Bildausschnitt. */
export const HitFront = styled(Hit)`
  inset: 0;
  clip-path: polygon(
    33.8% 23.2%,
    40.5% 22.4%,
    45.3% 26.1%,
    50.1% 30.5%,
    52.9% 35%,
    53.9% 40%,
    52.5% 42%,
    52.5% 48.3%,
    56.4% 48.9%,
    56.8% 54.1%,
    61.1% 57.6%,
    61.1% 60.5%,
    62.1% 62.4%,
    60.7% 64.3%,
    61.6% 69.5%,
    66.3% 70%,
    95.1% 84.7%,
    95.1% 100%,
    37.6% 100%,
    33.8% 72%,
    22.2% 72%,
    22.2% 38.8%,
    25.1% 36.2%,
    28% 31.1%,
    30.9% 26.1%
  );

  /* Mit clip-path wäre der Fokusring abgeschnitten: beim Tastaturfokus den ganzen Rahmen zeigen. */
  &:focus-visible {
    clip-path: none;
  }
`

export const Hint = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.875rem;
`
