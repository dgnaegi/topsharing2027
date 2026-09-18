import styled from 'styled-components'
import { media } from '../theme'

export const Form = styled.form`
  position: relative;
  background: ${({ theme }) => theme.colors.tint};
  border: ${({ theme }) => theme.border};
  padding: calc(${({ theme }) => theme.spacing.xl} + 8px) ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: ${({ theme }) => theme.colors.signal};
  }

  ${media.maxSm} {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
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

const fieldStyles = `
  border: 2px solid #000000;
  border-radius: 0;
  padding: 10px 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #ffffff;
  min-height: 44px;
`

export const Input = styled.input`
  ${fieldStyles}

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.signal};
  }
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 120px;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.signal};
  }
`

export const FileInput = styled.input`
  border: ${({ theme }) => theme.border};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.paper};
  font-family: inherit;
  font-size: 0.9rem;
`

export const HelpText = styled.p`
  font-size: 0.875rem;
`

export const ErrorText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  border-left: 4px solid ${({ theme }) => theme.colors.signal};
  padding-left: ${({ theme }) => theme.spacing.sm};
`

export const StatusText = styled.p`
  font-weight: 700;
  border-left: 4px solid ${({ theme }) => theme.colors.signal};
  padding-left: ${({ theme }) => theme.spacing.sm};
`
