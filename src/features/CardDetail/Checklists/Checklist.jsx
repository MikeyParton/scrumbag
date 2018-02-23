import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import CheckSquare from 'react-icons/lib/fa/check-square'
import { H1 } from 'common/components'
import { checklistUrl } from 'config/api'
import ChecklistProgress from './ChecklistProgress'
import { makeGetChecklistById, makeIsEditingTitle } from './checklistSelectors'
import { showEditTitle, hideEditTitle } from './checklistsActions'
import EditNameForm from './EditNameForm'
import { updateChecklistRequest } from '../cardDetailRequests'
import NewChecklistItem from '../NewChecklistItem/NewChecklistItem'
import ChecklistItem from '../ChecklistItems/ChecklistItem'

const mapState = (state, ownProps) => ({
  checklist: makeGetChecklistById(ownProps.id)(state),
  isEditingTitle: makeIsEditingTitle(ownProps.id)(state)
})

const actions = {
  hideEditTitle,
  showEditTitle,
  updateChecklist: updateChecklistRequest.actions.request
}

const Checklist = (props) => {
  const { checklist, isEditingTitle, showEditTitle, hideEditTitle } = props
  const { id, name, checklistItems } = checklist

  const onSubmit = (values) => {
    const { id, updateChecklist } = props
    updateChecklist({
      ...values,
      requestUrl: checklistUrl(id)
    })
  }

  return (
    <Box mb={3}>
      <Flex mb={2}>
        <Box mt={1} mr={2}>
          <CheckSquare size="20" />
        </Box>
        <Box width={1}>
          {isEditingTitle
            ? <EditNameForm
                initialValues={{ name }}
                onCancel={hideEditTitle}
                onSubmit={onSubmit}
              />
            : <H1 onClick={() => showEditTitle(id)}>{name}</H1>
          }
        </Box>
      </Flex>
      <ChecklistProgress id={id} />
      { checklistItems.map(id => (
        <ChecklistItem key={id} id={id} />
      ))}
      <NewChecklistItem id={id} />
    </Box>
  )
}

Checklist.propTypes = {
  id: PropTypes.number.isRequired,
  checklist: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  isEditingTitle: PropTypes.bool.isRequired,
  showEditTitle: PropTypes.func.isRequired,
  hideEditTitle: PropTypes.func.isRequired
}

export default connect(mapState, actions)(Checklist)
