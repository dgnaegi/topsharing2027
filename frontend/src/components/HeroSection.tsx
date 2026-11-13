import { ResponsivePhoto } from './ResponsivePhoto'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { PHOTO_BOTH } from '../data/photos'
import { HeroBand, Photo, Content, Title, Slogan, Bar, Claim } from './HeroSection.styled'
import { Actions, InstagramLink } from './HeroActions.styled'
import { IconInstagram } from './icons/IconInstagram'

export function HeroSection() {
  return (
    <HeroBand aria-labelledby="titel">
      <Photo>
        <ResponsivePhoto
          photo={PHOTO_BOTH}
          alt="Melanie Berner und Nicole Wyss, Kandidatinnen für den Regierungsrat Zürich 2027"
          sizes="(min-width: 1024px) min(540px, 38vw), 100vw"
          eager
        />
      </Photo>
      <Content>
        <Title id="titel">
          <Slogan>
            <Bar>Zusammen</Bar> <Bar>Mehr</Bar>
          </Slogan>
          <VisuallyHidden>: </VisuallyHidden>
          <Claim>Melanie Berner und Nicole Wyss in den Regierungsrat</Claim>
          <VisuallyHidden>, Regierungsratswahlen 2027, Kanton Zürich</VisuallyHidden>
        </Title>
        <Actions>
          <InstagramLink
            href="https://www.instagram.com/topsharing2027/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zusammen Mehr auf Instagram (öffnet in neuem Tab)"
          >
            <IconInstagram width="32" height="32" />
          </InstagramLink>
        </Actions>
      </Content>
    </HeroBand>
  )
}
