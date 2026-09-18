import styled from 'styled-components'

export const DetailImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: ${({ theme }) => theme.border};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const DetailName = styled.h3`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-right: 56px;
`

export const DetailQuote = styled.p`
  font-weight: 500;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.25;
`
