import styled from 'styled-components'

export const Card = styled.label`
  display: grid;
  grid-template-columns: 28px 1fr;
  column-gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
  padding: ${({ theme }) => theme.spacing.md};
  min-height: 44px;
  background: ${({ theme }) => theme.colors.paper};
  border: ${({ theme }) => theme.border};
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.motion.fast} ease-out,
    transform 0.1s ease-out;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: none;
  }

  &:has(input:checked) {
    background: ${({ theme }) => theme.colors.signal};
  }

  &:has(input:focus-visible) {
    outline: 3px solid ${({ theme }) => theme.colors.ink};
    outline-offset: 3px;
  }

  input {
    appearance: none;
    width: 28px;
    height: 28px;
    margin: 0;
    border: ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.colors.paper};
    display: grid;
    place-content: center;
    cursor: pointer;
  }

  /* Markierung: Hover zeigt sie klein in Pink an, Haken setzt sie voll in Schwarz. */
  input::after {
    content: '';
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.signal};
    transform: scale(0);
    transition:
      transform ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease},
      background ${({ theme }) => theme.motion.fast} ease-out;
  }

  &:hover input:not(:checked)::after {
    transform: scale(0.5);
  }

  input:checked::after {
    background: ${({ theme }) => theme.colors.ink};
    transform: none;
  }
`

export const CardTitle = styled.span`
  display: block;
  font-weight: 700;
`

export const CardHelp = styled.span`
  display: block;
  font-size: 0.875rem;
`
