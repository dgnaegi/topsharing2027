import styled from 'styled-components'
import { Display } from './Band.styled'

export const DonateHeading = styled(Display)`
  color: ${({ theme }) => theme.colors.signal};
`

export const Details = styled.dl`
  border: 2px solid ${({ theme }) => theme.colors.paper};
  padding: ${({ theme }) => theme.spacing.xl};
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};

  dt {
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.signal};
  }

  dd {
    font-weight: 500;
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    overflow-wrap: anywhere;
  }
`

export const QrBox = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.paper};
  padding: ${({ theme }) => theme.spacing.md};
  line-height: 0;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`
