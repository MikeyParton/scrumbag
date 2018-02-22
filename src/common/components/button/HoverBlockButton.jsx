import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  ${(props) => {
    const background = props.theme.colors[props.background]
    const text = props.theme.colors[props.text]

    return `
      cursor: pointer;
      width: 100%;
      color: ${text};
      border-radius: ${props.theme.borderRadius}px;
      padding: ${props.theme.grid}px;
      background-color: ${background};

      &:hover {
        background-color: ${darken(0.05, background)};
      }
    `
  }}
  `

const HoverBlockButton = (props) => {
  const { handleClick, children, ...styleProps } = props
  return (
    <Container {...styleProps} onClick={handleClick}>
      { children }
    </Container>
  )
}

HoverBlockButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  background: PropTypes.string,
  text: PropTypes.string
}

HoverBlockButton.defaultProps = {
  text: 'black',
  background: 'default'
}

export default HoverBlockButton
