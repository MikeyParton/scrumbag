import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 8px;

  .hasError {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
  }
}
`

const Error = styled.div`
  margin-top: 2px;
  min-height: 17px;
  font-size: 12px;
  color: ${props => props.theme.colors.error}
`

const FormGroup = props => (
  <Container>
    <Input
      className={props.meta.error ? "hasError" : null}
      placeholder={props.placeholder}
      type={props.type}
      {...props.input}
    />
    <Error>{props.meta.error}</Error>
  </Container>
)

FormGroup.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.string
  })
}

FormGroup.defaultProps = {
  placeholder: '',
  type: '',
  input: {},
  meta: {
    error: 'Error here'
  }
}

export default FormGroup
