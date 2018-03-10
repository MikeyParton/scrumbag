import React from 'react'
import PropTypes from 'prop-types'
import AddMember from 'features/CardDetail/AddMember/AddMember'
import { Icon, PopButton, Button } from 'common/components'
import { Flex, Box } from 'grid-styled'
import User from './User'

const Members = (props) => {
  const { userIds } = props
  return (
    <Box mb={2}>
      <div>Members</div>
      <Flex>
        { userIds.map(id => (
          <Box mr={2}>
            <User id={id} />
          </Box>
        ))}
        <PopButton
          content={<AddMember selectedUsers={userIds} />}
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

Members.propTypes = {
  userIds: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Members
