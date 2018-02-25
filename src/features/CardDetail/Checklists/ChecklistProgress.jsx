import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex } from 'grid-styled'
import ProgressBar from './ProgressBar'
import { makeGetPercentageComplete } from './checklistSelectors'
import { Percent } from './checklistsStyles'

const mapState = (state, ownProps) => ({
  percent: makeGetPercentageComplete(ownProps.id)(state)
})

const ChecklistProgress = (props) => {
  const { percent } = props

  return (
    <Flex mb={2} align="center">
      <Percent
        width="45px"
        shrink={0}
        mr={2}
      >
        {`${percent} %`}
      </Percent>
      <ProgressBar percent={percent} />
    </Flex>
  )
}

ChecklistProgress.propTypes = {
  percent: PropTypes.number.isRequired
}

export default connect(mapState, null)(ChecklistProgress)
