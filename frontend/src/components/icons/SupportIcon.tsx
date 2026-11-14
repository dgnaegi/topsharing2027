import type { SVGProps } from 'react'
import type { SupportMode } from '../../data/supportOptions'

interface Props extends SVGProps<SVGSVGElement> {
  mode: SupportMode
}

/** Megafon = mithelfen, Anführungszeichen = öffentlich unterstützen, Herz = spenden. */
export function SupportIcon({ mode, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      {mode === 'help' && (
        <>
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </>
      )}
      {mode === 'quote' && (
        <>
          <path d="M3 21c3 0 7-1 7-8V5H2v8h5c0 3-1 5-4 5z" />
          <path d="M14 21c3 0 7-1 7-8V5h-8v8h5c0 3-1 5-4 5z" />
        </>
      )}
      {mode === 'give' && (
        <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
      )}
    </svg>
  )
}
