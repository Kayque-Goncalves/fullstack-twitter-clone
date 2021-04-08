import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import Auth from './components/Auth'
import GlobalStyles from './styles/GlobalStyles'
import { AuthProvider } from './Contexts/AuthContext'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
          <Switch>
            <AuthProvider>
              <Route path="/" exact component={ Auth } />
            </AuthProvider>
            {/* <Route path="/login" exact component={ Login } /> */}
            <Route path="/home" exact component={ Layout } />
          </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
