import styled from 'styled-components'
import { media } from '../theme'
import { grow } from '../motion'

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

  /* Lesefortschritt: läuft pink über die schwarze Bandkante. Nur wo Scroll-Timelines gehen. */
  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        height: 4px;
        background: ${({ theme }) => theme.colors.signal};
        transform-origin: 0 50%;
        animation: ${grow} linear both;
        animation-timeline: scroll(root);
        pointer-events: none;
      }
    }
  }
`

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  white-space: nowrap;

  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 3px;
  text-underline-offset: 6px;
  transition:
    text-decoration-color ${({ theme }) => theme.motion.fast} ease-out,
    text-underline-offset ${({ theme }) => theme.motion.fast} ease-out;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.signal};
    text-underline-offset: 4px;
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

  transition: color ${({ theme }) => theme.motion.fast} ease-out;

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
