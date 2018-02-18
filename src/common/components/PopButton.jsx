import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Toggle from './Toggle'
import CashMeOutside from './CashMeOutside'

export const PopupParent = styled.div`
  position: relative;
`

export const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`

const Popup = (props) => {
  const { content: Content, active, deactivate } = props
  if (!active) return null

  return (
    <CashMeOutside
      onClickOutside={deactivate}
      render={(provided) => {
      return (
        <PopupContainer innerRef={provided}>
          <Content />
        </PopupContainer>
      )
      }}
    />
  )
}

const PopButton = (props) => {
  const { content, button: Button } = props

  return (
    <Toggle render={(active, activate, deactivate) => {
      return (
        <PopupParent>
          <Button onClick={activate} />
          <Popup {...{ content, active, deactivate }} />
        </PopupParent>
      )
      }}
    />
  )
}

Popup.propTypes = {
  active: PropTypes.bool.isRequired,
  deactivate: PropTypes.func.isRequired,
  content: PropTypes.element.isRequired
}

PopButton.propTypes = {
  button: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired
}

export default PopButton
