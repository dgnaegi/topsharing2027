import styled from 'styled-components'
import { media } from '../theme'

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.navHeight};
  padding-inline: max(clamp(1rem, 4vw, 4rem), calc((100% - 1600px) / 2));
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: ${({ theme }) => theme.borderStructural};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.signal};
    text-decoration-thickness: 3px;
  }
`

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  white-space: nowrap;
`

export const MenuToggle = styled.button`
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  cursor: pointer;

  &[aria-expanded='true'] {
    background: ${({ theme }) => theme.colors.signal};
    color: ${({ theme }) => theme.colors.ink};
  }

  ${media.lg} {
    display: none;
  }
`

export const NavList = styled.ul<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style: none;
  padding: ${({ theme }) => theme.spacing.md} clamp(1rem, 4vw, 4rem);
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: ${({ theme }) => theme.borderStructural};

  a {
    display: flex;
    align-items: center;
    min-height: 44px;
  }

  ${media.lg} {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.lg};
    position: static;
    padding: 0;
    border: none;
  }
`
