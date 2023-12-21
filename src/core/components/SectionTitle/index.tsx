import React,{ReactNode} from 'react'
import { Title } from './style'

type PropsType={
    children:ReactNode
}
const SectionTitle = ({children}:PropsType) => {
  return (
    <Title>
        <h2>{children}</h2>
    </Title>
  )
}

export default SectionTitle