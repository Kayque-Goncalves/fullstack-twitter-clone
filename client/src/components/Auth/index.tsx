import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

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
            <Link to="/login">
              <LoginButton outlined>
                <span> Log in </span>
              </LoginButton>
            </Link>
          </Buttons>
        </Wrapper>

      </RightConteiner>

    </Conteiner>
  )
}

export default Auth
