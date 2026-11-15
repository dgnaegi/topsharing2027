import type { SVGProps } from 'react'

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      <polyline points="4,12.5 9.5,18 20,6.5" />
    </svg>
  )
}
