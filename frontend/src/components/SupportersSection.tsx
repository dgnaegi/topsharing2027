import { useState } from 'react'
import { SectionLabel } from './Layout.styled'
import { getSupportersSortedAlphabetically, type Supporter } from '../data/supporters'
import {
  SupportersWrapper,
  SupportersList,
  SupporterItem,
  SupporterName,
  QuoteTrigger,
} from './SupportersSection.styled'
import { SupporterDetailDialog } from './SupporterDetailDialog'

export function SupportersSection() {
  const supporters = getSupportersSortedAlphabetically()
  const [selected, setSelected] = useState<Supporter | null>(null)

  return (
    <SupportersWrapper>
      <SectionLabel>03. Unterstützende</SectionLabel>
      <SupportersList>
        {supporters.map((supporter) => (
          <SupporterItem key={supporter.id}>
            {supporter.quote ? (
              <QuoteTrigger onClick={() => setSelected(supporter)}>
                {supporter.firstName} {supporter.lastName}
              </QuoteTrigger>
            ) : (
              <SupporterName>
                {supporter.firstName} {supporter.lastName}
              </SupporterName>
            )}
          </SupporterItem>
        ))}
      </SupportersList>

      {selected && <SupporterDetailDialog supporter={selected} onClose={() => setSelected(null)} />}
    </SupportersWrapper>
  )
}
