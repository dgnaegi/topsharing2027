import { useState } from 'react'
import type { CampaignEvent } from '../data/events'
import { eventDateParts } from '../utils/eventDate'
import { NewTabHint } from './NewTabHint'
import { VisuallyHidden } from './VisuallyHidden.styled'
import {
  Item,
  Heading,
  Trigger,
  DateBlock,
  Day,
  Month,
  Head,
  Title,
  Meta,
  Details,
  When,
} from './EventItem.styled'
import { Toggle } from './EventToggle.styled'

interface Props {
  event: CampaignEvent
}

/** Ein Termin als Accordion-Zeile: Klick auf die Zeile klappt die Details auf. */
export function EventItem({ event }: Props) {
  const [open, setOpen] = useState(false)
  const date = eventDateParts(event.start)
  const panelId = `termin-${event.slug}`

  return (
    <Item>
      <Heading>
        <Trigger
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          <DateBlock aria-hidden="true">
            <Day>{date.day}</Day>
            <Month>{date.month}</Month>
          </DateBlock>
          <Head>
            <Title>{event.title}</Title>
            <Meta>
              <VisuallyHidden>{date.long}, </VisuallyHidden>
              {event.venue}, {event.address}
            </Meta>
          </Head>
          <Toggle $open={open} aria-hidden="true" />
        </Trigger>
      </Heading>
      <Details id={panelId} hidden={!open}>
        <When>
          {date.long}
          <br />
          {event.venue}, {event.address}
        </When>
        {event.description.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {event.url && (
          <p>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              Link
              <VisuallyHidden> zum Termin {event.title}</VisuallyHidden>
              <NewTabHint />
            </a>
          </p>
        )}
      </Details>
    </Item>
  )
}
