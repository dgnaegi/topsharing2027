import { useEffect, useState } from 'react'
import { CopyButton, CopyStatus } from './IbanCopyButton.styled'
import { IconCopy } from './icons/IconCopy'
import { IconCheck } from './icons/IconCheck'

interface Props {
  iban: string
}

type State = 'idle' | 'copied' | 'failed'

const MESSAGE: Record<State, string> = {
  idle: '',
  copied: 'IBAN kopiert.',
  failed: 'Bitte kopier die IBAN von Hand.',
}

export function IbanCopyButton({ iban }: Props) {
  const [state, setState] = useState<State>('idle')

  useEffect(() => {
    if (state === 'idle') return
    const t = window.setTimeout(() => setState('idle'), 3000)
    return () => clearTimeout(t)
  }, [state])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s/g, ''))
      setState('copied')
    } catch {
      setState('failed')
    }
  }

  return (
    <>
      <CopyButton type="button" onClick={handleCopy} aria-label="IBAN kopieren">
        {state === 'copied' ? <IconCheck /> : <IconCopy />}
      </CopyButton>
      <CopyStatus role="status" $visible={state === 'failed'}>
        {MESSAGE[state]}
      </CopyStatus>
    </>
  )
}
