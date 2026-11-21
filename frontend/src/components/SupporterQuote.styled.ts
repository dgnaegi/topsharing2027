import styled from 'styled-components'
import { media } from '../theme'
import { fadeIn } from '../motion'

export const Figure = styled.figure`
  scroll-margin-top: calc(${({ theme }) => theme.navHeight} + ${({ theme }) => theme.spacing.md});
`

export const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  ${media.sm} {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} ${({ theme }) => theme.motion.mid} ${({ theme }) => theme.motion.ease};
  }
`

export const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border: ${({ theme }) => theme.borderStructural};
  background: ${({ theme }) => theme.colors.muted};
`

export const Quote = styled.blockquote`
  font-weight: 500;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  max-width: 32ch;
`

export const Caption = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: ${({ theme }) => theme.border};
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Name = styled.span`
  display: block;
  font-weight: 700;
`

export const Role = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs};
`
