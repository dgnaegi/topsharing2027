import styled from 'styled-components'
import { media } from '../theme'

export const PageWrapper = styled.main`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: calc(${({ theme }) => theme.headerHeight} + ${({ theme }) => theme.spacing.xl});

  ${media.maxSm} {
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: calc(${({ theme }) => theme.headerHeight} + ${({ theme }) => theme.spacing.lg});
  }
`

export const PageTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const SectionLabel = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-weight: 800;
  font-size: 0.85rem;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  min-height: 44px;
  background: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.surface : theme.colors.text};
  color: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.text : theme.colors.background};
  transition:
    background 0.15s ease-out,
    color 0.15s ease-out;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
