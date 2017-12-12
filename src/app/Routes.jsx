import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'features/Home/Home'
import Board from 'pages/BoardDetail'
import CardDetail from 'components/CardDetail'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/boards/:id" component={Board} />
    </Switch>
  </Router>
)

export default Routes
