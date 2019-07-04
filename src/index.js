import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from './store'
import App from './App'
import Home from './pages/Home/Home'

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <Fragment>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/home' exact component={Home} />
          <Route component={() => <h1>404Page</h1>} />
        </Switch>
      </Fragment>
    </HashRouter>
  </Provider>,
  document.getElementById('root'))
