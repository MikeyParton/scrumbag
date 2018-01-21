import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from 'features/NavBar/NavBar'
import styled from 'styled-components'

import ModalManager from 'features/ModalManager/ModalManager'
import ContextMenuManager from 'features/ContextMenu/ContextMenuManager'
import Boards from 'features/Boards/Boards'
import Login from 'features/Login/Login'
import BoardDetailRoutes from './BoardDetailRoutes'

import PrivateRoute from './PrivateRoute'

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`

const Routes = () => (
  <Router>
    <FullPage>
      <NavBar />
      <Content>
        <ModalManager />
        <ContextMenuManager />
        <Switch>
          <PrivateRoute exact path="/" component={Boards} />
          <PrivateRoute path="/boards/:boardId" component={BoardDetailRoutes} />
          <Route path="/login" component={Login} />
        </Switch>
      </Content>
    </FullPage>
  </Router>
)

export default Routes
