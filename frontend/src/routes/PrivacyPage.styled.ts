import styled from 'styled-components'
import { Button } from '../components/Button.styled'
import { Display } from '../components/Band.styled'

export const BackButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-top: ${({ theme }) => theme.border};
  padding-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 68ch;
`

export const P = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  max-width: 68ch;
`

export const Ul = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  max-width: 68ch;

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`

export const PageHeading = styled(Display)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`
