import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Boards from 'features/Boards/Boards'
import NavBar from 'features/NavBar/NavBar'
import Board from 'pages/BoardDetail'
import styled from 'styled-components'

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
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
        <Switch>
          <Route exact path="/" component={Boards} />
          <Route path="/boards/:id" component={Board} />
        </Switch>
      </Content>
    </FullPage>
  </Router>
)

export default Routes
