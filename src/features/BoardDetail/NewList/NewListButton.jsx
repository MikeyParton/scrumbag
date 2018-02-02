import React from 'react'
import PropTypes from 'prop-types'
import { InnerContainer } from './newListFormStyles'

const NewListButton = (props) => {
  const { handleClick } = props
  return (
    <InnerContainer onClick={handleClick}>
      Add a List ...
    </InnerContainer>
  )
}

NewListButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default NewListButton
