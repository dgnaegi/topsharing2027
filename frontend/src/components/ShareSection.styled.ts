import styled from 'styled-components'

export const ShareActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`

export const ShareButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const ShareStatus = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  min-height: 1em;
`
