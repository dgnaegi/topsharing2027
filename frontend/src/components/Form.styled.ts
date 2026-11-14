import styled from 'styled-components'
import { media } from '../theme'
import { enter, nudgeIn } from '../motion'

/** Panel unter den Unterstützen-Kacheln: schliesst ohne Oberkante an deren Rahmen an. */
export const Form = styled.form`
  position: relative;
  background: ${({ theme }) => theme.colors.tint};
  border: ${({ theme }) => theme.borderStructural};
  border-top: none;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  ${media.maxSm} {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`

/** Ein Satz über dem Formular: was mit den Angaben passiert. */
export const Intro = styled.p`
  font-weight: 500;
  max-width: 60ch;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  ${media.maxSm} {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const Label = styled.label`
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

export const HelpText = styled.p`
  font-size: 0.875rem;
`

export const ErrorText = styled.p`
  ${enter(0, nudgeIn)}
  animation-duration: 0.25s;
  font-size: 0.875rem;
  font-weight: 700;
  border-left: 4px solid ${({ theme }) => theme.colors.signal};
  padding-left: ${({ theme }) => theme.spacing.sm};
`

export const StatusText = styled.p`
  ${enter(0, nudgeIn)}
  animation-duration: 0.25s;
  font-weight: 700;
  border-left: 4px solid ${({ theme }) => theme.colors.signal};
  padding-left: ${({ theme }) => theme.spacing.sm};
`

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;
`

export const Legend = styled.legend`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

/** Zusatzfelder, die erst nach einer Auswahl erscheinen, gleiten herein. */
export const RevealFieldset = styled(Fieldset)`
  ${enter(0)}
  animation-duration: ${({ theme }) => theme.motion.mid};
`
