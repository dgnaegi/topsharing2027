import styled, { css } from 'styled-components'
import { media } from '../theme'

export type Tone = 'signal' | 'paper' | 'ink'

export const Band = styled.section<{ $tone?: Tone }>`
  width: 100%;
  padding-block: clamp(4rem, 10vw, 10rem);
  padding-inline: max(clamp(1rem, 4vw, 4rem), calc((100% - 1600px) / 2));
  border-bottom: ${({ theme }) => theme.borderStructural};
  background: ${({ theme, $tone = 'paper' }) => theme.colors[$tone]};
  color: ${({ theme, $tone }) => ($tone === 'ink' ? theme.colors.paper : theme.colors.ink)};

  ${({ $tone, theme }) =>
    $tone === 'ink' &&
    css`
      :focus-visible {
        outline-color: ${theme.colors.signal};
      }
    `}
`

export const BandMeta = styled.p`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: ${({ theme }) => theme.spacing.lg};
  row-gap: ${({ theme }) => theme.spacing.xl};
`

export const Col = styled.div<{ $from?: number; $to?: number }>`
  grid-column: 1 / -1;

  ${media.md} {
    grid-column: ${({ $from = 1 }) => $from} / ${({ $to = 13 }) => $to};
  }
`

export const Display = styled.h2<{ $size?: 'xl' | 'l' }>`
  font-family: var(--font-display);
  font-weight: 400;
  font-size: ${({ $size = 'l' }) =>
    $size === 'xl' ? 'clamp(3.5rem, 17vw, 18rem)' : 'clamp(3rem, 10vw, 8rem)'};
  line-height: 0.85;
  letter-spacing: 0.05em;
  word-spacing: 0.1em;
  text-transform: lowercase;
  margin-left: -0.055em;
  overflow-wrap: break-word;
`

export const Lead = styled.p`
  font-weight: 500;
  max-width: 68ch;
`
