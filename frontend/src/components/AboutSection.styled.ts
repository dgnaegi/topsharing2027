import styled from 'styled-components'
import { media } from '../theme'

export const NameList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${media.md} {
    gap: ${({ theme }) => theme.spacing.md};
  }
`

export const NameButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.borderStructural};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.tint};
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 700;
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: center;
  text-wrap: balance;
  cursor: pointer;
  transition:
    background 0.15s ease-out,
    transform 0.1s ease-out;

  &:hover {
    transform: translateY(-1px);
  }

  &[aria-pressed='true'] {
    background: ${({ theme }) => theme.colors.signal};
  }

  ${media.md} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

export const BioText = styled.p`
  max-width: 68ch;

  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }

  &:first-child {
    font-weight: 500;
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    line-height: 1.3;
  }
`

export const ProfileLink = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
`
