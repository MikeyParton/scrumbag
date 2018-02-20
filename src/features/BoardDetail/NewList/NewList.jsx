import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { listsUrl } from 'config/api'

import NewListButton from './NewListButton'
import NewListForm from './NewListForm'
import { OuterContainer } from './newListFormStyles'

import { createListRequest } from './newListRequest'
import { getNewListShow } from './newListSelectors'
import { showNewList, hideNewList } from './newListActions'

const mapState = state => ({
  show: getNewListShow(state)
})

const actions = {
  createList: createListRequest.actions.request,
  activate: showNewList,
  deactivate: hideNewList
}

class NewList extends React.Component {
  onSubmit = (values) => {
    const { boardId, createList } = this.props
    createList({
      ...values,
      requestUrl: listsUrl(boardId)
    })
  }

  render() {
    const { show, activate, deactivate } = this.props
    return (
      <OuterContainer>
        { show
            ? <NewListForm handleCancel={deactivate} onSubmit={this.onSubmit} />
            : <NewListButton handleClick={activate} />
        }
      </OuterContainer>
    )
  }
}

NewList.propTypes = {
  show: PropTypes.bool.isRequired,
  activate: PropTypes.func.isRequired,
  deactivate: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired
}

export default connect(mapState, actions)(NewList)
