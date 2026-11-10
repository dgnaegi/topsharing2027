import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { Portrait, Text, Names } from './TeamSection.styled'
import photo from '../assets/melanie-nicole-bw.webp'

export function TeamSection() {
  return (
    <Band $tone="paper" id="kandidatur">
      <BandMeta>
        <span>01 / Top-Sharing-Kandidatur</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col $to={6}>
          <Portrait
            src={photo}
            alt="Nicole Wyss und Melanie Berner, Kandidatinnen für den Regierungsrat Zürich 2027"
            width={1200}
            height={1799}
          />
        </Col>
        <Col $from={7}>
          <Display>zusammen mehr</Display>
          <Text>
            Wir sind überzeugt, dass zusammen mehr und bessere Ergebnisse erzielt werden können.
            Darum kandidieren wir gemeinsam für den Regierungsrat. Keine klassische
            Zweierkandidatur, eine gegen die andere, sondern als Team mit vereinten Kräften.
          </Text>
          <Text>
            Ein Regierungsamt übersteigt ein 100%-Pensum bei weitem. Das schliesst Menschen aus,
            häufig Frauen, die regelmässig unbezahlte Care-Arbeit leisten. Das muss sich ändern.
            Wird eine von uns gewählt, teilen wir uns Arbeit und Lohn.
          </Text>
          <Text>
            Top-Sharing bringt viele Vorteile: Zwei unterschiedliche Perspektiven, Erfahrungen und
            Kompetenzen fliessen in die Regierungsarbeit ein. Das verbessert die Qualität von
            Entscheidungen und erhöht die Kontinuität in der Amtsführung. Studien zeigen, dass
            Führungs-Tandems oft effizienter und fokussierter arbeiten. Das Vier-Augen-Prinzip
            stärkt Transparenz und Qualität. Zusammen mehr eben.
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
