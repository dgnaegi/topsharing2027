import styled from 'styled-components'

export const SupportersList = styled.ul`
  list-style: none;
  border-top: ${({ theme }) => theme.border};
`

export const NameButton = styled.button`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} 0;
  background: none;
  border: none;
  border-bottom: ${({ theme }) => theme.border};
  font: inherit;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  text-align: left;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: text-decoration-color ${({ theme }) => theme.motion.fast};

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.ink};
  }

  &[aria-pressed='true'] {
    font-weight: 700;
    text-decoration-color: ${({ theme }) => theme.colors.signal};
  }
`
