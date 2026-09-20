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
  transition: background 0.15s ease-out;

  &:hover,
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

  input:checked::after {
    content: '';
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.ink};
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
