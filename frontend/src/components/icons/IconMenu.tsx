import type { SVGProps } from 'react'
import { MenuSvg } from './IconMenu.styled'

type Props = Omit<SVGProps<SVGSVGElement>, 'ref'> & { open: boolean }

export function IconMenu({ open, ...props }: Props) {
  return (
    <MenuSvg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      aria-hidden="true"
      $open={open}
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </MenuSvg>
  )
}
