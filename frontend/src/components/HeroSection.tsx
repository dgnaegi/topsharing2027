import { HeroPicture } from './HeroPicture'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { HeroBand, Photo, Content, Title, Slogan, Bar, Claim } from './HeroSection.styled'
import { Actions, InstagramLink } from './HeroActions.styled'
import { IconInstagram } from './icons/IconInstagram'

export function HeroSection() {
  return (
    <HeroBand aria-labelledby="titel">
      <Photo>
        <HeroPicture />
      </Photo>
      <Content>
        <Title id="titel">
          <Slogan>
            <Bar>Zusammen</Bar> <Bar>Mehr</Bar>
          </Slogan>
          <VisuallyHidden>: </VisuallyHidden>
          <Claim>Nicole&nbsp;Wyss und Melanie&nbsp;Berner gemeinsam in den Regierungsrat</Claim>
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
