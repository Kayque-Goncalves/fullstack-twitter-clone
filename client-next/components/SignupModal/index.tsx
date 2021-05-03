import React, { useState } from  'react'

import { FaTwitter } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { useSignFlow } from '../../contexts/SignFlowContext'

import styles from './signupModal.module.scss'

export function SignupModal () {
  const { toggleModal, isModalOpen, changeStep, signStep } = useSignFlow()

  return (
    <div className={ styles.wrapper }>
      { console.log(signStep) }

      <div className={ styles.modalContainer }>
        <header>
          <div className={ styles.header }>
            <div className={ styles.arrowWrapper }>
              { signStep === 1 ? <FiArrowLeft className={ styles.icon } onClick={ toggleModal }/> : <FiArrowLeft className={ styles.icon } onClick={ changeStep } />}
            </div>
            <div className={ styles.iconWrapper }>
              <FaTwitter className={ styles.icon }  />
            </div>
            <div className={ styles.nextButtonWrapper }>
              <button onClick={ changeStep }> Next </button>
            </div>
          </div>
        </header>

        <main>
          <form className={ styles.form }>
            { signStep === 1 ? (
            <>
              <h1> Create your account </h1>
              <input name="name" type="text" required placeholder="Name" />
              <input name="loginOption" type="email" required placeholder="Email" />
              <span> Use phone instead </span>
  
              <h2> Date of birth </h2>
              <p>
                This will not be shown publicly. Confirm your own age, even if this account is for a 
                business, a pet, or something else.
              </p>
 
              <div className={ styles.footer }>
                <div>
                  <span>Month</span>
                  <select name="month" required>
                    <option></option>
                    <option>October</option>
                  </select>
                </div>
  
                <div>
                  <span>Day</span>
                    <select name="day" required>
                      <option></option>
                      <option>31</option>
                    </select>
                </div>
 
                <div>
                  <span>Year</span>
                    <select name="year" required>
                      <option></option>
                      <option>2002</option>
                  </select>
                </div>
              </div>
            </>
            ) : (
            <>
              <h1>You will need a password</h1>
              <input name="password" type="password" required placeholder="Password" />
              <input name="confirmPassword" type="password" required placeholder="Confirm Password" />
              <span>Reveal Password</span>

              <div className={ styles.submitButtonWrapper }>
                <button> Create Account </button>
              </div>
            </>
          )}
          </form>
        </main>

      </div>

    </div>
  )
}
