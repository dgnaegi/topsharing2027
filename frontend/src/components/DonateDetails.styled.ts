import styled from 'styled-components'
import { media } from '../theme'

/** Mobil QR-Code über den Angaben, ab Tablet daneben. */
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`

export const QrBox = styled.span`
  flex: none;
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.paper};
  border: ${({ theme }) => theme.borderStructural};
  padding: ${({ theme }) => theme.spacing.sm};
  line-height: 0;

  img {
    display: block;
    width: 180px;
    max-width: 100%;
    height: auto;
  }
`

export const Details = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;

  ${media.sm} {
    grid-template-columns: 9rem 1fr;
    column-gap: ${({ theme }) => theme.spacing.lg};
  }

  dt {
    padding-top: 0.25em;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    font-weight: 500;
    font-size: clamp(1rem, 1.6vw, 1.25rem);
    overflow-wrap: anywhere;
  }
`
