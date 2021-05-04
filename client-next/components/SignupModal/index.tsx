import React from  'react'

import { FaTwitter } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { useSignFlow } from '../../contexts/SignFlowContext'

import styles from './signupModal.module.scss'

export function SignupModal () {
  const { 
      toggleModal, 
      changeStep, 
      signStep, 
      userData, 
      userSignOption, 
      handleSubmit, 
      handleChange, 
      changeUserSignOption 
    } = useSignFlow()

  return (
    <div className={ styles.wrapper }>

      <div className={ styles.modalContainer }>
        <header>
          <div className={ styles.header }>
            <div className={ styles.arrowWrapper }>
              { 
                signStep === 1 ? 
                  <FiArrowLeft className={ styles.icon } onClick={ toggleModal } /> 
                : 
                  <FiArrowLeft className={ styles.icon } onClick={ changeStep } />
              }
            </div>
            <div className={ styles.iconWrapper }>
              <FaTwitter className={ styles.icon } />
            </div>
            <div className={ styles.nextButtonWrapper }>
              { 
                signStep === 1 && 
                  (userData.name.length > 0 && userData.month.length > 0 && userData.day.length > 0 && userData.year.length > 0) 
                && 
                  <button onClick={ changeStep }> Next </button> 
              }
            </div>
          </div>
        </header>

        <main>
          <form className={ styles.form }>
            { signStep === 1 ? (
            <>
              <h1> Create your account </h1>
              <input 
                name="name" 
                type="text" 
                required 
                placeholder="Name" 
                onChange={ handleChange } 
                value={ userData?.name } 
              />

              { 
                userSignOption === 0 ? 
                  <input 
                    name="loginOption"
                    type="phone" 
                    required 
                    placeholder="Phone" 
                    onChange={ handleChange } 
                    value={ userData?.loginOption }
                  /> 
                : 
                  <input 
                    name="loginOption" 
                    type="email" 
                    required 
                    placeholder="Email" 
                    onChange={ handleChange } 
                    value={ userData?.loginOption }
                  /> 
              }

              <span onClick={ changeUserSignOption }>Use { userSignOption === 0 ? 'Email' : 'Phone' } instead</span>
  
              <h2> Date of birth </h2>
              <p>
                This will not be shown publicly. Confirm your own age, even if this account is for a 
                business, a pet, or something else.
              </p>
 
              <div className={ styles.footer }>
                <div>
                  <span>Month</span>
                  <select name="month" required onChange={ handleChange }>
                    <option></option>
                    <option> January </option>
                    <option> February </option>
                    <option> March </option>
                    <option> April </option>
                    <option> May </option>
                    <option> June </option>
                    <option> July </option>
                    <option> August </option>
                    <option> September </option>
                    <option> October </option>
                    <option> November </option>
                    <option> December </option>
                  </select>
                </div>
  
                <div>
                  {/* Add logic for counting days based on the selected month */}
                  <span>Day</span>
                    <select name="day" required onChange={ handleChange }>
                      <option></option>
                      <option> 01 </option>
                      <option> 02 </option>
                      <option> 03 </option>
                      <option> 04 </option>
                      <option> 05 </option>
                      <option> 06 </option>
                      <option> 07 </option>
                      <option> 08 </option>
                      <option> 09 </option>
                      <option> 10 </option>
                      <option> 11 </option>
                      <option> 12 </option>
                      <option> 13 </option>
                      <option> 14 </option>
                      <option> 15 </option>
                      <option> 16 </option>
                      <option> 17 </option>
                      <option> 18 </option>
                      <option> 19 </option>
                      <option> 20 </option>
                      <option> 21 </option>
                      <option> 22 </option>
                      <option> 23 </option>
                      <option> 24 </option>
                      <option> 25 </option>
                      <option> 26 </option>
                      <option> 27 </option>
                      <option> 28 </option>
                      <option> 29 </option>
                      <option> 30 </option>
                      <option> 31 </option>
                    </select>
                </div>
 
                <div>
                  {/* Add loop for years */}
                  <span>Year</span>
                    <select name="year" required onChange={ handleChange }>
                      <option></option>
                      <option>2000</option>
                      <option>2001</option>
                      <option>2002</option>
                      <option>2003</option>
                      <option>2004</option>
                      <option>2005</option>
                      <option>2006</option>
                      <option>2007</option>
                      <option>2008</option>
                      <option>2009</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                  </select>
                </div>
              </div>
            </>
            ) : (
            <>
              <h1>You will need a password</h1>
              <input 
                name="password" 
                type="password" 
                required 
                placeholder="Password" 
                onChange={ handleChange } 
                value={ userData?.password }
              />
              <input 
                name="confirmPassword" 
                type="password" 
                required 
                placeholder="Confirm Password" 
                onChange={ handleChange } 
                value={ userData?.confirmPassword }
              />

              <div className={ styles.submitButtonWrapper }>
                { 
                (userData.password.length && userData.confirmPassword.length > 0) ?
                  <button onClick={ handleSubmit }> Create Account </button> 
                : 
                  <button onClick={ handleSubmit } disabled> Create Account </button>
                }
              </div>
            </>
          )}
          </form>
        </main>

      </div>

    </div>
  )
}
