import { useEffect, useState } from 'react'
import { CopyBtn } from './CopyButton.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'

interface Props {
  value: string
  label: string
}

/** Kleiner Kopierknopf neben einem Wert. Zeigt kurz „Kopiert" und meldet das auch Screenreadern. */
export function CopyButton({ value, label }: Props) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = window.setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  if (typeof navigator === 'undefined' || !navigator.clipboard) return null

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // Ohne Berechtigung bleibt der Wert zum Abschreiben stehen.
    }
  }

  return (
    <>
      <CopyBtn type="button" onClick={copy} aria-label={label} $copied={copied}>
        {copied ? 'Kopiert' : 'Kopieren'}
      </CopyBtn>
      <VisuallyHidden role="status">{copied ? `${label}: kopiert.` : ''}</VisuallyHidden>
    </>
  )
}
