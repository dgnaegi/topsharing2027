import { useState } from 'react'
import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { NameList, NameButton, BioText, ProfileLink } from './AboutSection.styled'
import { AboutPhoto } from './AboutPhoto'
import { CANDIDATES, type Candidate } from '../data/candidates'

export function AboutSection() {
  const [active, setActive] = useState<Candidate['slug']>('nicole-wyss')
  const current = CANDIDATES.find((c) => c.slug === active) ?? CANDIDATES[0]

  return (
    <Band $tone="paper" id="ueber-uns">
      <BandMeta>
        <span>05 / Über uns</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display>über uns</Display>
        </Col>
        <Col $to={6}>
          <AboutPhoto active={active} onSelect={setActive} />
        </Col>
        <Col $from={6}>
          <NameList>
            {CANDIDATES.map((c) => (
              <NameButton
                key={c.slug}
                type="button"
                aria-pressed={c.slug === active}
                aria-controls="kandidatin-bio"
                onClick={() => setActive(c.slug)}
              >
                {c.name}
              </NameButton>
            ))}
          </NameList>
          <div id="kandidatin-bio" aria-live="polite">
            {current.bio.map((paragraph) => (
              <BioText key={paragraph}>{paragraph}</BioText>
            ))}
            <ProfileLink>
              <a href={current.kantonsratUrl} target="_blank" rel="noopener noreferrer">
                {current.name} im Kantonsrat
              </a>
            </ProfileLink>
          </div>
        </Col>
      </Grid>
    </Band>
  )
}
