import React from 'react'
import { Router, Switch } from 'react-router-dom'
import NavBar from 'features/NavBar/NavBar'
import styled from 'styled-components'

import ModalManager from 'features/ModalManager/ModalManager'
import ContextMenuManager from 'features/ContextMenu/ContextMenuManager'
import Boards from 'features/Boards/Boards'
import Login from 'features/Login/Login'
import Signup from 'features/Signup/Signup'
import BoardDetailRoutes from './BoardDetailRoutes'

import PrivateRoute from './PrivateRoute'
import LoggedOutRoute from './LoggedOutRoute'
import history from './history'

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: scroll;
`

const Routes = () => (
  <Router history={history}>
    <FullPage>
      <NavBar />
      <Content>
        <ModalManager />
        <ContextMenuManager />
        <Switch>
          <PrivateRoute exact path="/" component={Boards} />
          <PrivateRoute path="/boards/:boardId" component={BoardDetailRoutes} />
          <LoggedOutRoute path="/login" component={Login} />
          <LoggedOutRoute path="/signup" component={Signup} />
        </Switch>
      </Content>
    </FullPage>
  </Router>
)

export default Routes
