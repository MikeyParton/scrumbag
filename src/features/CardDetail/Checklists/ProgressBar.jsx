import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const padding = 0
const outerHeight = 10
const innerHeight = outerHeight - (2 * padding)

const OuterBar = styled.div`
  width: 100%;
  height: ${outerHeight}px;
  border-radius: ${outerHeight / 2}px;
  background-color: black;
  display: flex;
  align-items: center;
`

const InnerBar = styled.div`
  margin: 0 ${padding}px;
  width: ${props => props.width || 0}%;
  height: ${innerHeight}px;
  border-radius: ${innerHeight / 2}px;
  background-color: blue;
  transition: width 0.5s;
`

const ProgressBar = (props) => {
  const { percent } = props
  return (
    <OuterBar>
      <InnerBar width={percent} />
    </OuterBar>
  )
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default ProgressBar
