import { useRef, useState, type KeyboardEvent } from 'react'
import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { TabList, Tab, BioText, ProfileLink } from './AboutSection.styled'
import { CANDIDATES } from '../data/candidates'

const tabId = (i: number) => `kandidatin-tab-${i}`
const panelId = (i: number) => `kandidatin-panel-${i}`

export function AboutSection() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const current = CANDIDATES[active]

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp']
    if (!keys.includes(e.key)) return
    e.preventDefault()
    const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1
    const next = (active + step + CANDIDATES.length) % CANDIDATES.length
    setActive(next)
    tabs.current[next]?.focus()
  }

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
          <TabList role="tablist" aria-label="Kandidatinnen" onKeyDown={onKeyDown}>
            {CANDIDATES.map((c, i) => (
              <Tab
                key={c.name}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                type="button"
                role="tab"
                id={tabId(i)}
                aria-selected={i === active}
                aria-controls={panelId(i)}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
              >
                {c.name}
              </Tab>
            ))}
          </TabList>
        </Col>
        <Col
          $from={7}
          role="tabpanel"
          id={panelId(active)}
          aria-labelledby={tabId(active)}
          tabIndex={0}
        >
          {current.bio.map((paragraph) => (
            <BioText key={paragraph}>{paragraph}</BioText>
          ))}
          <ProfileLink>
            <a href={current.kantonsratUrl} target="_blank" rel="noopener noreferrer">
              {current.name} im Kantonsrat
            </a>
          </ProfileLink>
        </Col>
      </Grid>
    </Band>
  )
}
