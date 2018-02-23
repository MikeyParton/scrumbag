import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import ProgressBar from './ProgressBar'
import { makeGetPercentageComplete } from './checklistSelectors'

const mapState = (state, ownProps) => ({
  percent: makeGetPercentageComplete(ownProps.id)(state)
})

const ChecklistProgress = (props) => {
  const { percent } = props

  return (
    <Flex align="center">
      <Box width="45px" shrink={0} mr={2}>{percent && `${percent} %`}</Box>
      <ProgressBar percent={percent} />
    </Flex>
  )
}

ChecklistProgress.propTypes = {
  percent: PropTypes.number.isRequired
}

export default connect(mapState, null)(ChecklistProgress)
