import { Link } from 'react-router-dom'
import { HeaderBar, Logo } from './Header.styled'

export function Header() {
  return (
    <HeaderBar>
      <Logo as={Link} to="/">
        Berner &amp; Wyss 2027
      </Logo>
    </HeaderBar>
  )
}
