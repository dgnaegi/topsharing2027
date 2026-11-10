import { Band, BandMeta, Grid, Col, Lead } from './Band.styled'
import { ProgramHeading, ProgramList, Aside } from './ProgramSection.styled'

const GOALS = [
  'es im ganzen Kanton bezahlbaren Wohnraum gibt und die Verdrängung gestoppt wird',
  'alle einen Lohn haben, der zum Leben reicht',
  'Superreiche und Firmen gerecht besteuert werden',
  'eine gute Gesundheitsversorgung keine Frage des Portemonnaies ist',
  'mit einer starken und inklusiven Volksschule Chancengerechtigkeit in der Bildung sichergestellt wird',
  'Grundrechte für alle Menschen gelten, die im Kanton Zürich wohnen',
]

export function ProgramSection() {
  return (
    <Band $tone="ink" id="programm">
      <BandMeta>
        <span>02 / Politisches Programm</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <ProgramHeading>politisches programm</ProgramHeading>
        </Col>
        <Col $to={6}>
          <Lead>
            Als Regierungsrätinnen werden wir für einen solidarischen Kanton Zürich kämpfen. Einen
            Kanton, den wir uns alle leisten können und der endlich vorwärts macht, damit:
          </Lead>
        </Col>
        <Col $from={6}>
          <ProgramList>
            {GOALS.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ProgramList>
          <Aside>
            <strong>Ausserdem:</strong> Wir sind die einzigen Kandidierenden, die in der Stadt
            Zürich wohnen. Die Hauptstadt des Kantons gehört in der Regierung vertreten.
          </Aside>
        </Col>
      </Grid>
    </Band>
  )
}
