import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Icon } from 'common/components'

const Wrapper = styled.span`
  cursor: pointer;
  color: #9c9d9e;
  flex-shrink: 0;

  &:hover {
    color: ${darken(0.2, '#9c9d9e')};
  }
`

const CloseButton = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <Icon icon='close' />
  </Wrapper>
)

export default CloseButton
