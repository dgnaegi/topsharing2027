import styled from 'styled-components'
import { Display } from './Band.styled'
import { media } from '../theme'

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: ${({ theme }) => theme.spacing.lg};
  font-weight: 400;
  font-size: inherit;
`

export const Slogan = styled(Display).attrs({ as: 'span', $size: 'xl' })`
  grid-column: 1 / -1;
  display: block;
  text-align: center;
  margin-left: 0;
  padding-left: 0.025em;
`

export const Claim = styled.span`
  grid-column: 1 / -1;
  align-self: end;
  margin-top: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  font-size: clamp(1.25rem, 2.2vw, 2rem);
  line-height: 1.2;

  ${media.md} {
    grid-column: 1 / 11;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: clamp(2rem, 5vw, 4rem);
`

export const ButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`
