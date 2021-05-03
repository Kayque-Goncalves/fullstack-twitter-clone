import { SignFlowContextProvider } from '../contexts/SignFlowContext'

import styles from '../styles/app.module.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <SignFlowContextProvider>
      <div className={ styles.wrapper }>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </SignFlowContextProvider>
  ) 
}

export default MyApp
