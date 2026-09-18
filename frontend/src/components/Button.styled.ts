import styled from 'styled-components'
import { media } from '../theme'

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'onSignal' }>`
  display: inline-block;
  padding: 16px 32px;
  min-height: 44px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme, $variant }) =>
    $variant === 'secondary' ? 'transparent' : theme.colors.ink};
  color: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.ink : theme.colors.paper};
  transition:
    background 0.15s ease-out,
    color 0.15s ease-out,
    transform 0.1s ease-out;

  &:hover:not(:disabled) {
    background: ${({ theme, $variant }) =>
      $variant === 'secondary'
        ? theme.colors.ink
        : $variant === 'onSignal'
          ? theme.colors.paper
          : theme.colors.signal};
    color: ${({ theme, $variant }) =>
      $variant === 'secondary' ? theme.colors.paper : theme.colors.ink};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${media.maxSm} {
    width: 100%;
  }
`
