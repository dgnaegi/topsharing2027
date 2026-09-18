import styled from 'styled-components'
import { media } from '../theme'

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
  border-bottom: ${({ theme }) => theme.border};
  break-inside: avoid;
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
  color: ${({ theme }) => theme.colors.ink};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.signal};
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.signalDark};
  }
`
