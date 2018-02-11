import React from 'react'
import { Router, Switch } from 'react-router-dom'

import Boards from 'features/Boards/Boards'
import Login from 'features/Login/Login'
import Signup from 'features/Signup/Signup'

import Layout from './Layout'
import BoardDetailRoutes from './BoardDetailRoutes'

import PrivateRoute from './PrivateRoute'
import LoggedOutRoute from './LoggedOutRoute'
import history from './history'

const Routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <PrivateRoute exact path="/" component={Boards} />
        <PrivateRoute path="/boards/:boardId" component={BoardDetailRoutes} />
        <LoggedOutRoute path="/login" component={Login} />
        <LoggedOutRoute path="/signup" component={Signup} />
      </Switch>
    </Layout>
  </Router>
)

export default Routes
