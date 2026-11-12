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
