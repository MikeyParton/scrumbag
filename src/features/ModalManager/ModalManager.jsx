import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BoardForm from 'features/BoardForm/BoardForm'
import { Modal, Header, Title, CloseButton } from 'common/components/Modal'
import { getModalManager } from './modalManagerSelectors'
import { modalClose } from './modalManagerActions'

const lookupTable = {
  BoardForm
}

const mapState = state => ({
  ...getModalManager(state)
})

const actions = {
  modalClose
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
      this.close()
    }
  }

  render() {
    const { open, type, title } = this.props
    if (!open) return null
    const SpecificComponent = lookupTable[type]

    return (
      <Modal innerRef={(modal) => { this.modal = modal }}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={this.close} />
        </Header>
        <SpecificComponent />
      </Modal>
    )
  }
}

export default connect(mapState, actions)(ModalManager)
