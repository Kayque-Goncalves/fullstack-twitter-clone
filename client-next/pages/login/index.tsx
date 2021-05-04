import { FaTwitter } from "react-icons/fa"

import { SignupModal } from "../../components/SignupModal"
import { useSignFlow } from "../../contexts/SignFlowContext"

import styles from './login.module.scss'

export default function Login () {
  const { isModalOpen, toggleModal } = useSignFlow()

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
            <button> Log in </button>
          </form>

          <span onClick={ toggleModal }> Sign up for Twitter </span>
        </main>
      </div>
    </div>
  )
}
