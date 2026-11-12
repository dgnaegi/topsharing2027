import { BandMeta } from './Band.styled'
import { Title, Slogan, Claim, Actions, HeroBand, InstagramLink } from './HeroSection.styled'
import { IconInstagram } from './icons/IconInstagram'

export function HeroSection() {
  return (
    <HeroBand $tone="signal">
      <BandMeta>
        <span>Regierungsratswahlen 2027</span>
        <span>Kanton Zürich</span>
      </BandMeta>
      <Title>
        <Slogan>zusammen mehr</Slogan>
        <Claim>Nicole Wyss und Melanie Berner gemeinsam in den Regierungsrat</Claim>
      </Title>
      <Actions>
        <InstagramLink
          href="https://www.instagram.com/topsharing2027/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="zusammen mehr: Berner & Wyss 2027 auf Instagram"
        >
          <IconInstagram width="32" height="32" />
        </InstagramLink>
      </Actions>
    </HeroBand>
  )
}
