import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { Portrait, Text, Names } from './TeamSection.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import photo from '../assets/melanie-nicole-bw.webp'

export function TeamSection() {
  return (
    <Band $tone="paper" id="kandidatur" aria-labelledby="kandidatur-titel">
      <BandMeta>
        <span>01 / Kandidatur</span>
      </BandMeta>
      <Grid>
        <Col $to={6}>
          <Portrait
            src={photo}
            alt="Nicole Wyss und Melanie Berner, Kandidatinnen für den Regierungsrat Zürich 2027"
            width={1200}
            height={1799}
            loading="lazy"
            decoding="async"
          />
        </Col>
        <Col $from={7}>
          <Display id="kandidatur-titel">
            top-sharing
            <VisuallyHidden>
              : Melanie Berner und Nicole Wyss kandidieren gemeinsam für den Zürcher Regierungsrat
            </VisuallyHidden>
          </Display>
          <Text>
            Wir sind überzeugt, dass Zusammen Mehr und bessere Ergebnisse erzielt werden können.
            Darum kandidieren wir bei den Regierungsratswahlen 2027 gemeinsam für den Regierungsrat
            des Kantons Zürich. Keine klassische Zweierkandidatur, eine gegen die andere, sondern
            als Team mit vereinten Kräften.
          </Text>
          <Text>
            Ein Regierungsamt übersteigt ein 100%-Pensum bei weitem. Das schliesst Menschen aus,
            häufig Frauen, die regelmässig unbezahlte Care-Arbeit leisten. Das muss sich ändern.
            Wird eine von uns gewählt, teilen wir uns Arbeit und Lohn.
          </Text>
          <Text>
            Top-Sharing heisst Jobsharing in einer Führungsposition. Das bringt viele Vorteile: Zwei
            unterschiedliche Perspektiven, Erfahrungen und Kompetenzen fliessen in die
            Regierungsarbeit ein. Das verbessert die Qualität von Entscheidungen und erhöht die
            Kontinuität in der Amtsführung. Studien zeigen, dass Führungs-Tandems oft effizienter
            und fokussierter arbeiten. Das Vier-Augen-Prinzip stärkt Transparenz und Qualität.
            Zusammen Mehr eben.
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
