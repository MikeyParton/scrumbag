import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getBoardUrl } from 'features/BoardDetail/boardDetailSelectors'
import CheckSquare from 'react-icons/lib/fa/check-square'

import { showMenu } from 'features/ContextMenu/contextMenuActions'

import { CloseButton, Loading, PopButton, IconButton } from 'common/components'
import { cardUrl } from 'config/api'
import CardTitle from './Title/Title'
import { getCardDetailRequest } from './cardDetailRequests'

import { getCard, getLoading } from './cardDetailSelectors'
import { Modal, Header, Overlay, CardBody, Actions, Content } from './cardDetailStyles'

import NewChecklist from './NewChecklist/NewChecklist'

const mapState = state => ({
  boardUrl: getBoardUrl(state),
  card: getCard(state),
  loading: getLoading(state)
})

const actions = {
  showMenu,
  getCard: getCardDetailRequest.actions.request
}

class CardDetail extends Component {
  componentDidMount() {
    const { match, getCard } = this.props
    const { 0: type, id } = match.params

    if (type === 'c') {
      getCard({ requestUrl: cardUrl(id) })
    }
  }

  close = () => {
    const { boardUrl, history } = this.props
    if (boardUrl) {
      history.push(boardUrl)
    }
  }

  innerContent = () => {
    const { card } = this.props
    const { id } = card

    return (
      <div>
        <Header>
          <CardTitle id={id} />
          <CloseButton onClick={this.close} />
        </Header>
        <CardBody>
          <Content>
            Content
          </Content>
          <Actions>
            Actions
            <PopButton
              content={<NewChecklist />}
              button={
                <IconButton
                  dark
                  block
                  text="Checklist"
                  icon={<CheckSquare />}
                />
              }
            />
          </Actions>
        </CardBody>
      </div>
    )
  }

  content = () => {
    const { loading } = this.props

    return (
      <div>
        <Overlay onClick={this.close} />
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
  boardUrl: PropTypes.string.isRequired,
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
