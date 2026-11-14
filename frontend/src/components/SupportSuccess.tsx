import { useEffect, useRef } from 'react'
import { Form, StatusText } from './Form.styled'
import { SuccessTitle } from './SupportSuccess.styled'

interface Props {
  isPublic: boolean
}

/**
 * Ersetzt das Formular nach dem Senden. Der Fokus wandert hierher, sonst landet er nach dem
 * Verschwinden des Buttons im Nichts. Das Formular schrumpft stark: darum in Sicht scrollen.
 */
export function SupportSuccess({ isPublic }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.focus({ preventScroll: true })
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ block: 'nearest', behavior: smooth ? 'smooth' : 'instant' })
  }, [])

  return (
    <Form as="div" role="status" tabIndex={-1} ref={ref}>
      <SuccessTitle>danke.</SuccessTitle>
      <StatusText>
        {isPublic
          ? 'Zitat gesendet. Bevor es mit deinem Namen erscheint, schauen wir kurz drüber.'
          : 'Du bist dabei. Wir melden uns bei dir.'}
      </StatusText>
    </Form>
  )
}
