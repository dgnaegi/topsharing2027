import styled from 'styled-components'
import { media } from '../theme'

export const SupportersWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

export const SupportersList = styled.ul`
  list-style: none;
  columns: 2;
  column-gap: ${({ theme }) => theme.spacing.xl};

  ${media.maxSm} {
    columns: 1;
  }
`

export const SupporterItem = styled.li`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
  break-inside: avoid;
  font-size: 1rem;
`

export const SupporterName = styled.span`
  font-weight: 700;
`

export const QuoteTrigger = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: underline;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`
