import styled from 'styled-components'

export const SkipLinkAnchor = styled.a`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  transform: translateY(-150%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  font-weight: 700;
  text-decoration: none;

  &:focus-visible {
    transform: translateY(0);
  }
`
