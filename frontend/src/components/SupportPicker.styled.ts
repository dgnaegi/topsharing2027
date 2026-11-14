import styled from 'styled-components'
import { selectable } from '../selectable'
import { media } from '../theme'

/** Drei Kacheln, auch mobil nebeneinander: so steht der Inhalt immer direkt darunter. */
export const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: ${({ theme }) => theme.borderStructural};
`

export const IconBox = styled.span`
  flex: none;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  transition: background ${({ theme }) => theme.motion.fast} ease-out;

  svg {
    width: 28px;
    height: 28px;
  }

  ${media.md} {
    width: 72px;
    height: 72px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xs}`};
  border: none;
  border-right: ${({ theme }) => theme.borderStructural};
  font: inherit;
  text-align: center;
  cursor: pointer;
  ${selectable("[aria-selected='true']")}

  &:last-child {
    border-right: none;
  }

  &[aria-selected='true'] ${IconBox} {
    background: ${({ theme }) => theme.colors.signal};
  }

  /* Innen liegender Ring: aussen würde er von der Nachbarkachel verdeckt. */
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.signal};
    outline-offset: -7px;
  }

  ${media.md} {
    flex-direction: row;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
    text-align: left;
  }
`

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  min-width: 0;
`

export const Title = styled.span`
  font-weight: 700;
  font-size: clamp(0.875rem, 0.6rem + 1.4vw, 1.875rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  overflow-wrap: break-word;
`

export const LongTitle = styled.span`
  display: none;

  ${media.md} {
    display: inline;
  }
`

export const ShortTitle = styled.span`
  ${media.md} {
    display: none;
  }
`

export const Help = styled.span`
  display: none;

  ${media.md} {
    display: block;
    font-size: 0.9375rem;
    line-height: 1.35;
  }
`
