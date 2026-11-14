import styled from 'styled-components'
import { media } from '../theme'
import { selectable } from '../selectable'

/** Liegt auf dem Signalband: Text und Linien schwarz, Details auf Papierfläche. */
export const Item = styled.li`
  border-top: ${({ theme }) => theme.borderStructural};

  &:last-child {
    border-bottom: ${({ theme }) => theme.borderStructural};
  }
`

/** Accordion nach WAI-ARIA: der Button steckt in der Überschrift, nicht umgekehrt. */
export const Heading = styled.h3`
  font: inherit;
`

export const Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: clamp(1.25rem, 2.2vw, 2rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-wrap: balance;
`

export const Trigger = styled.button`
  display: grid;
  grid-template-columns: 4rem 1fr 2rem;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  min-height: 44px;
  padding-block: ${({ theme }) => theme.spacing.lg};
  padding-inline: ${({ theme }) => theme.spacing.md};
  border: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
  ${selectable("[aria-expanded='true']")}
  /* Liegt auf dem Signalband: ohne Hover durchsichtig. */
  background: transparent;

  ${media.md} {
    grid-template-columns: 7rem 1fr 3rem;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

export const DateBlock = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0.9;
`

export const Day = styled.span`
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  letter-spacing: -0.04em;
`

export const Month = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Head = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  min-width: 0;
`

export const Meta = styled.span`
  font-weight: 500;
`

export const Details = styled.div`
  /* Gleich breit wie der schwarze Balken darüber, ohne eigenen Rahmen. */
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.paper};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  ${media.maxSm} {
    padding: ${({ theme }) => theme.spacing.md};
  }

  p {
    max-width: 68ch;
  }
`

export const When = styled.p`
  font-weight: 700;
`
