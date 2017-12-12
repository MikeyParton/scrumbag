import React from 'react'
import { Route } from 'react-router-dom'
import Board from '../components/Board'
import CardDetail from '../components/CardDetail'

const BoardPage = ({ match }) => {
  return (
    <div>
      <Board />
      <Route path={`${match.url}/card/:id`} component={CardDetail} />
    </div>
  )
}

export default BoardPage
