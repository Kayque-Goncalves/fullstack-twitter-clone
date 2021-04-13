import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from './components/Globals/Layout'
import Auth from './components/Auth'
import GlobalStyles from './styles/GlobalStyles'
import { AuthProvider } from './Contexts/AuthContext'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
          <Switch>
              <Route path="/home" exact component={ Layout } />
            <AuthProvider>
              <Route path="/" exact component={ Auth } />
            {/* <Route path="/login" exact component={ Login } /> */}
            </AuthProvider>
          </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
