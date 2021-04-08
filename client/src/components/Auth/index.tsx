import React, { useContext } from 'react'

import { Conteiner, LeftConteiner, TwitterLogo, RightConteiner, Wrapper, Icon, Messages, Buttons, SignupButton, LoginButton } from './styles'

import { AuthContext } from '../../Contexts/AuthContext'

const Auth: React.FC = () => {
  const { openModal } = useContext(AuthContext)

  return (
    <Conteiner>
      <LeftConteiner>
        <TwitterLogo />
      </LeftConteiner>

      <RightConteiner>
        <Wrapper>
          <Icon />
          <Messages>
            <h1> Happening now </h1>
            <span> Join Twitter today. </span>
          </Messages>
          <Buttons>
            <SignupButton onClick={ openModal }>
              <span> Sign up </span>
            </SignupButton>
            <LoginButton outlined>
              <span> Log in </span>
            </LoginButton>
          </Buttons>
        </Wrapper>

      </RightConteiner>

    </Conteiner>
  )
}

export default Auth
