import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppContainer from '../containers/AppContainer'
import TopNavigation from './navigation/TopNavigation'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <TopNavigation />
          <Switch>
            <Route path="/" component={ AppContainer } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
