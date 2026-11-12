import styled from 'styled-components'
import { enter } from '../motion'

export const SuccessTitle = styled.p`
  ${enter(0)}
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  margin-left: -0.04em;
`
