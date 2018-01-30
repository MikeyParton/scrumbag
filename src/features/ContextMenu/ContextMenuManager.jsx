import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Portal } from 'react-portal'
import { getContextMenu } from './contextMenuSelectors'
import ContextMenu from './ContextMenu'
import BoardForm from 'features/BoardForm/BoardForm'
import PropTypes from 'prop-types'

const mapState = state => ({
  contextMenu: getContextMenu(state)
})

const menus = {
  BoardForm: {
    MenuComponent: BoardForm,
    title: 'Create a Board'
  }
}

class ContextMenuManager extends Component {
  render() {
    const { contextMenu } = this.props
    const { show, location, type, menuArgs } = contextMenu

    const selectedMenu = menus[type]

    if (!(show && selectedMenu)) return null

    const { MenuComponent, title } = selectedMenu

    return (
      <Portal isOpened>
        <ContextMenu location={location} title={title}>
          <MenuComponent menuArgs={menuArgs} />
        </ContextMenu>
      </Portal>
    )
  }
}

ContextMenuManager.propTypes = {
  contextMenu: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }).isRequired,
    type: PropTypes.string,
    menuArgs: PropTypes.shape()
  }).isRequired
}

export default connect(mapState, null)(ContextMenuManager)
