import styled from 'styled-components'
import { media } from '../theme'
import { enter, settle } from '../motion'

/**
 * Hero füllt zusammen mit der Navigationsleiste genau den Bildschirm.
 * Mobil: Foto vollflächig, Schrift auf Balken. Daneben-Layout (media.hero): Pink, Foto rechts.
 */
export const HeroBand = styled.section`
  --hero-gap: clamp(1.25rem, 5.5vw, 5rem);
  --hero-x: max(var(--hero-gap), calc((100% - 1600px) / 2));
  /* Foto nah an 2:3 halten: Breite folgt der Hero-Höhe, gedeckelt durch Seitenbreite. */
  --photo-w: min(640px, 40vw, calc((100svh - ${({ theme }) => theme.navHeight}) * 0.62));
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
    inset: clamp(1rem, 7svh, 4rem) var(--hero-x) 0 auto;
    width: var(--photo-w);
    border: ${({ theme }) => theme.borderStructural};
    border-bottom: none;

    img {
      object-position: 50% 10%;
    }
  }
`

/**
 * Textblock. Mobil unten, exakt mittig. Daneben-Layout: mittig in der Fläche links vom Foto.
 * Container, damit die Schriftgrösse sich nach der verfügbaren Breite richtet.
 */
export const Content = styled.div`
  position: absolute;
  z-index: 1;
  left: var(--hero-x);
  right: var(--hero-x);
  bottom: clamp(1.5rem, 5svh, 3rem);
  container-type: inline-size;
  text-align: center;

  ${media.hero} {
    top: 0;
    bottom: 0;
    right: calc(var(--photo-w) + var(--hero-x) + var(--hero-gap));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: inherit;
`

/** «zusammen» ist rund 3.75em breit: 24cqi lässt mobil Platz für die Balken-Innenabstände. */
export const Slogan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.5rem, min(10svh, 24cqi), 8rem);
  line-height: 1;
  letter-spacing: 0.025em;
  text-transform: lowercase;

  ${media.hero} {
    gap: 0;
    font-size: clamp(2.5rem, min(25cqi, 22svh), 14rem);
    line-height: 0.92;
  }
`

/** padding-left in Höhe des letter-spacing, damit der Nachlauf die Mitte nicht verschiebt. */
export const Bar = styled.span`
  padding: 4px 14px 6px calc(14px + 0.025em);
  background: ${({ theme }) => theme.colors.paper};
  white-space: nowrap;
  ${enter(100)}

  & + & {
    animation-delay: 200ms;
  }

  ${media.hero} {
    padding: 0 0 0 0.025em;
    background: none;
  }
`

export const Claim = styled.span`
  display: inline-block;
  max-width: min(300px, 100%);
  margin-top: 10px;
  padding: ${({ theme }) => `${theme.spacing.sm} 12px`};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.25;
  text-wrap: balance;
  ${enter(320)}

  ${media.hero} {
    max-width: 520px;
    margin-top: clamp(1rem, 4svh, 2rem);
    padding: 0;
    background: none;
    color: ${({ theme }) => theme.colors.ink};
    font-size: clamp(1rem, min(1.8vw, 3.2svh), 1.625rem);
  }
`
