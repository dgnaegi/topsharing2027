import { Band, BandMeta } from './Band.styled'
import { Button } from './Button.styled'
import { Title, Slogan, Claim, Actions, ButtonContent } from './HeroSection.styled'
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
        <Button
          as="a"
          href="https://www.instagram.com/topsharing2027/"
          target="_blank"
          rel="noopener noreferrer"
          $variant="onSignal"
        >
          <ButtonContent>
            <IconInstagram width="18" height="18" />
            Instagram
          </ButtonContent>
        </Button>
      </Actions>
    </Band>
  )
}
