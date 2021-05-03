import { FaTwitter } from "react-icons/fa"

import { SignupModal } from "../../components/SignupModal"
import { useSignFlow } from "../../contexts/SignFlowContext"

import styles from './login.module.scss'

import axios from 'axios'
import { useState } from "react"

export default function Login ({ teste }) {
  const { isModalOpen, toggleModal } = useSignFlow()

  const [userData, setUserData] = useState({
    name: 'next', loginOption: 'loginNext@test.com', birth: 'October, 31, 2002', month: 'October', day: '31', year: '2002', password: '123', confirmPassword: '123'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const response = await axios.post('http://localhost:5000/api/register', userData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={ styles.wrapper }>
      { isModalOpen && <SignupModal /> }

      <div className={ styles.content }>
        <header>
          <div className={ styles.iconWrapper }>
            <FaTwitter className={ styles.icon } />
          </div>
          <h1> Log in to Twitter </h1>
        </header>

        <main>
          <form>
            <input name="loginOption" placeholder="Phone or Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button onClick={ handleSubmit }> Log in </button>
          </form>

          <span onClick={ toggleModal }> Sign up for Twitter </span>
        </main>
      </div>
    </div>
  )
}
