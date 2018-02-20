import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getChecklistIds } from './checklistSelectors'

const mapState = state => ({
  checklistIds: getChecklistIds(state)
})

const Checklists = (props) => {
  const { checklistIds } = props
  return (
    <div>
      {checklistIds.map(id => (
        <div>{id}</div>
      ))}
    </div>
  )
}

Checklists.propTypes = {
  checklistIds: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default connect(mapState, null)(Checklists)
