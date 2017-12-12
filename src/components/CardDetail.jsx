import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { cardSelectors } from '../state/ducks/card'

const Modal = styled.div`
  border-radius: 10px;
  position: absolute;
  max-width: 600px;
  width: calc(100vw - 100px);
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: white;
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25);
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

class CardDetail extends Component {
  close = () => {
    this.props.history.push('/boards/1')
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.maybeClose);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.maybeClose);
  }

  maybeClose = (event) => {
    if (this.modal && !this.modal.contains(event.target)) {
      this.close()
    }
  }

  render() {
    return (
      <Modal innerRef={(modal) => { this.modal = modal }}>
        <Header>
          <h3>{this.props.card.title}</h3>
          <button onClick={this.close}>Close</button>
        </Header>
      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: cardSelectors.getCardById(state, ownProps.match.params.id)
})

const withState = connect(
  mapStateToProps,
  null
)(CardDetail)

export default withRouter(withState)
