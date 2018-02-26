import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checklistItemUrl } from 'config/api'
import { OptionsMenu, Option } from 'common/components'
import { deleteItemRequest } from './checklistItemsRequests'

const actions = {
  deleteItem: deleteItemRequest.actions.request
}

const ChecklistItemMenu = (props) => {
  const { id, deactivate, deleteItem } = props
  const requestUrl = checklistItemUrl(id)

  return (
    <OptionsMenu
      title="Item Actions"
      deactivate={deactivate}
    >
      <Option
        onClick={() => deleteItem({ requestUrl })}
      >
        Delete
      </Option>
    </OptionsMenu>
  )
}

ChecklistItemMenu.propTypes = {
  id: PropTypes.number.isRequired,
  deactivate: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default connect(null, actions)(ChecklistItemMenu)
