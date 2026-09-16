import styled from 'styled-components'
import { media } from '../theme'

export const AboutWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: ${({ theme }) => theme.spacing.xl};

  ${media.maxMd} {
    grid-template-columns: 1fr;
  }
`

export const AboutHeading = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const AboutText = styled.p`
  max-width: 640px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const CandidateBlock = styled.div`
  border-left: ${({ theme }) => theme.borderThick};
  padding-left: ${({ theme }) => theme.spacing.md};
`

export const CandidateName = styled.h3`
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`
