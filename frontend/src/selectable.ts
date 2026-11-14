import { css } from 'styled-components'

/**
 * Gemeinsamer Zustand für wählbare Flächen (Unterstützen-Auswahl, Namen, Termine):
 * Hover hellrosa, aktiv schwarz mit weisser Schrift.
 * `active` ist der Attribut-Selektor des aktiven Zustands, z. B. `[aria-selected='true']`.
 */
export const selectable = (active: string) => css`
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  transition:
    background ${({ theme }) => theme.motion.fast} ease-out,
    color ${({ theme }) => theme.motion.fast} ease-out;

  &:hover:not(${active}) {
    background: ${({ theme }) => theme.colors.tint};
  }

  &${active} {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.paper};
  }
`
