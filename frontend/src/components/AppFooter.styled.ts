import styled from 'styled-components'
import { media } from '../theme'

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
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  a {
    display: inline-flex;
    align-items: center;
  }
`
