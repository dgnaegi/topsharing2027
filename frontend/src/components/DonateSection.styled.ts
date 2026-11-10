import styled from 'styled-components'

/** Spenden steht auf einem Signalband: Text und Rahmen schwarz, QR-Code auf Papierfläche. */
export const Details = styled.dl`
  border: ${({ theme }) => theme.borderStructural};
  padding: ${({ theme }) => theme.spacing.xl};
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  dt {
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
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
  border: ${({ theme }) => theme.border};
  padding: ${({ theme }) => theme.spacing.md};
  line-height: 0;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`
