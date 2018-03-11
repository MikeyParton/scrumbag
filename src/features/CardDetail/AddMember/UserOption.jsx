import React from 'react'
import PropTypes from 'prop-types'
import withUser from 'features/Users/withUser'
import { Option, BaseAvatar } from 'common/components'
import styled from 'styled-components'
import Check from 'react-icons/lib/md/check'

import { Flex, Box } from 'grid-styled'

const Tick = styled(Check)`
  font-size: 20px;
`

const UserOption = (props) => {
  const { user, handleSelect, selected } = props
  const { firstName, lastName } = user

  return (
    <Option onClick={() => handleSelect(user)}>
      <Flex align="center">
        <Box mr={2}>
          <BaseAvatar user={user} />
        </Box>
        <Box width={1}>
          {`${firstName} ${lastName}`}
        </Box>
        {selected && <Tick />}
      </Flex>
    </Option>
  )
}

UserOption.propTypes = {
  id: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired
}

export default withUser(UserOption)
