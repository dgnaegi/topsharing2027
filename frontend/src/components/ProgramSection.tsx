import { Band, BandMeta, Grid, Col, Lead } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { ProgramHeading, ProgramList, GoalNumber, Aside } from './ProgramSection.styled'

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
    <Band $tone="ink" id="programm" aria-labelledby="programm-titel">
      <BandMeta>
        <span>02 / Programm</span>
      </BandMeta>
      <Grid>
        <Col>
          <ProgramHeading id="programm-titel">
            politisches programm
            <VisuallyHidden> für den Regierungsrat des Kantons Zürich</VisuallyHidden>
          </ProgramHeading>
        </Col>
        <Col $to={6}>
          <Lead>
            Als Regierungsrätinnen werden wir für einen solidarischen Kanton Zürich kämpfen. Einen
            Kanton, den wir uns alle leisten können und der endlich vorwärtsmacht, damit:
          </Lead>
        </Col>
        <Col $from={6}>
          <ProgramList role="list">
            {GOALS.map((goal, i) => (
              <li key={goal}>
                <GoalNumber aria-hidden="true">{String(i + 1).padStart(2, '0')}</GoalNumber>
                {goal}
              </li>
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
