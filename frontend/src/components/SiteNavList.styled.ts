import styled from 'styled-components'
import { media } from '../theme'
import { enter, fadeIn } from '../motion'

/**
 * Mobil: vollflächiges Signal-Panel unter der Leiste, Links gross in Unica77 Bold mit Trennlinien.
 * Ab lg: normale Linkzeile in Unica77 rechts in der Leiste.
 */
export const NavList = styled.ul<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: ${({ theme }) => theme.navHeight};
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  list-style: none;
  padding: ${({ theme }) => theme.spacing.lg} clamp(1rem, 4vw, 4rem);
  background: ${({ theme }) => theme.colors.signal};
  ${enter(0, fadeIn)}
  animation-duration: 0.25s;

  li {
    border-bottom: ${({ theme }) => theme.border};
    ${enter(60)}
    animation-duration: 0.45s;
  }

  ${[2, 3, 4, 5, 6, 7].map((n) => `li:nth-child(${n}) { animation-delay: ${n * 40 + 20}ms; }`)}

  li:first-child {
    border-top: ${({ theme }) => theme.border};
  }

  a {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
    padding-block: ${({ theme }) => theme.spacing.md};
    font-weight: 700;
    font-size: clamp(2rem, 9vw, 3.5rem);
    line-height: 1;
    letter-spacing: -0.03em;
    text-transform: lowercase;
    transition: transform 0.1s ease-out;
  }

  a:hover {
    transform: translateX(4px);
  }

  a[aria-current='true'] {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.ink};
    text-decoration-thickness: 4px;
    text-underline-offset: 6px;
  }

  ${media.lg} {
    animation: none;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.lg};
    position: static;
    overflow: visible;
    padding: 0;
    background: none;

    li,
    li:first-child {
      border: none;
      animation: none;
    }

    a {
      align-items: center;
      min-height: 44px;
      padding: 0;
      font-weight: 700;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      text-transform: uppercase;
      text-decoration: underline;
      text-decoration-color: transparent;
      text-decoration-thickness: 3px;
      text-underline-offset: 6px;
      transition:
        text-decoration-color ${({ theme }) => theme.motion.fast} ease-out,
        text-underline-offset ${({ theme }) => theme.motion.fast} ease-out;
    }

    a:hover,
    a[aria-current='true'] {
      transform: none;
      text-decoration-color: ${({ theme }) => theme.colors.signal};
      text-decoration-thickness: 3px;
      text-underline-offset: 4px;
    }
  }
`

/** inline-block, damit die Unterstreichung des aktiven Links nicht unter die Nummer läuft. */
export const ItemNumber = styled.span`
  display: inline-block;
  font-family: var(--font-text);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;

  ${media.lg} {
    display: none;
  }
`
