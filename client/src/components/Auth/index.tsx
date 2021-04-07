import React from 'react'

import { Conteiner, LeftConteiner, TwitterLogo, RightConteiner, Wrapper, Icon, Messages, Buttons, SignupButton, LoginButton } from './styles'

const Auth: React.FC = () => {
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
            <SignupButton>
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
