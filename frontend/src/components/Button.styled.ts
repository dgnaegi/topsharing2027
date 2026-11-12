import styled from 'styled-components'
import { media } from '../theme'
import { sweep } from '../motion'

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'onSignal' | 'paper' }>`
  position: relative;
  overflow: hidden;
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
    $variant === 'secondary'
      ? 'transparent'
      : $variant === 'paper'
        ? theme.colors.paper
        : theme.colors.ink};
  color: ${({ theme, $variant }) =>
    $variant === 'secondary' || $variant === 'paper' ? theme.colors.ink : theme.colors.paper};
  transition:
    background ${({ theme }) => theme.motion.fast} ease-out,
    color ${({ theme }) => theme.motion.fast} ease-out,
    transform 0.1s ease-out;

  &:hover:not(:disabled) {
    background: ${({ theme, $variant }) =>
      $variant === 'secondary' || $variant === 'paper'
        ? theme.colors.ink
        : $variant === 'onSignal'
          ? theme.colors.paper
          : theme.colors.signal};
    color: ${({ theme, $variant }) =>
      $variant === 'secondary' || $variant === 'paper' ? theme.colors.paper : theme.colors.ink};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    transition-duration: 0.05s;
  }

  &:disabled {
    cursor: progress;
  }

  /* Senden läuft: pinker Balken an der Unterkante statt ausgegrautem Button. */
  &[aria-busy='true']::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40%;
    height: 4px;
    background: ${({ theme }) => theme.colors.signal};
    animation: ${sweep} 1.1s linear infinite;
  }

  ${media.maxSm} {
    width: 100%;
  }
`
