import React from 'react'
import styled from 'styled-components'
import SpinnerIcon from 'react-icons/lib/fa/spinner'
import { rotateAnimation } from './animation'

const SpinningSpinner = styled(SpinnerIcon)`
  animation: ${rotateAnimation} 1s infinite linear;
  font-size: 20px;
  color: ${props => props.theme.colors[props.color] || 'black'};
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Loading = (props) => (
  <LoadingContainer>
    <SpinningSpinner {...props} />
  </LoadingContainer>
)

export default Loading
