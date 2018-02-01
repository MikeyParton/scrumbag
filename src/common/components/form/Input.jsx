import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #cdd2d4;
  background-color: #e2e4e6;
  padding: 7px;
  outline: none;

  -webkit-transition: background-color 0.4s; /* Safari */
  transition: background-color 0.4s;

  &:focus {
    background-color: white;
  }
`

const FormInput = (props) => {
  const { placeholder, type, input } = props
  return (
    <Input
      placeholder={placeholder}
      type={type}
      {...input}
    />
  )
}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object
}

FormInput.defaultProps = {
  placeholder: '',
  type: '',
  input: {}
}

export default FormInput
