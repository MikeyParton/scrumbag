import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal, Header } from './modalStyles'
import { getModalManager } from './modalManagerSelectors'
import { modalClose, modalCloseAll } from './modalManagerActions'

const mapState = state => ({
  ...getModalManager(state)
})

const actions = {
  modalClose,
  modalCloseAll
}

class ModalManager extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.hanldeClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hanldeClickOutside);
  }

  close = () => {
    this.props.modalClose()
  }

  hanldeClickOutside = (event) => {
    if (this.modal && !this.modal.contains(event.target)) {
      this.props.modalCloseAll()
    }
  }

  render() {
    const { open, modals } = this.props
    if (!open) return null

    return (
      <Modal innerRef={(modal) => { this.modal = modal }}>
        <Header>
          <h3>Test Modal</h3>
          <button onClick={this.close}>Close</button>
        </Header>
      </Modal>
    )
  }
}

export default connect(mapState, actions)(ModalManager)
