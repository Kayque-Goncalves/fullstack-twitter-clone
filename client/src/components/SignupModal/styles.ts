import { ScTwitter } from '@styled-icons/evil'
import { ArrowBack } from '@styled-icons/material-outlined'
import styled from 'styled-components'
import Button from '../Button'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  overflow: hidden;

  background: var(--modal);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 600px;
  background: var(--primary);
  border-radius: 15px;

  position: fixed;

  @media (max-width: 705px) {
    width: 100vw;
    height: 100vh;

    overflow-y: scroll;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 5px 20px;

  position: relative;
`

export const ArrowLeft = styled(ArrowBack)`
  width: 30px;
  height: 30px;

  left: 20px;
  top: 15px;
  padding: 0;
  position: absolute;

  border-radius: 50%;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`

export const NextButton = styled(Button)`
  width: 65px;
  height: 33px;

  right: 20px;
  top: 15px;
  padding: 0;
  position: absolute;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;

  margin-bottom: 180px;
  padding: 0;

  &:hover {
    background: var(--twitter-light-hover);
  }
`

export const Logo = styled(ScTwitter)`
  width: 50px;
  height: 50px;
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

export const PasswordInput = styled.input`
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

export const Body = styled.div`
  
  > form {
    display: flex;
    flex-direction: column;

    padding: 0 40px;
  }

  > form > h1 {
    padding: 20px 0;

    font-size: 1.5rem;
    font-weight: bold;
  }

  > form > span {
    color: var(--twitter);
    margin-bottom: 40px;

    &:hover {
      color: var(--twitter);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  > form > h2 {
    font-size: 1rem;
  }

  > form > p {
    color: var(--gray);
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  padding: 10px 40px 100px 40px;

  position: relative;

  > div {
    width: 260px;
    height: 55px;
    position: relative;

    &:first-child {
      width: 100%;
    }

    &:last-child {
      width: 60%;
      margin-left: 5px;
    }
  }

  > div > span {
    position: absolute;
    padding: 3px 0 0 5px;
    
    font-size: 0.85rem;
    font-weight: lighter;
    color: var(--gray);
  }

  > div > select {
    width: 95%;
    height: 55px;
    background: var(--primary);

    padding-top: 20px;

    left: 0;
    top: 0;

    border: 1px solid var(--outline);
    border-radius: 5px;
    outline: 0;

    &:focus {
      border: 2px solid var(--twitter);
    }
  }
`
