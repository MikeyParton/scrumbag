import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { cardsUrl } from 'config/api'
import { createCardRequest } from 'features/Cards/cardsRequests'
import NewCardForm from './NewCardForm'

const actions = {
  createCard: createCardRequest.actions.request
}

class NewCardFormContainer extends React.Component {
  onSubmit = (values) => {
    const { listId, boardId, createCard } = this.props
    createCard({
      ...values,
      listId,
      requestUrl: cardsUrl(boardId)
    })
  }

  render() {
    return (
      <NewCardForm
        onSubmit={this.onSubmit}
        {...this.props}
      />
    )
  }
}

NewCardFormContainer.propTypes = {
  listId: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  createCard: PropTypes.func.isRequired
}

export default connect(null, actions)(NewCardFormContainer)
