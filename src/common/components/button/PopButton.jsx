import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'
import CashMeOutside from '../CashMeOutside'

export const PopupParent = styled.div`
  position: relative;
`

export const PopupContainer = styled.div`
  position: absolute;
  cursor: auto;
  top: 100%;
  left: 0;
  z-index: 100;
  margin-top: 10px;
`

const Popup = (props) => {
  const { content, active, deactivate } = props
  if (!active) return null
  const newContent = React.cloneElement(content, {
    deactivate
  })

  return (
    <CashMeOutside
      onClickOutside={deactivate}
      render={provided => (
        <PopupContainer innerRef={provided}>
          {newContent}
        </PopupContainer>
      )}
    />
  )
}

const PopButton = (props) => {
  const { content, button } = props

  return (
    <div className="pop-button">
      <Toggle
        render={(active, activate, deactivate) => (
          <PopupParent>
            <div onClick={activate}>
              {button}
            </div>
            <Popup {...{ content, active, deactivate }} />
          </PopupParent>
        )}
      />
    </div>
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
