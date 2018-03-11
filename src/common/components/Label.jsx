import React from 'react'
import styled from 'styled-components'
import withLabel from 'features/Labels/withLabel'

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  min-width: 34px;
  background-color: ${props => props.color};
  border-radius: ${props => props.theme.borderRadius}px;

  height: ${props => props.small ? 20 : 30}px;
  font-size ${props => props.small ? 10 : 14}px;
  padding: 0px ${props => props.theme.grid}px;
`

const Label = (props) => {
  const { label, small } = props
  const { color, name } = label

  return (
    <OptionWrapper color={color} small={small}>
      {name}
    </OptionWrapper>
  )
}

export default withLabel(Label)
