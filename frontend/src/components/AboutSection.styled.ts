import styled from 'styled-components'
import { media } from '../theme'

/** Mobil: zwei Namen nebeneinander über dem Text. Ab md: untereinander links vom Text. */
export const TabList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};

  ${media.md} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

export const Tab = styled.button`
  display: flex;
  align-items: flex-end;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.borderStructural};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 700;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.15s ease-out,
    transform 0.1s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.tint};
    transform: translateY(-1px);
  }

  &[aria-selected='true'] {
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
