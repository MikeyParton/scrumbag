import React from 'react'
import PropTypes from 'prop-types'
import AddLabel from 'features/CardDetail/AddLabel/AddLabel'
import { Icon, PopButton, Button } from 'common/components'
import { Flex, Box } from 'grid-styled'
import Label from './Label'

const Labels = (props) => {
  const { labelIds } = props
  return (
    <Box mb={2}>
      <div>Labels</div>
      <Flex>
        { labelIds.map(id => (
          <Box mr={2}>
            <Label id={id} />
          </Box>
        ))}
        <PopButton
          content={<AddLabel selectedLabels={labelIds} />}
          button={
            <Button>
              <Icon icon="plus" />
            </Button>
          }
        />
      </Flex>
    </Box>
  )
}

Labels.propTypes = {
  labelIds: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Labels
