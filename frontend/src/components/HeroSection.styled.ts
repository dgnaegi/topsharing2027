import styled from 'styled-components'
import { media } from '../theme'
import { enter, settle } from '../motion'

/**
 * Hero füllt zusammen mit der Navigationsleiste genau den Bildschirm.
 * Mobil: Hochformat-Foto vollflächig, Schrift auf Balken unten.
 * Querformat (media.hero): Breitbild vollflächig, die beiden rechts, Slogan links daneben.
 */
export const HeroBand = styled.section`
  --hero-gap: clamp(1.25rem, 4vw, 4rem);
  /* Gleicher Seitenrand wie Navigation und Bänder. */
  --hero-x: max(clamp(1rem, 4vw, 4rem), calc((100% - 1600px) / 2));
  --hero-h: calc(100svh - ${({ theme }) => theme.navHeight});
  /* Gerenderte Bildbreite bei object-fit: cover (Breitbild 1.871:1). */
  --img-w: max(100%, calc(var(--hero-h) * 1.871));
  position: relative;
  overflow: hidden;
  height: calc(100vh - ${({ theme }) => theme.navHeight});
  height: calc(100svh - ${({ theme }) => theme.navHeight});
  border-bottom: ${({ theme }) => theme.borderStructural};
  background: ${({ theme }) => theme.colors.paper};

  ${media.hero} {
    background: ${({ theme }) => theme.colors.studio};
  }
`

export const Photo = styled.div`
  position: absolute;
  inset: 0;

  /* color: transparent versteckt den Alt-Text, den Safari und Firefox während des Ladens
     ungestylt anzeigen. Screenreader lesen ihn weiterhin vor. */
  img {
    display: block;
    width: 100%;
    height: 100%;
    color: transparent;
    object-fit: cover;
    object-position: 50% 0%;
    ${enter(0, settle)}
    animation-duration: 1.4s;
  }

  /* Rechtsbündig: die beiden bleiben bei jedem Format ganz im Bild. Bei Ultrawide wird
     unten beschnitten, die Köpfe (ab 12 % Höhe) bleiben drin. */
  ${media.hero} img {
    object-position: 100% 15%;
  }
`

/**
 * Textblock. Mobil unten, exakt mittig. Querformat: mittig in der freien Wand links.
 * Die Personen beginnen bei 61.5 % der Bildbreite, rechtsbündig gemessen also 38.5 %.
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
    right: calc(var(--img-w) * 0.385 + var(--hero-gap));
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

/** «Zusammen» ist rund 3.7em breit: 24cqi lässt mobil Platz für die Balken-Innenabstände. */
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

  ${media.hero} {
    gap: 0.06em;
    font-size: clamp(2rem, min(21cqi, 13svh), 9rem);
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

  /* Gleiche Balken wie mobil, Innenabstände wachsen mit der Schrift. */
  ${media.hero} {
    padding: 0.05em 0.16em 0.07em calc(0.16em + 0.025em);
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
    max-width: min(18.5em, 100%);
    margin-top: clamp(0.5rem, 2svh, 1.25rem);
    padding: 0.45em 0.75em;
    font-size: clamp(0.9375rem, min(1.5vw, 2.6svh), 1.375rem);
  }
`
