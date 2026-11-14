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
        <Col $from={6}>
          <Display id="kandidatur-titel">
            top-sharing
            <VisuallyHidden>
              : Melanie Berner und Nicole Wyss kandidieren gemeinsam für den Zürcher Regierungsrat
            </VisuallyHidden>
          </Display>
          <Text>
            Wir sind überzeugt, dass wir zusammen mehr und Besseres erreichen. Darum kandidieren wir
            2027 gemeinsam für den Regierungsrat des Kantons Zürich. Nicht als Zweierkandidatur, bei
            der eine gegen die andere antritt, sondern als Team.
          </Text>
          <Text>
            Ein Regierungsamt geht weit über ein 100-Prozent-Pensum hinaus. Das schliesst Menschen
            aus, häufig Frauen, die unbezahlte Care-Arbeit leisten. Das muss sich ändern. Wird eine
            von uns gewählt, teilen wir uns Arbeit und Lohn.
          </Text>
          <Text>
            Top-Sharing heisst Jobsharing in einer Führungsposition. So bringen zwei Personen ihre
            Perspektiven, Erfahrungen und Kompetenzen in die Regierungsarbeit ein. Das macht
            Entscheide besser und sorgt für Kontinuität im Amt. Dazu kommt das Vier-Augen-Prinzip:
            Es schafft Transparenz. Zusammen Mehr eben.
          </Text>
          <Names>
            Nicole&nbsp;Wyss, Kantonsrätin AL
            <br />
            Melanie&nbsp;Berner, Alt-Kantonsrätin AL
          </Names>
        </Col>
      </Grid>
    </Band>
  )
}
