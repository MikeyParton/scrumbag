import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CloseButton } from 'common/components'

import { checklistsUrl } from 'config/api'
import { OptionsMenu, Option } from 'common/components'
import NewChecklistForm from './NewChecklistForm'
import { getCardId } from '../cardDetailSelectors'
import { createChecklistRequest } from '../cardDetailRequests'

const mapState = state => ({
  cardId: getCardId(state)
})

const actions = {
  createChecklist: createChecklistRequest.actions.request
}

class NewChecklist extends React.Component {
  onSubmit = (values) => {
    const { cardId, createChecklist } = this.props

    createChecklist({
      ...values,
      requestUrl: checklistsUrl(cardId)
    })
  }

  render() {
    const { deactivate } = this.props
    return (
      <OptionsMenu
        title="Add a Checklist"
        deactivate={deactivate}
      >
        <NewChecklistForm onSubmit={this.onSubmit} />
      </OptionsMenu>
    )
  }
}

NewChecklist.propTypes = {
  deactivate: PropTypes.func.isRequired,
  cardId: PropTypes.func.isRequired,
  createChecklist: PropTypes.func.isRequired
}

export default connect(mapState, actions)(NewChecklist)
