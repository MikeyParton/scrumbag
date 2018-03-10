import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Option } from 'common/components'
import { makeGetUserById } from 'features/Users/usersSelectors'
import styled from 'styled-components'
import Check from 'react-icons/lib/md/check'

import { Flex, Box } from 'grid-styled'

const Avatar = styled.div`
  font-size: 12px;
  font-weight: 550;
  color: black !important;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.cardBackgroundLight};
`

const Tick = styled(Check)`
  font-size: 20px;
`

const mapState = (state, ownProps) => ({
  user: makeGetUserById(ownProps.id)(state)
})

const UserOption = (props) => {
  const { user, handleSelect, selected } = props
  const { firstName, lastName } = user

  return (
    <Option onClick={() => handleSelect(user)}>
      <Flex align="center">
        <Box mr={2}>
          <Avatar>
            MP
          </Avatar>
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

export default connect(mapState, null)(UserOption)
