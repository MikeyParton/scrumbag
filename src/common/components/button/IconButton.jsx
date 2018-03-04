import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import Button from './Button'

const IconButton = (props) => {
  const { icon, text, ...buttonProps } = props
  return (
    <Button {...buttonProps}>
      <Box mr={2}>
        {icon}
      </Box>
      {text}
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
}

export default IconButton
