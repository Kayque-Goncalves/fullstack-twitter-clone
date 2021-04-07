import { ScTwitter } from '@styled-icons/evil'
import styled, { css } from 'styled-components'
import Button from '../Button'

export const Conteiner = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

export const LeftConteiner = styled.div`
  display: flex;
  width: 53%;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background: var(--twitter);

  @media (max-width: 1000px) {
    margin-top: -80px;
    width: 100vw;
    height: 60vh;
  }
`

export const TwitterLogo = styled(ScTwitter)`
  width: 100vw;
  max-height: 400px;

  padding: 32px;
`

export const RightConteiner = styled.div`
  display: flex;
  width: 47%; 
  padding: 16px;

  right: 0;

  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 60vw;
    margin: 0 20vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 600px;

  padding: 20px;
`

const iconCSS = css`
  width: 75px;
  height: 75px;
`

export const Icon = styled(ScTwitter)`
  ${iconCSS} 
  margin-left: -10px;
`

export const Messages = styled.div`
  margin-bottom: 40px;

  > h1 {
    font-family: Verdana;
    font-size: 4rem;
    font-weight: bold;

    margin-top: 50px;
    margin-bottom: 49px;
  }

  > span {
    font-family: Verdana;
    font-size: 2rem;
    font-weight: bold;

    margin-bottom: 24px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`

export const SignupButton = styled(Button)`
  max-width: 400px;
  height: 45px;
  padding: 0;

  margin-bottom: 30px;

  @media (max-width: 1000px) {
    width: 250px;
  }
`

export const LoginButton = styled(Button)`
  max-width: 400px;
  height: 45px;
  padding: 0;

  margin-bottom: 20px;

  @media (max-width: 1000px) {
    margin-left: 20px;
    width: 250px;
  }
`
