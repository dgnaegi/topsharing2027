import styled from 'styled-components'
import { media } from '../theme'
import { enter, nudgeIn } from '../motion'

export const FooterBar = styled.footer`
  padding-block: ${({ theme }) => theme.spacing.xl};
  padding-inline: max(clamp(1rem, 4vw, 4rem), calc((100% - 1600px) / 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${media.maxSm} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
`

export const FooterShare = styled.span`
  display: inline-flex;
  align-items: center;
  margin-inline: -12px;
`

/** Icon 20px, Trefferfläche 44px. Der negative Rand in FooterShare hält die Flucht. */
export const FooterIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  transition:
    color ${({ theme }) => theme.motion.fast} ease-out,
    transform 0.1s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.signalDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: none;
  }
`

export const FooterStatus = styled.p`
  margin-left: ${({ theme }) => theme.spacing.sm};

  &:not(:empty) {
    ${enter(0, nudgeIn)}
    animation-duration: 0.25s;
  }

  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`
