import { FaTwitter } from 'react-icons/fa'

import { SignupModal } from '../components/SignupModal'
import { useSignFlow } from '../contexts/SignFlowContext'

import styles from './index.module.scss'

export default function Home() {
  const { isModalOpen, toggleModal } = useSignFlow()

  return (  
    <div className={ styles.wrapper }>
      { isModalOpen && <SignupModal /> }

      <section className={ styles.leftContainer }>
        <div className={ styles.twitterLogoWrapper }>
          <FaTwitter className={ styles.logo } />
        </div>
      </section>

      <section className={ styles.rightContainer }>     
        <div className={ styles.content }>

          <div className={ styles.twitterIconWrapper } >
            <FaTwitter className={ styles.logo } />
          </div>

          <div className={ styles.messages }>
            <h1> Happening now </h1>
            <p> Join Twitter today. </p>
          </div>

          <div className={ styles.buttons }>
              <button onClick={ toggleModal }> Sign up </button>           
              <a href="/login"><button> Log in </button></a>
          </div>

        </div>
      </section>

    </div>
  )
}
