import React, { useContext } from 'react'

import { AuthContext } from '../../../Contexts/AuthContext'
import { Container, Content, Header, Icon, Body, Input, LoginButton } from './styles'

const Login: React.FC = () => {
  const { openModal } = useContext(AuthContext)

  return (
    <Container>
      <Content>

        <Header>
          <Icon />
          <h1> Log in to Twitter </h1>
        </Header>

        <Body>
          <form>
            <Input name="loginOption" placeholder="Phone or Email" required />
            <Input type="password" name="password" placeholder="Password" required />
            <LoginButton> Log in </LoginButton>

          </form>

          <span onClick={ openModal }> Sign up for Twitter </span>
        </Body>

      </Content>
    </Container>
  )
}

export default Login
