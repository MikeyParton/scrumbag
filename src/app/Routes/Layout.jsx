import React from 'react'
import PropTypes from 'prop-types'
import NavBar from 'features/NavBar/NavBar'
import ModalManager from 'features/ModalManager/ModalManager'
import ContextMenuManager from 'features/ContextMenu/ContextMenuManager'

import styled from 'styled-components'

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: scroll;
`

const Layout = props => (
  <FullPage id="page">
    <NavBar />
    <Content>
      <ModalManager />
      <ContextMenuManager />
      {props.children}
    </Content>
  </FullPage>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
