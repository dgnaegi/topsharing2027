import { Band, BandMeta } from './Band.styled'
import { Button } from './Button.styled'
import { Title, Slogan, Claim, Actions, InstagramLink } from './HeroSection.styled'
import { IconInstagram } from './icons/IconInstagram'

export function HeroSection() {
  return (
    <Band $tone="signal" as="header">
      <BandMeta>
        <span>Regierungsratswahlen 2027</span>
        <span>Kanton Zürich</span>
      </BandMeta>
      <Title>
        <Slogan>radikal sozial</Slogan>
        <Claim>Melanie Berner &amp; Nicole Wyss in den Regierungsrat</Claim>
      </Title>
      <Actions>
        <Button as="a" href="#unterstuetzen" $variant="onSignal">
          Unterstützen
        </Button>
        <Button as="a" href="#spenden" $variant="onSignal">
          Spenden
        </Button>
        <InstagramLink
          href="https://www.instagram.com/topsharing2027/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Berner & Wyss 2027 auf Instagram"
        >
          <IconInstagram width="32" height="32" />
        </InstagramLink>
      </Actions>
    </Band>
  )
}
