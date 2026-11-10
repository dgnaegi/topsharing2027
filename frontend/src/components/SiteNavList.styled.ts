import styled from 'styled-components'
import { media } from '../theme'

/**
 * Mobil: vollflächiges Signal-Panel unter der Leiste, Links in Ruder Plakat mit Trennlinien.
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

  li {
    border-bottom: ${({ theme }) => theme.border};
  }

  li:first-child {
    border-top: ${({ theme }) => theme.border};
  }

  a {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
    padding-block: ${({ theme }) => theme.spacing.md};
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.5rem, 12vw, 4.5rem);
    line-height: 0.9;
    letter-spacing: 0.025em;
    text-transform: lowercase;
    transition: transform 0.1s ease-out;
  }

  a:hover {
    transform: translateX(4px);
  }

  ${media.lg} {
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
    }

    a {
      align-items: center;
      min-height: 44px;
      padding: 0;
      font-family: inherit;
      font-weight: 700;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      text-transform: uppercase;
    }

    a:hover {
      transform: none;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.signal};
      text-decoration-thickness: 3px;
    }
  }
`

export const ItemNumber = styled.span`
  font-family: var(--font-text);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;

  ${media.lg} {
    display: none;
  }
`
