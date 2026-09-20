import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { Portrait, Text, Names } from './TeamSection.styled'
import photo from '../assets/melanie-nicole-bw.webp'

export function TeamSection() {
  return (
    <Band $tone="paper">
      <BandMeta>
        <span>01 / Kandidatur</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col $to={6}>
          <Portrait src={photo} alt="Melanie Berner und Nicole Wyss" width={1200} height={1799} />
        </Col>
        <Col $from={7}>
          <Display>gemeinsam mit links</Display>
          <Text>
            Was sich eine von uns alleine nicht zumuten möchte, schaffen wir zu zweit mit links.
            Darum kandidieren wir gemeinsam für den Regierungsrat. Keine klassische
            Zweierkandidatur, eine gegen die andere, sondern mit vereinten Kräften.
          </Text>
          <Text>
            Ein Regierungsamt übersteigt ein 100%-Pensum bei weitem. Das schliesst Menschen aus,
            häufig Frauen, die regelmässig unbezahlte Care-Arbeit leisten. Das muss sich ändern.
            Wird eine von uns gewählt, teilen wir uns die Arbeit auf.
          </Text>
          <Text>
            Unser Top-Sharing beginnt nicht bei einer allfälligen Wahl. Es hat mit der Nomination
            begonnen. Radikal sozial eben.
          </Text>
          <Names>
            Nicole Wyss, Kantonsrätin AL
            <br />
            Melanie Berner, Alt-Kantonsrätin AL
          </Names>
        </Col>
      </Grid>
    </Band>
  )
}
