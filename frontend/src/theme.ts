const BASE = 4
const px = (n: number): string => `${n * BASE}px`

export const theme = {
  colors: {
    paper: '#FFFFFF',
    ink: '#000000',
    signal: '#FF1975',
    signalDark: '#C10F5D',
    tint: '#FFE9F2',
    muted: '#F2F2F2',
  },
  fonts: {
    display: "'AL Ruder Plakat', 'Helvetica Neue', Arial, sans-serif",
    text: "'LL Unica77', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    mono: "'LL Unica77 Mono', ui-monospace, monospace",
  },
  spacing: {
    xs: px(1), //   4px
    sm: px(2), //   8px
    md: px(4), //  16px
    lg: px(6), //  24px
    xl: px(8), //  32px
    xxl: px(16), //  64px
    xxxl: px(32), // 128px
  },
  zIndex: {
    base: 0,
    nav: 100,
    modal: 1000,
  },
  motion: {
    fast: '0.15s',
    slow: '0.7s',
    /** Ease-out ohne Überschwingen. */
    ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
  },
  navHeight: '56px',
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    /** Ab hier Hero mit Pink und Foto rechts, darunter Vollbild-Foto. */
    hero: '1024px',
  },
  border: '2px solid #000000',
  borderStructural: '4px solid #000000',
  radius: '0px',
  shadow: 'none',
}

export type Theme = typeof theme

export const bp = theme.breakpoints

export const media = {
  sm: `@media (min-width: ${bp.sm})`,
  md: `@media (min-width: ${bp.md})`,
  lg: `@media (min-width: ${bp.lg})`,
  /** Hero nebeneinander: ab 1024px oder auf Handys quer (sonst verdeckt der Text die Gesichter). */
  hero: `@media (min-width: ${bp.hero}), (orientation: landscape) and (min-width: 560px)`,
  maxSm: `@media (max-width: ${bp.sm})`,
  maxMd: `@media (max-width: ${bp.md})`,
} as const
