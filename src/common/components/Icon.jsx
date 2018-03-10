import React from 'react'
import styled from 'styled-components'
import close from 'react-icons/lib/md/close'
import plus from 'react-icons/lib/md/add'
import edit from 'react-icons/lib/md/edit'

const icons = {
  close,
  plus,
  edit
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
