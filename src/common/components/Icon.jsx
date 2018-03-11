import React from 'react'
import styled from 'styled-components'
import close from 'react-icons/lib/md/close'
import plus from 'react-icons/lib/md/add'
import edit from 'react-icons/lib/md/edit'
import back from 'react-icons/lib/md/arrow-back'
import tick from 'react-icons/lib/md/check'

const icons = {
  close,
  plus,
  edit,
  back,
  tick
}

const IconWrapper = styled.span`
  font-size: 20px;
`

const Icon = (props) => {
  const { icon, ...rest } = props
  const IconComponent = icons[icon]
  return (
    <IconWrapper {...rest} >
      {IconComponent && <IconComponent />}
    </IconWrapper>
  )
}

export default Icon
