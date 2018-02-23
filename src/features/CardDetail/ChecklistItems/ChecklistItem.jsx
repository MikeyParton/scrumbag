import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkChecklistItemUrl, uncheckChecklistItemUrl } from 'config/api'
import { makeGetChecklistItemById } from './checklistItemsSelectors'
import { checkItemRequest, uncheckItemRequest } from './checklistItemsRequests'

const mapState = (state, ownProps) => ({
  checklistItem: makeGetChecklistItemById(ownProps.id)(state)
})

const actions = {
  checkItem: checkItemRequest.actions.request,
  uncheckItem: uncheckItemRequest.actions.request
}

class ChecklistItem extends React.Component {
  checked = () => {
    const { checklistItem } = this.props
    const { status } = checklistItem
    return status === 'completed'
  }

  handleCheck = () => {
    const { checkItem, uncheckItem, id } = this.props
    this.checked()
      ? uncheckItem({ requestUrl: uncheckChecklistItemUrl(id) })
      : checkItem({ requestUrl: checkChecklistItemUrl(id) })
  }

  render() {
    const { checklistItem } = this.props
    const { name } = checklistItem

    return (
      <div>
        <input
          type="checkbox"
          checked={this.checked()}
          onClick={this.handleCheck}
        />
        {name}
      </div>
    )
  }
}

ChecklistItem.propTypes = {
  id: PropTypes.number.isRequired,
  checklistItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  checkItem: PropTypes.func.isRequired,
  uncheckItem: PropTypes.func.isRequired
}

export default connect(mapState, actions)(ChecklistItem)
