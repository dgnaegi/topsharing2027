import styled from 'styled-components'

/**
 * Drei Linien, die sich zum Kreuz drehen. Drehpunkt ist die Mitte der Zeichenfläche: erst
 * auf die Mittellinie schieben, dann drehen.
 */
export const MenuSvg = styled.svg<{ $open: boolean }>`
  line {
    transform-box: view-box;
    transform-origin: 12px 12px;
    transition: transform 0.25s ${({ theme }) => theme.motion.ease};
  }

  line:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'rotate(45deg) translateY(6px)' : 'none')};
  }

  line:nth-child(2) {
    transform: ${({ $open }) => ($open ? 'scaleX(0)' : 'none')};
    transition-duration: 0.15s;
  }

  line:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'rotate(-45deg) translateY(-6px)' : 'none')};
  }
`
