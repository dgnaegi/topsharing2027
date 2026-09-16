import styled from 'styled-components'
import { media } from '../theme'

export const Form = styled.form`
  max-width: 560px;
  background: ${({ theme }) => theme.colors.tint};
  border: ${({ theme }) => theme.borderThick};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  ${media.maxSm} {
    padding: ${({ theme }) => theme.spacing.md};
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
  border-width: 2px;
  border-style: solid;
  border-radius: 0;
  padding: 10px 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #ffffff;
  min-height: 44px;
`

export const Input = styled.input`
  ${fieldStyles}
  border-color: ${({ theme }) => theme.colors.border};

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 120px;
  border-color: ${({ theme }) => theme.colors.border};

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const FileInput = styled.input`
  border: ${({ theme }) => theme.border};
  padding: ${({ theme }) => theme.spacing.sm};
  background: #ffffff;
  font-size: 0.9rem;
`

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: 0.85rem;
  font-weight: 700;
`

export const HelpText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.8rem;
`

export const StatusText = styled.p<{ $variant: 'success' | 'error' }>`
  font-weight: 700;
  color: ${({ theme, $variant }) => ($variant === 'error' ? theme.colors.accentDark : theme.colors.text)};
`
