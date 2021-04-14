import styled, { css } from 'styled-components'
import { ScTwitter } from '@styled-icons/evil'
import Button from '../../Globals/Button'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  padding: 0 20px;
`

export const Header = styled.div`
  font-size: 0;

  > h1 {
    font-size: 2rem;
    font-weight: bold;
    
    padding: 10px 0;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`

const iconCSS = css`
  width: 65px;
  height: 65px;

  margin-left: -15px;
`

export const Icon = styled(ScTwitter)`
  ${iconCSS}
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  
  text-align: center;

  > span {
    color: var(--twitter);
    margin-top: 30px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const Input = styled.input`
    width: 100%;
    height: 60px;
    padding-top: 5px;
    padding-left: 5px;
    outline: 0;

    background: rgba(0,0,0,0);

    font-size: 1.2rem;

    border-radius: 5px;
    border: 1px solid var(--outline);

    margin-bottom: 30px;

    &:focus {
      border: 2px solid var(--twitter);
    }
`

export const LoginButton = styled(Button)`
  width: 100%;
  height: 50px;

  padding: 0;
`
