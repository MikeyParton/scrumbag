import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { cardsUrl } from 'config/api'
import NewCardForm from './NewCardForm'
import newCardRequest from './newCardRequest'

const actions = {
  createCard: newCardRequest.actions.request
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
