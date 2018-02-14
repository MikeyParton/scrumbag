import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { CloseButton, Loading } from 'common/components'
import { cardUrl } from 'config/api'
import CardTitle from './Title/Title'
import { getCardDetailRequest } from './cardDetailRequests'

import { getCardDetail, getLoading } from './cardDetailSelectors'
import { Modal, Header, Overlay } from './cardDetailStyles'

const mapState = state => ({
  card: getCardDetail(state),
  loading: getLoading(state)
})

const actions = {
  getCard: getCardDetailRequest.actions.request
}

class CardDetail extends Component {
  componentDidMount() {
    const { match, getCard } = this.props
    const { 0: type, id } = match.params

    if (type === 'c') {
      getCard({ requestUrl: cardUrl(id) })
    }

    document.addEventListener('mousedown', this.maybeClose);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.maybeClose);
  }

  close = () => {
    this.props.history.push(`/b/${this.props.card.boardSlug}`)
  }

  maybeClose = (event) => {
    if (this.modal && !this.modal.contains(event.target)) {
      this.close()
    }
  }

  innerContent = () => {
    const { card } = this.props
    const { name } = card

    return (
      <Header>
        <CardTitle name={name} />
        <CloseButton onClick={this.close} />
      </Header>
    )
  }

  content = () => {
    const { loading } = this.props

    return (
      <div>
        <Overlay />
        <Modal innerRef={(modal) => { this.modal = modal }}>
          { loading
            ? <Loading />
            : this.innerContent() }
        </Modal>
      </div>
    )
  }

  render() {
    return ReactDOM.createPortal(this.content(), document.getElementById('page'))
  }
}

CardDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  getCard: PropTypes.func.isRequired,
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

const withState = connect(mapState, actions)(CardDetail)
export default withRouter(withState)
