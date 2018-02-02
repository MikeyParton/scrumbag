import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer } from './newCardStyles'

const NewCardButton = (props) => {
  const { handleClick } = props
  return (
    <ButtonContainer onClick={handleClick}>
      Add a Card ...
    </ButtonContainer>
  )
}

NewCardButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default NewCardButton
