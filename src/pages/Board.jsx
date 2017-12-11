import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Board from '../components/Board'
import CardDetail from '../components/CardDetail'

const BoardPage = () => (
  <div>
    <Board />
    <Route path="/card/:id" component={CardDetail} />
  </div>
)

export default BoardPage
