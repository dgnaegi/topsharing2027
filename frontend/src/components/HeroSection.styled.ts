import styled from 'styled-components'
import { media } from '../theme'
import { enter, settle } from '../motion'

/**
 * Hero füllt zusammen mit der Navigationsleiste genau den Bildschirm.
 * Mobil: Foto vollflächig, Schrift auf Balken. Ab 1024px: Pink, Foto rechts, Text links.
 */
export const HeroBand = styled.section`
  --hero-x: max(clamp(1.25rem, 5.5vw, 5rem), calc((100% - 1600px) / 2));
  position: relative;
  overflow: hidden;
  height: calc(100vh - ${({ theme }) => theme.navHeight});
  height: calc(100svh - ${({ theme }) => theme.navHeight});
  border-bottom: ${({ theme }) => theme.borderStructural};
  background: ${({ theme }) => theme.colors.paper};

  ${media.hero} {
    background: ${({ theme }) => theme.colors.signal};
  }
`

export const Photo = styled.div`
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0%;
    ${enter(0, settle)}
    animation-duration: 1.4s;
  }

  ${media.hero} {
    inset: ${({ theme }) => theme.spacing.xxl} var(--hero-x) 0 auto;
    width: min(540px, 38%);
    border: ${({ theme }) => theme.borderStructural};
    border-bottom: none;

    img {
      object-position: 50% 15%;
    }
  }
`

export const Content = styled.div`
  position: absolute;
  z-index: 1;
  left: var(--hero-x);
  right: var(--hero-x);
  bottom: clamp(1.5rem, 5svh, 3rem);

  ${media.hero} {
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: inherit;
`

export const Slogan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.75rem, min(10svh, 21vw), 5.5rem);
  line-height: 1;
  letter-spacing: 0.025em;
  text-transform: lowercase;

  ${media.hero} {
    gap: 0;
    font-size: clamp(6rem, min(12.5vw, 22svh), 11.25rem);
    line-height: 0.92;
    margin-left: -0.02em;
  }
`

export const Bar = styled.span`
  padding: 4px 14px 6px;
  background: ${({ theme }) => theme.colors.paper};
  white-space: nowrap;
  ${enter(100)}

  & + & {
    animation-delay: 200ms;
  }

  ${media.hero} {
    padding: 0;
    background: none;
  }
`

export const Claim = styled.span`
  display: inline-block;
  max-width: 300px;
  margin-top: 10px;
  padding: ${({ theme }) => `${theme.spacing.sm} 12px`};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.25;
  ${enter(320)}

  ${media.hero} {
    max-width: 520px;
    margin-top: ${({ theme }) => theme.spacing.xl};
    padding: 0;
    background: none;
    color: ${({ theme }) => theme.colors.ink};
    font-size: clamp(1.25rem, 1.8vw, 1.625rem);
  }
`
