import type { SVGProps } from 'react'

export function IconCopy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      <rect x="9" y="9" width="12" height="12" />
      <path d="M15 5V3H3v12h2" />
    </svg>
  )
}
