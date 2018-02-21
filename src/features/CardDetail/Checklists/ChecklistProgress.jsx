import React from 'react'
import { Flex, Box } from 'grid-styled'
import ProgressBar from './ProgressBar'

const ChecklistProgress = (props) => {
  const percent = 20

  return (
    <Flex align="center">
      <Box width="45px" shrink={0} mr={2}>{percent && `${percent} %`}</Box>
      <ProgressBar percent={percent} />
    </Flex>
  )
}

export default ChecklistProgress
