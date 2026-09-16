import styled from 'styled-components'

export const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: ${({ theme }) => theme.borderThick};
  z-index: ${({ theme }) => theme.zIndex.header};
`

export const Logo = styled.a`
  font-weight: 900;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`
