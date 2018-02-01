import React from 'react'
import { connect } from 'react-redux'
import NewListButton from './NewListButton'
import NewListForm from './NewListForm'
import { OuterContainer } from './newListFormStyles'
import { createListRequest } from './newListRequest'
import { listsUrl } from 'config/api'

const actions = {
  createList: createListRequest.actions.request
}

class NewList extends React.Component {
  state = {
    active: false
  }

  activate = () => {
    this.setState({ active: true })
  }

  deactivate = () => {
    this.setState({ active: false })
  }

  onSubmit = (values) => {
    const { boardId, createList } = this.props
    createList({
      ...values,
      requestUrl: listsUrl(boardId)
    })
  }

  render() {
    const { active } = this.state
    return (
      <OuterContainer>
        { !active && (
          <NewListButton handleClick={this.activate} />
        )}

        { active && (
          <NewListForm
            handleCancel={this.deactivate}
            onSubmit={this.onSubmit}
          />
        )}
      </OuterContainer>
    )
  }
}

export default connect(null, actions)(NewList)
