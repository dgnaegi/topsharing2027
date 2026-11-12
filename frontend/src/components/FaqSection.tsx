import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { FaqList, Question, Answer } from './FaqSection.styled'
import { FAQ } from '../data/faq'

export function FaqSection() {
  return (
    <Band $tone="paper" id="fragen" aria-labelledby="fragen-titel">
      <BandMeta>
        <span>07 / Fragen</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display id="fragen-titel">
            fragen
            <VisuallyHidden> zur Regierungsratswahl Zürich 2027</VisuallyHidden>
          </Display>
        </Col>
        <Col $from={6}>
          <FaqList>
            {FAQ.map((item) => (
              <div key={item.question}>
                <Question>{item.question}</Question>
                <Answer>{item.answer}</Answer>
              </div>
            ))}
          </FaqList>
        </Col>
      </Grid>
    </Band>
  )
}
