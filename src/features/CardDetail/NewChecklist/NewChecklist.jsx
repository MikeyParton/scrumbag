import React from 'react'
import { connect } from 'react-redux'
import { CloseButton } from 'common/components'
import { OptionsContainer, Header, Title, RightAligned } from './OptionsContainer'
import NewChecklistForm from './NewChecklistForm'

const actions = {}

class NewChecklist extends React.Component {
  onSubmit = (values) => {
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

export default connect(null, actions)(NewChecklist)
