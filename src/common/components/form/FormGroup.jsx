import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fadeInAnimation, headShakeAnimation } from 'common/components/animation'
import Input from './Input'

const Container = styled.div`
  margin-bottom: 8px;

  &.has-error {
    animation: ${headShakeAnimation} 1s;
  }
}
`

const ErrorContainer = styled.div`
  margin-top: 2px;
  min-height: 17px;
  color: ${props => props.theme.colors.error};
`

const Error = styled.div`
  font-size: 12px;
  animation: ${fadeInAnimation} 0.5s;
`

const FormGroup = (props) => {
  const { meta, ...inputProps } = props
  const { error } = meta
  return (
    <Container className={error ? 'has-error' : null}>
      <Input {...inputProps} />
      <ErrorContainer>
        { error && (
          <Error>
            {error}
          </Error>
        )}
      </ErrorContainer>
    </Container>
  )
}


FormGroup.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.arrayOf(PropTypes.string)
  })
}

FormGroup.defaultProps = {
  placeholder: '',
  type: '',
  input: {},
  meta: {
    error: []
  }
}

export default FormGroup
