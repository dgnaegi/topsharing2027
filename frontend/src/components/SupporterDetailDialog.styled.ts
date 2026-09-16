import styled from 'styled-components'

export const DetailImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: ${({ theme }) => theme.border};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const DetailName = styled.h3`
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const DetailQuote = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`
