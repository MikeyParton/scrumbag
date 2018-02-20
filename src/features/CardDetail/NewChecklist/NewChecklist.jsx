import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CloseButton } from 'common/components'

import { checklistsUrl } from 'config/api'
import { OptionsContainer, Header, Title, RightAligned } from './OptionsContainer'
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
      <OptionsContainer>
        <Header>
          <Title>Add a Checklist</Title>
          <RightAligned>
            <CloseButton onClick={deactivate} />
          </RightAligned>
        </Header>
        <NewChecklistForm onSubmit={this.onSubmit} />
      </OptionsContainer>
    )
  }
}

NewChecklist.propTypes = {
  deactivate: PropTypes.func.isRequired,
  cardId: PropTypes.func.isRequired,
  createChecklist: PropTypes.func.isRequired
}

export default connect(mapState, actions)(NewChecklist)
