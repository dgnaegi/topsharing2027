import styled from 'styled-components'

/** Auf dem Signalband: schwarz, Hover invertiert auf Papier. Nach dem Kopieren kurz Papier. */
export const CopyBtn = styled.button<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  margin-left: ${({ theme }) => theme.spacing.sm};
  padding: 4px 10px;
  vertical-align: middle;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme, $copied }) => ($copied ? theme.colors.paper : theme.colors.ink)};
  color: ${({ theme, $copied }) => ($copied ? theme.colors.ink : theme.colors.paper)};
  font-weight: 700;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.motion.fast} ease-out,
    color ${({ theme }) => theme.motion.fast} ease-out,
    transform 0.1s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.paper};
    color: ${({ theme }) => theme.colors.ink};
    transform: translateY(-1px);
  }

  &:active {
    transform: none;
  }
`
