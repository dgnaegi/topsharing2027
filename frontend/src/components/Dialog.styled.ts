import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.signal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndex.modal};
`

export const DialogBox = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  border: ${({ theme }) => theme.borderStructural};
  max-width: 560px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  width: 44px;
  height: 44px;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.colors.paper};
  cursor: pointer;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.paper};
  }
`
