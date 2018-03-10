import React from 'react'
import styled from 'styled-components'
import close from 'react-icons/lib/md/close'
import plus from 'react-icons/lib/md/add'

const icons = {
  close,
  plus
}

const IconWrapper = styled.span`
  font-size: 20px;
`

const Icon = (props) => {
  const { icon } = props
  const IconComponent = icons[icon]
  return (
    <IconWrapper>
      {IconComponent && <IconComponent />}
    </IconWrapper>
  )
}

export default Icon
