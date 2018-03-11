import React from 'react'
import PropTypes from 'prop-types'
import { CloseButton, Icon } from 'common/components'
import {
  OptionsContainer,
  Header,
  Title,
  RightAligned
} from './optionsMenuStyles'

const OptionsMenu = (props) => {
  const { title, children, deactivate, onBack } = props
  return (
    <OptionsContainer>
      <Header>
        { onBack && <Icon icon="back" onClick={onBack} />}
        <Title>{title}</Title>
        <RightAligned>
          <CloseButton onClick={deactivate} />
        </RightAligned>
      </Header>
      {children}
    </OptionsContainer>
  )
}

OptionsMenu.propTypes = {
  title: PropTypes.string.isRequired,
  deactivate: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default OptionsMenu
