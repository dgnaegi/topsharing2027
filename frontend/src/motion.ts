import { css, keyframes } from 'styled-components'
import { theme } from './theme'

/** Mikroanimationen: kurz, weich auslaufend, nie überschwingend. */

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const riseIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
`

export const settle = keyframes`
  from { transform: scale(1.04); }
  to { transform: none; }
`

/** Einmalige Eintrittsanimation, startet nach `delay` ms. */
export const enter = (delay = 0, name = riseIn) => css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${name} ${theme.motion.slow} ${theme.motion.ease} both;
    animation-delay: ${delay}ms;
  }
`

/** Kleiner Einstieg von oben, für Fehlermeldungen und Statuszeilen. */
export const nudgeIn = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`

/** Ladebalken: läuft mechanisch von links nach rechts durch. */
export const sweep = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(250%); }
`

/** Scroll-Fortschritt, gekoppelt an animation-timeline: scroll(). */
export const grow = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`
