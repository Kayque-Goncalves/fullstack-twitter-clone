/* eslint-disable multiline-ternary */
import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../../Contexts/AuthContext'
import { Container, ModalContent, Header, ArrowLeft, NextButton, Logo, Body, Input, PasswordInput, SubmitButton, Footer } from './styles'
import { signup } from '../../actions/auth'

let type = 'password'

const SignupModal: React.FC = () => {
  const { closeModal } = useContext(AuthContext)

  const dispatch = useDispatch()
  const history = useHistory()

  const [signStep, setSignStep] = useState(1)
  const [userSignOption, setUserSignOption] = useState(0)
  const [formData, setFormData] = useState({ name: '', loginOption: '', month: '', day: '', year: '', password: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)

  function handleChange (e: { target: { name: string; value: string } }) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit (e: { preventDefault: () => void }) {
    e.preventDefault()

    dispatch(signup(formData, history))
  }

  function nextStep () {
    setSignStep(2)
  }

  function prevStep () {
    setSignStep(1)
  }

  function changeUserSignOption () {
    if (userSignOption === 0) setUserSignOption(1)
    if (userSignOption === 1) setUserSignOption(0)
  }

  function handleShowPassword () {
    if (!showPassword) setShowPassword(true)
    if (showPassword) setShowPassword(false)

    !showPassword ? type = 'password' : type = 'text'
  }

  return (
      <Container>

        <ModalContent>

          <Header>
            { signStep === 1 ? <ArrowLeft onClick={ closeModal }/> : <ArrowLeft onClick={ prevStep }/> }
            <Logo />
            { signStep === 1 && (formData.name.length > 0 && formData.month.length > 0 && formData.day.length > 0 && formData.year.length > 0) && <NextButton onClick={ nextStep }>Next</NextButton> }
          </Header>

          <Body>
            <form>
              { signStep === 1 ? (
                <>
                  <h1>Create your account</h1>
                  <Input name="name" placeholder="Name" required onChange={ handleChange } value={ formData?.name } />
                  { userSignOption === 0 ? <Input name="loginOption" placeholder="Phone" onChange={ handleChange } value={ formData?.loginOption } /> : <Input name="loginOption" placeholder="Email" required onChange={ handleChange } value={ formData?.loginOption } /> }
                  <span onClick={ changeUserSignOption }>Use { userSignOption === 0 ? 'Email' : 'Phone' } instead</span>

                  <h2>Date of birth</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquid possimus quisquam
                    voluptatibus consequuntur.
                  </p>

                  <Footer>
                    <div>
                      <span>Month</span>
                      <select name="month" required onChange={ handleChange } value={ formData?.month }>
                        <option></option>
                        <option>October</option>
                      </select>
                    </div>

                    <div>
                      <span>Day</span>
                      <select name="day" required onChange={ handleChange } value={ formData?.day }>
                        <option></option>
                        <option>31</option>
                      </select>
                    </div>

                    <div>
                      <span>Year</span>
                      <select name="year" required onChange={ handleChange } value={ formData?.year }>
                        <option></option>
                        <option>2002</option>
                      </select>
                    </div>
                  </Footer>
                </>
              ) : (
                <>
                  <h1>You will need a password</h1>
                  <PasswordInput type={ type } name="password" placeholder="Password" required onChange={ handleChange } value={ formData?.password } />
                  <PasswordInput type={ type } name="confirmPassword" placeholder="Confirm Password" required onChange={ handleChange } />
                  <span onClick={ handleShowPassword }>{ type === 'password' ? 'Reveal' : 'Hide' } password</span>

                  { formData.password.length > 0 && <SubmitButton onClick={handleSubmit}>Create my account</SubmitButton>}
                </>
              )}

            </form>
          </Body>

        </ModalContent>

      </Container>
  )
}

export default SignupModal
