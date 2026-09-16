const BASE = 4
const px = (n: number): string => `${n * BASE}px`

export const theme = {
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    accent: '#FF1975',
    accentDark: '#C10F5D',
    tint: '#FFE9F2',
    muted: '#F2F2F2',
    textMuted: '#555555',
    border: '#000000',
    danger: '#C10F5D',
  },
  spacing: {
    xs: px(1), //  4px
    sm: px(2), //  8px
    md: px(4), // 16px
    lg: px(6), // 24px
    xl: px(8), // 32px
    xxl: px(16), // 64px
  },
  headerHeight: px(14), // 56px
  zIndex: {
    base: 0,
    header: 100,
    overlay: 200,
    modal: 1000,
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
  },
  border: '2px solid #000000',
  borderThick: '3px solid #000000',
  radius: '0px',
  shadow: 'none',
  maxWidth: '1200px',
  font: "'Inter', system-ui, sans-serif",
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
