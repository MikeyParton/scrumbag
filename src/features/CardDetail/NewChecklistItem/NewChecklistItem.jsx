import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checklistItemsUrl } from 'config/api'
import { HoverBlockButton } from 'common/components'
import NewChecklistItemForm from './NewChecklistItemForm'
import { makeIsAddingChecklistItem } from '../Checklists/checklistSelectors'
import { showAddChecklistItem, hideAddChecklistItem } from '../Checklists/checklistsActions'
import { createChecklistItemRequest } from '../cardDetailRequests'

const mapState = (state, ownProps) => ({
  isAddingChecklistItem: makeIsAddingChecklistItem(ownProps.id)(state)
})

const actions = {
  showForm: showAddChecklistItem,
  hideForm: hideAddChecklistItem,
  createChecklistItem: createChecklistItemRequest.actions.request
}

const NewChecklistItem = (props) => {
  const { createChecklistItem, isAddingChecklistItem, showForm, hideForm, id } = props

  const onSubmit = (values) => {
    createChecklistItem({
      ...values,
      requestUrl: checklistItemsUrl(id)
    })
  }

  return (
    <div>
      {isAddingChecklistItem
        ? <NewChecklistItemForm
            onSubmit={onSubmit}
            onCancel={() => hideForm(id)}
          />
        : <HoverBlockButton
            handleClick={() => showForm(id)}
            background="listBackground"
          >
            Add Item ...
          </HoverBlockButton>
      }
    </div>

  )
}

NewChecklistItem.propTypes = {
  id: PropTypes.number.isRequired,
  isAddingChecklistItem: PropTypes.bool.isRequired,
  showForm: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
  createChecklistItem: PropTypes.func.isRequired
}

export default connect(mapState, actions)(NewChecklistItem)
