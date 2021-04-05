import React from 'react'

import Main from '../Main'
import { Container, Wrapper } from './styles'

export const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  )
}
