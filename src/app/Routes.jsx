import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from 'features/NavBar/NavBar'
import styled from 'styled-components'

import ModalManager from 'features/ModalManager/ModalManager'
import Boards from 'features/Boards/Boards'
import BoardDetail from 'features/BoardDetail/BoardDetail'
import CardDetail from 'features/CardDetail/CardDetail'

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
        <Switch>
          <Route exact path="/" component={Boards} />
          <Route path="/boards/:boardId">
            <div>
              <BoardDetail />,
              <Route path="card/:id" component={CardDetail} />
            </div>
          </Route>
        </Switch>
      </Content>
    </FullPage>
  </Router>
)

export default Routes
