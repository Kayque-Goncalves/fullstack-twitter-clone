import React, { useContext, useState } from 'react'

import { AuthContext } from '../../Contexts/AuthContext'
import { Container, ModalContent, Header, ArrowLeft, NextButton, Logo, Body, Input, Footer } from './styles'

const SignupModal: React.FC = () => {
  const { closeModal } = useContext(AuthContext)

  const [signStep, setSignStep] = useState(1)

  function nextStep () {
    setSignStep(2)
  }

  if (signStep === 1) {
    return (
      <Container>

        <ModalContent>

          <Header>
            <ArrowLeft onClick={ closeModal }/>
            <Logo />
            <NextButton onClick={ nextStep }>Next</NextButton>
          </Header>

          <Body>
            <form>
              <h1>Create your account</h1>
              <Input placeholder="Name" />
              <Input placeholder="Phone" />
              <span>Use email instead</span>

              <h2>Date of birth</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquid possimus quisquam
                voluptatibus consequuntur.
              </p>
            </form>
          </Body>

          <Footer>
            <div>
              <span>Month</span>
              <select>
              <option></option>
                <option>October</option>
              </select>
            </div>

            <div>
              <span>Day</span>
              <select>
                <option></option>
                <option>31</option>
              </select>
            </div>

            <div>
              <span>Year</span>
              <select>
              <option></option>
                <option>2002</option>
              </select>
            </div>
          </Footer>

        </ModalContent>

      </Container>
    )
  } else if (signStep === 2) {
    return (
        <Container>

        <ModalContent>

          <Header>
            <Logo />
          </Header>

          <Body>
            <form>
              <h1>You will need a password</h1>
              <p>Make sure it is 8 characters or more</p>
              <Input placeholder="Password" />
              <Input placeholder="Confirm password" />

              {/* <FinishButton>Create Account</FinishButton> */}
            </form>
          </Body>

          <Footer>
          </Footer>

        </ModalContent>

      </Container>
    )
  }
}

export default SignupModal
