import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AvatarContainer = styled.div`
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

const Avatar = (props) => {
  const { user } = props
  const { firstName, lastName } = user
  return (
    <AvatarContainer>
      {`${firstName[0]}${lastName[0]}`}
    </AvatarContainer>
  )
}

Avatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default Avatar
