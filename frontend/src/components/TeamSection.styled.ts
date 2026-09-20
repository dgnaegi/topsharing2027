import styled from 'styled-components'

export const Portrait = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 7 / 8;
  object-fit: cover;
  object-position: 50% 17%;
  border: ${({ theme }) => theme.borderStructural};
  filter: grayscale(1) contrast(1.15);
`

export const Text = styled.p`
  max-width: 68ch;
  margin-top: ${({ theme }) => theme.spacing.lg};
`

export const Names = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`
