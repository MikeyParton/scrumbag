import React from 'react'
import { Route } from 'react-router-dom'
import BoardDetail from 'features/BoardDetail/AltBoardDetail'
import CardDetail from 'features/CardDetail/CardDetail'
import PropTypes from 'prop-types'

const BoardDetailRoutes = ({ match }) => {
  return (
    <div>
      <BoardDetail />
      <Route path={`${match.url}/card/:cardId`} component={CardDetail} />
    </div>
  )
}

BoardDetailRoutes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
}

export default BoardDetailRoutes
