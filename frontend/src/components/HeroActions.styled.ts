import styled from 'styled-components'
import { media } from '../theme'
import { enter } from '../motion'

/** Nur ab 1024px sichtbar: Instagram unter der Unterzeile. Mobil steht der Slogan allein. */
export const Actions = styled.div`
  display: none;

  ${media.hero} {
    display: flex;
    margin-top: clamp(0.5rem, 3svh, 2rem);
    ${enter(440)}
  }
`

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-width: 44px;
  min-height: 44px;
  color: ${({ theme }) => theme.colors.ink};
  transition:
    color 0.15s ease-out,
    transform 0.1s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.paper};
    transform: translateY(-1px);
  }
`
