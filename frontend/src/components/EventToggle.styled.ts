import styled from 'styled-components'

/** Plus wird beim Öffnen zum Minus: Zustand nicht nur über Farbe. */
export const Toggle = styled.span<{ $open: boolean }>`
  position: relative;
  justify-self: end;
  width: 24px;
  height: 24px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 10px 0;
    background: currentColor;
    transition: transform ${({ theme }) => theme.motion.fast} ease-out;
  }

  &::after {
    transform: rotate(${({ $open }) => ($open ? '0deg' : '90deg')});
  }
`
