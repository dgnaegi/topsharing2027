import styled from 'styled-components'
import { Display } from './Band.styled'

export const ProgramHeading = styled(Display)`
  color: ${({ theme }) => theme.colors.signal};
`

export const ProgramList = styled.ul`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  border-top: 2px solid ${({ theme }) => theme.colors.paper};
  padding-top: ${({ theme }) => theme.spacing.lg};

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.xl};
    font-weight: 500;
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    line-height: 1.3;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.35em;
    width: 0.6em;
    height: 0.6em;
    background: ${({ theme }) => theme.colors.signal};
  }
`

export const Aside = styled.p`
  max-width: 68ch;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 2px solid ${({ theme }) => theme.colors.paper};
`
