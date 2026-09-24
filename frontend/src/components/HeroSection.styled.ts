import styled from 'styled-components'
import { Band, Display } from './Band.styled'
import { media } from '../theme'

export const HeroBand = styled(Band)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-height: 100svh;
`

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

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-left: auto;
  color: inherit;
  transition:
    color 0.15s ease-out,
    transform 0.1s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.signalDark};
    transform: translateY(-1px);
  }
`
