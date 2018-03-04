import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AutoTextArea from './AutoTextArea'

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

class FormInput extends React.Component {
  render() {
    const {
      innerRef,
      autoFocus,
      placeholder,
      type,
      input,
      onResize,
      ...rest
    } = this.props

    const Component = type === 'autoTextArea' ? AutoTextArea : Input

    return (
      <Component
        innerRef={innerRef}
        autoFocus={autoFocus}
        placeholder={placeholder}
        type={type}
        onResize={onResize}
        {...input}
        {...rest}
      />
    )
  }
}

FormInput.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  onResize: PropTypes.func,
}

FormInput.defaultProps = {
  autoFocus: false,
  placeholder: '',
  type: '',
  input: {},
  onResize: () => {}
}

export default FormInput
