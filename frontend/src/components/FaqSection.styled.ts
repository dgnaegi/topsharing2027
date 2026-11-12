import styled from 'styled-components'

export const FaqList = styled.dl`
  border-top: 2px solid ${({ theme }) => theme.colors.ink};

  div {
    padding-block: ${({ theme }) => theme.spacing.md};
    border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  }
`

export const Question = styled.dt`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 700;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.3;
`

export const Answer = styled.dd`
  max-width: 60ch;
`
