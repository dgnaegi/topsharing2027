import styled, { css } from 'styled-components'
import { enter, nudgeIn } from '../motion'

export const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-block: -12px;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  vertical-align: middle;
  cursor: pointer;
  transition:
    color ${({ theme }) => theme.motion.fast} ease-out,
    transform 0.1s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.signalDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: none;
  }
`

export const CopyStatus = styled.span<{ $visible: boolean }>`
  ${({ $visible }) =>
    $visible
      ? css`
          display: block;
          font-weight: 700;
          font-size: 0.875rem;
          ${enter(0, nudgeIn)}
          animation-duration: 0.25s;
        `
      : css`
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        `}
`
