import { useRef, type KeyboardEvent } from 'react'
import { SUPPORT_OPTIONS, PANEL_ID, tabId, type SupportMode } from '../data/supportOptions'
import { SupportIcon } from './icons/SupportIcon'
import {
  TabList,
  Tab,
  IconBox,
  Text,
  Title,
  LongTitle,
  ShortTitle,
  Help,
} from './SupportPicker.styled'

interface Props {
  active: SupportMode
  onSelect: (mode: SupportMode) => void
}

/** Tabs nach WAI-ARIA: Pfeiltasten wechseln, nur der aktive Tab liegt in der Tab-Reihenfolge. */
export function SupportPicker({ active, onSelect }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const count = SUPPORT_OPTIONS.length
    const current = SUPPORT_OPTIONS.findIndex((o) => o.mode === active)
    const targets: Partial<Record<string, number>> = {
      ArrowRight: (current + 1) % count,
      ArrowLeft: (current - 1 + count) % count,
      Home: 0,
      End: count - 1,
    }
    const next = targets[e.key]
    if (next === undefined) return
    e.preventDefault()
    onSelect(SUPPORT_OPTIONS[next].mode)
    refs.current[next]?.focus()
  }

  return (
    <TabList role="tablist" aria-label="Wie möchtest du unterstützen?" onKeyDown={onKeyDown}>
      {SUPPORT_OPTIONS.map((o, i) => {
        const selected = o.mode === active
        return (
          <Tab
            key={o.mode}
            ref={(el) => {
              refs.current[i] = el
            }}
            type="button"
            role="tab"
            id={tabId(o.mode)}
            aria-selected={selected}
            aria-controls={PANEL_ID}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(o.mode)}
          >
            <IconBox>
              <SupportIcon mode={o.mode} />
            </IconBox>
            <Text>
              <Title>
                <LongTitle>{o.title}</LongTitle>
                <ShortTitle>{o.short}</ShortTitle>
              </Title>
              <Help>{o.help}</Help>
            </Text>
          </Tab>
        )
      })}
    </TabList>
  )
}
