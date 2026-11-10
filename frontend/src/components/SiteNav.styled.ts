import styled from 'styled-components'
import { media } from '../theme'

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  display: flex;
  align-items: center;
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
`

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.signal};
    text-decoration-thickness: 3px;
  }
`

/** Mobil: Hamburger ganz rechts, Icon bündig mit dem Seitenrand. */
export const MenuToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-left: auto;
  margin-right: -8px;
  padding: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.signalDark};
  }

  ${media.lg} {
    display: none;
  }
`

export const Nav = styled.nav`
  ${media.lg} {
    margin-left: auto;
  }
`
