import { SectionLabel } from './Layout.styled'
import {
  AboutWrapper,
  AboutGrid,
  AboutHeading,
  AboutText,
  CandidateBlock,
  CandidateName,
} from './AboutSection.styled'

export function AboutSection() {
  return (
    <AboutWrapper>
      <SectionLabel>02. Anliegen</SectionLabel>
      <AboutGrid>
        <div>
          <AboutHeading>Was uns wichtig ist</AboutHeading>
          <AboutText>
            {/* Platzhaltertext. Ersetzen durch die tatsächlichen Anliegen von Melanie Berner
                und Nicole Wyss zur Regierungsratswahl Zürich 2027. */}
            Melanie Berner und Nicole Wyss kandidieren 2027 gemeinsam für den Regierungsrat des
            Kantons Zürich. Hier steht, wofür sie stehen und was sie als Kandidierende für den
            Regierungsrat bewegen wollen.
          </AboutText>
          <AboutText>
            Platzhaltertext: Absatz zu den konkreten Schwerpunkten der Kandidatur. Wird ersetzt,
            sobald die Inhalte feststehen.
          </AboutText>
        </div>
        <div>
          <CandidateBlock>
            <CandidateName>Melanie Berner</CandidateName>
            <AboutText>Platzhaltertext: kurzes Portrait von Melanie Berner.</AboutText>
          </CandidateBlock>
          <CandidateBlock>
            <CandidateName>Nicole Wyss</CandidateName>
            <AboutText>Platzhaltertext: kurzes Portrait von Nicole Wyss.</AboutText>
          </CandidateBlock>
        </div>
      </AboutGrid>
    </AboutWrapper>
  )
}
