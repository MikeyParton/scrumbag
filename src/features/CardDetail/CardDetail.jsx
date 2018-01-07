import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCardById } from 'features/BoardDetail/Cards/cardsSelectors'
import { Modal, Header } from './cardDetailStyles'

const mapState = (state, ownProps) => ({
  card: getCardById(state, ownProps.match.params.cardId)
})

class CardDetail extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.maybeClose);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.maybeClose);
  }

  close = () => {
    this.props.history.push(`/boards/${this.props.card.boardId}`)
  }

  maybeClose = (event) => {
    if (this.modal && !this.modal.contains(event.target)) {
      this.close()
    }
  }

  render() {
    const { card } = this.props
    if (!card) return null

    const { name } = card

    return (
      <Modal innerRef={(modal) => { this.modal = modal }}>
        <Header>
          <h3>{name}</h3>
          <button onClick={this.close}>Close</button>
        </Header>
      </Modal>
    )
  }
}

CardDetail.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

const withState = connect(mapState, null)(CardDetail)
export default withRouter(withState)
