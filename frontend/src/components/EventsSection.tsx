import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { EventItem } from './EventItem'
import { EventList } from './EventsSection.styled'
import { EVENTS } from '../data/events'
import { isUpcoming } from '../utils/eventDate'

export function EventsSection() {
  const upcoming = EVENTS.filter((e) => isUpcoming(e.start)).sort((a, b) =>
    a.start.localeCompare(b.start),
  )

  return (
    <Band $tone="signal" id="veranstaltungen" aria-labelledby="veranstaltungen-titel">
      <BandMeta>
        <span>05 / Veranstaltungen</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display id="veranstaltungen-titel">
            veranstaltungen
            <VisuallyHidden>
              : Nicole Wyss und Melanie Berner live, Regierungsratswahl Zürich 2027
            </VisuallyHidden>
          </Display>
        </Col>
        <Col>
          {upcoming.length > 0 ? (
            <EventList role="list">
              {upcoming.map((e) => (
                <EventItem key={e.slug} event={e} />
              ))}
            </EventList>
          ) : (
            <Lead>Neue Termine folgen bald.</Lead>
          )}
        </Col>
      </Grid>
    </Band>
  )
}
