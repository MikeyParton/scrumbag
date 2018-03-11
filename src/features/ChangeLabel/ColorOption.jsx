import React from 'react'
import styled from 'styled-components'
import { Icon } from 'common/components'
import { Field } from 'redux-form'

const ColorWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius}px;
  color: white;
  background-color: ${props => props.code};
  height: 34px;
  width: 100%;

  input {
    display: none;
  }
`

const ColorOption = (props) => {
  const { code, color, input } = props
  const { checked } = input
  return (
    <ColorWrapper htmlFor={`color-code-${code}`} code={code}>
      <input type="radio" id={`color-code-${code}`} {...input} />
      {checked && <Icon icon="tick" />}
    </ColorWrapper>
  )
}

const ColorField = (props) => {
  const { color } = props
  return (
    <Field
      name="color"
      type="radio"
      component={ColorOption}
      {...props}
      value={color}
    />
  )
}

export default ColorField
