import { useState } from 'react'
import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { NameList, NameButton, Bio, BioSwap, BioText, ProfileLink } from './AboutSection.styled'
import { AboutPhoto } from './AboutPhoto'
import { NewTabHint } from './NewTabHint'
import { CANDIDATES, type Candidate } from '../data/candidates'

export function AboutSection() {
  const [active, setActive] = useState<Candidate['slug']>('nicole-wyss')

  return (
    <Band $tone="paper" id="ueber-uns" aria-labelledby="ueber-uns-titel">
      <BandMeta>
        <span>05 / Über uns</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display id="ueber-uns-titel">
            über uns
            <VisuallyHidden>: Nicole Wyss und Melanie Berner</VisuallyHidden>
          </Display>
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
          <Bio id="kandidatin-bio" aria-live="polite">
            {/* Beide Bios bleiben im DOM, damit Suchmaschinen beide Texte indexieren. */}
            {CANDIDATES.map((c) => (
              <BioSwap key={c.slug} hidden={c.slug !== active}>
                {c.bio.map((paragraph) => (
                  <BioText key={paragraph}>{paragraph}</BioText>
                ))}
                <ProfileLink>
                  <a href={c.kantonsratUrl} target="_blank" rel="noopener noreferrer">
                    {c.name} im Kantonsrat
                    <NewTabHint />
                  </a>
                </ProfileLink>
              </BioSwap>
            ))}
          </Bio>
        </Col>
      </Grid>
    </Band>
  )
}
