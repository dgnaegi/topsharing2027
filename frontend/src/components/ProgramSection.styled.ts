import styled from 'styled-components'
import { Display } from './Band.styled'

export const ProgramHeading = styled(Display)`
  color: ${({ theme }) => theme.colors.signal};
`

export const ProgramList = styled.ol`
  list-style: none;
  border-top: 2px solid ${({ theme }) => theme.colors.paper};

  li {
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: baseline;
    padding-block: ${({ theme }) => theme.spacing.md};
    border-bottom: 2px solid ${({ theme }) => theme.colors.paper};
    font-weight: 500;
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    line-height: 1.3;
  }
`

export const GoalNumber = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.signal};
`

export const Aside = styled.p`
  max-width: 68ch;
  margin-top: ${({ theme }) => theme.spacing.xl};
`
