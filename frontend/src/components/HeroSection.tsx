import { Band, BandMeta } from './Band.styled'
import { Button } from './Button.styled'
import { Title, Slogan, Claim, Actions, MetaRight } from './HeroSection.styled'
import { IconInstagram } from './icons/IconInstagram'

export function HeroSection() {
  return (
    <Band $tone="signal" as="header">
      <BandMeta>
        <span>Regierungsratswahlen 2027</span>
        <MetaRight>
          <span>Kanton Zürich</span>
          <a
            href="https://www.instagram.com/topsharing2027/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Berner & Wyss 2027 auf Instagram"
          >
            <IconInstagram width="16" height="16" />
          </a>
        </MetaRight>
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
      </Actions>
    </Band>
  )
}
