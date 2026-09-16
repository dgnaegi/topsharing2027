import styled from 'styled-components'
import { media } from '../theme'

export const FooterBar = styled.footer`
  border-top: ${({ theme }) => theme.borderThick};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 0.85rem;

  ${media.maxSm} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FooterLinks = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  a {
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`
