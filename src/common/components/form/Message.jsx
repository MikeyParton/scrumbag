import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import { fadeInAnimation } from 'common/components/animation'

const Container = styled.div`
  ${(props) => {
    const { theme, type } = props
    const { grid, colors, borderRadius } = theme

    const color = colors[type]

    return (`
      padding: ${grid}px;
      color: ${color};
      margin-bottom: ${grid}px;
      background-color: ${lighten(0.4, color)};
      border-radius: ${borderRadius}px;
      border: 1px solid ${color};
      overflow: hidden;

      animation: 1s ${fadeInAnimation};
    `)
  }}
  `

const Message = props => (
  <Container type={props.type}>
    {props.children}
  </Container>
)

Message.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Message
