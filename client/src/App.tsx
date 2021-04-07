import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import Auth from './components/Auth'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
          <Switch>
            <Route path="/home" exact component={ Layout } />
            <Route path="/" exact component={ Auth } />
          </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
