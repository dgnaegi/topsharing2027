import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndex.modal};
`

export const DialogBox = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borderThick};
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
  width: 32px;
  height: 32px;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  font-weight: 900;
  font-size: 1rem;
  line-height: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`
