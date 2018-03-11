import React from 'react'
import styled from 'styled-components'
import withLabel from 'features/Labels/withLabel'

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  color: white;
  min-width: 34px;
  background-color: ${props => props.color};
  padding: 0px ${props => props.theme.grid}px;
  border-radius: ${props => props.theme.borderRadius}px;
`

const LabelOption = (props) => {
  const { label } = props
  const { color, name } = label

  return (
    <OptionWrapper color={color}>
      {name}
    </OptionWrapper>
  )
}

export default withLabel(LabelOption)
