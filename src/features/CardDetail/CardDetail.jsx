import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCardBySlug } from 'features/BoardDetail/Cards/cardsSelectors'
import { Modal, Header, Overlay } from './cardDetailStyles'

const mapState = (state, ownProps) => ({
  card: getCardBySlug(state, ownProps.match.params.cardId)
})

class CardDetail extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.maybeClose);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.maybeClose);
  }

  close = () => {
    this.props.history.push(`/boards/${this.props.card.boardSlug}`)
  }

  maybeClose = (event) => {
    if (this.modal && !this.modal.contains(event.target)) {
      this.close()
    }
  }

  content = () => {
    const { card } = this.props
    if (!card) return null

    const { name } = card

    return (
      <div>
        <Overlay />
        <Modal innerRef={(modal) => { this.modal = modal }}>
          <Header>
            <h3>{name}</h3>
            <button onClick={this.close}>Close</button>
          </Header>
        </Modal>
      </div>
    )
  }

  render() {
    return ReactDOM.createPortal(this.content(), document.getElementById('page'))
  }
}

CardDetail.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    boardSlug: PropTypes.string.isRequired
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

CardDetail.defaultProps = {
  card: null
}

const withState = connect(mapState, null)(CardDetail)
export default withRouter(withState)
