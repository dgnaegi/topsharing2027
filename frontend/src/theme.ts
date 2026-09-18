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
    modal: 1000,
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
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
  maxSm: `@media (max-width: ${bp.sm})`,
  maxMd: `@media (max-width: ${bp.md})`,
} as const
