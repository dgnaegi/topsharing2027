import styled from 'styled-components'
import { Display } from './Band.styled'

export const ArticlesHeading = styled(Display)`
  color: ${({ theme }) => theme.colors.signal};
`

export const ArticleList = styled.ul`
  list-style: none;

  li {
    padding-block: ${({ theme }) => theme.spacing.md};
    border-top: 2px solid ${({ theme }) => theme.colors.paper};
  }

  li:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.paper};
  }

  a {
    font-weight: 500;
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    line-height: 1.3;
  }
`

export const Source = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.signal};
`
