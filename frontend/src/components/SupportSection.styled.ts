import styled from 'styled-components'

/** Sprungziel für /#spenden: liegt direkt über den Kacheln, damit diese im Blick sind. */
export const DonateAnchor = styled.span`
  display: block;
  height: 0;
  scroll-margin-top: ${({ theme }) => theme.spacing.lg};
`
