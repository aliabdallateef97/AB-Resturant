import {ReactNode} from 'react'
import { ChildrenRoot, Root } from './style'
import Navbar from './Header'
import Footer from './Footer'

type PropsType={
    children:ReactNode
}


const Layout = ({children}:PropsType) => {
  return (
    <Root>
      <Navbar />
      <ChildrenRoot>
      {children}
      </ChildrenRoot>
      <Footer />
    </Root>
  )
}

export default Layout
