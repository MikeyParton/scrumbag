import React, { Component } from 'react'
import { connect } from 'react-redux'
import AbsolutePosition from './AbsolutePosition'
import { hideMenu } from './contextMenuActions'

import { MenuContainer, Header, Title, CloseButton } from './contextMenuStyles'

const actions = { hideMenu }

export class ContextMenu extends Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (e) => {
    if (!this.node || !this.node.contains(e.target) ) {
      this.props.hideMenu()
    }
  }

  render() {
    const { location, hideMenu, title } = this.props

    return (
      <AbsolutePosition
        left={location.x + 2}
        top={location.y}
        className="contextMenu"
        nodeRef={node => this.node = node}
      >
        <MenuContainer>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={hideMenu} />
          </Header>
          {this.props.children}
        </MenuContainer>
      </AbsolutePosition>
    )
  }
}

export default connect(null, actions)(ContextMenu);
