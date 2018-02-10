import React from 'react'
import styled from 'styled-components'
import DrawerButton from './DrawerButton'

const Wrapper = styled.div`
  height: 100px;
  background-color: red;
  padding: ${props => props.theme.grid}px;
  flex-shrink: 0;
`


class Drawer extends React.Component {
  render() {
    return (
      <Wrapper>
        <DrawerButton />
      </Wrapper>
    )
  }
}

export default Drawer
