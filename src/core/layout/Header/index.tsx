import { Header } from './style'
import NavItems from './NavItems'
import {Logo} from '@/core/components'

const Navbar = () => {
  return (
    <Header>
      <div className='navbar'>
      <Logo />
      <NavItems />
      </div>
    </Header>
  )
}

export default Navbar
