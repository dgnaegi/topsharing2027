import styled, { css } from 'styled-components'

/**
 * Felder: volle Rahmenbox, Fokus färbt den Rahmen pink. Ungültige Felder bekommen links einen
 * breiten Signalbalken, passend zum Balken der Fehlermeldung darunter.
 */
const fieldStyles = css`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 10px 12px;
  font-size: 1rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.paper};
  min-height: 44px;
  transition:
    border-color ${({ theme }) => theme.motion.fast} ease-out,
    border-left-width 0.1s ease-out,
    padding-left 0.1s ease-out;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.signal};
  }

  &[aria-invalid='true'] {
    border-left: 8px solid ${({ theme }) => theme.colors.signal};
    padding-left: 6px;
  }
`

export const Input = styled.input`
  ${fieldStyles}
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 120px;
`

export const FileInput = styled.input`
  ${fieldStyles}
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  cursor: pointer;

  &::file-selector-button {
    margin-right: ${({ theme }) => theme.spacing.md};
    padding: 8px 16px;
    border: ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.radius};
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.paper};
    font: inherit;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition:
      background ${({ theme }) => theme.motion.fast} ease-out,
      color ${({ theme }) => theme.motion.fast} ease-out;
  }

  &:hover::file-selector-button {
    background: ${({ theme }) => theme.colors.signal};
    color: ${({ theme }) => theme.colors.ink};
  }
`
