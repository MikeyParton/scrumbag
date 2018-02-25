import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import { connect } from 'react-redux'
import { checklistItemUrl, checkChecklistItemUrl, uncheckChecklistItemUrl } from 'config/api'
import { Checkbox } from 'common/components'
import { makeGetChecklistItemById, makeIsEditing } from './checklistItemsSelectors'
import { showEditItem, hideEditItem } from './checklistItemsActions'
import { updateItemRequest, checkItemRequest, uncheckItemRequest } from './checklistItemsRequests'
import ChecklistItemForm from '../NewChecklistItem/NewChecklistItemForm'

import styled from 'styled-components'

const LabelContainer = styled.div`
  flex-grow: 1;
`

const Label = styled.div`
  text-decoration: ${props => props.checked ? 'line-through' : ''};
`

const mapState = (state, ownProps) => ({
  checklistItem: makeGetChecklistItemById(ownProps.id)(state),
  isEditing: makeIsEditing(ownProps.id)(state)
})

const actions = {
  showEditItem,
  hideEditItem,
  checkItem: checkItemRequest.actions.request,
  uncheckItem: uncheckItemRequest.actions.request,
  updateItem: updateItemRequest.actions.request
}

class ChecklistItem extends React.Component {
  checked = () => {
    const { checklistItem } = this.props
    const { status } = checklistItem
    return status === 'completed'
  }

  onUpdate = (values) => {
    const { updateItem, id } = this.props
    updateItem({
      ...values,
      requestUrl: checklistItemUrl(id)
    })
  }

  handleCheck = () => {
    const { checkItem, uncheckItem, id } = this.props
    this.checked()
      ? uncheckItem({ requestUrl: uncheckChecklistItemUrl(id) })
      : checkItem({ requestUrl: checkChecklistItemUrl(id) })
  }

  render() {
    const {
      checklistItem,
      isEditing,
      showEditItem,
      hideEditItem,
      id
    } = this.props
    const { name } = checklistItem

    return (
      <Flex mb={2}>
        <Box mr={2}>
          <Checkbox
            name="complete"
            value={this.checked()}
            handleChange={this.handleCheck}
          />
        </Box>
        <LabelContainer>
          {
            isEditing
              ? <ChecklistItemForm
                  onSubmit={this.onUpdate}
                  onCancel={hideEditItem}
                  initialValues={{ name }}
                />
              : <Label
                  onClick={() => showEditItem(id)}
                  checked={this.checked()}
                >
                  {name}
                </Label>
          }
        </LabelContainer>
      </Flex>
    )
  }
}

ChecklistItem.propTypes = {
  id: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired,
  checklistItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  checkItem: PropTypes.func.isRequired,
  uncheckItem: PropTypes.func.isRequired
}

export default connect(mapState, actions)(ChecklistItem)
