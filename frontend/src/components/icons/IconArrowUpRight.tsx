import type { SVGProps } from 'react'

/** Pfeil nach rechts oben für externe Links. Als SVG, weil iOS „↗" als Emoji darstellt. */
export function IconArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      <line x1="6" y1="18" x2="17" y2="7" />
      <polyline points="8,6 18,6 18,16" />
    </svg>
  )
}
