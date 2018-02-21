import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import CheckSquare from 'react-icons/lib/fa/check-square'
import { H1 } from 'common/components'
import ChecklistProgress from './ChecklistProgress'
import { makeGetChecklistById, makeIsEditingTitle } from './checklistSelectors'
import { showEditTitle, hideEditTitle } from './checklistsActions'
import EditNameForm from './EditNameForm'

const mapState = (state, ownProps) => ({
  checklist: makeGetChecklistById(ownProps.id)(state),
  isEditingTitle: makeIsEditingTitle(ownProps.id)(state)
})

const actions = {
  hideEditTitle,
  showEditTitle
}

const Checklist = (props) => {
  const { checklist, isEditingTitle, showEditTitle, hideEditTitle } = props
  const { id, name } = checklist

  return (
    <div>
      <Flex align="center">
        <Box mr={2}>
          <CheckSquare size="20" />
        </Box>
        <Box width={1}>
          {isEditingTitle
            ? <EditNameForm
                initialValues={{ name }}
                onCancel={hideEditTitle}
              />
            : <H1 onClick={() => showEditTitle(id)}>{name}</H1>
          }
        </Box>
      </Flex>
      <ChecklistProgress />
    </div>
  )
}

Checklist.propTypes = {
  checklist: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default connect(mapState, actions)(Checklist)
