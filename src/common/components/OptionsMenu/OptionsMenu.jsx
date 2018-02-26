import React from 'react'
import PropTypes from 'prop-types'
import { CloseButton } from 'common/components'
import {
  OptionsContainer,
  Header,
  Title,
  RightAligned
} from './optionsMenuStyles'

const OptionsMenu = (props) => {
  const { title, children, deactivate } = props
  return (
    <OptionsContainer>
      <Header>
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
  children: PropTypes.element.isRequired
}

export default OptionsMenu
