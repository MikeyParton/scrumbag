import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Flex, Box } from 'grid-styled'

import { getBoardUrl } from 'features/BoardDetail/boardDetailSelectors'
import CheckSquare from 'react-icons/lib/fa/check-square'
import UserIcon from 'react-icons/lib/fa/user'
import PlusIcon from 'react-icons/lib/md/add'

import { showMenu } from 'features/ContextMenu/contextMenuActions'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'

import { Button, CashMeOutside, CloseButton, Loading, PopButton, IconButton } from 'common/components'
import { cardUrl } from 'config/api'
import CardTitle from './Title/Title'

import { getCard, getLoading } from './cardDetailSelectors'
import { Container, Modal, Header, CardBody, Actions, Content } from './cardDetailStyles'

import Checklists from './Checklists/Checklists'
import NewChecklist from './NewChecklist/NewChecklist'
import AddMember from './AddMember/AddMember'
import Members from './Members/Members'

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
    const { id, users: selectedUsers } = card

    return (
      <div>
        <Header>
          <CardTitle id={id} />
          <CloseButton onClick={this.close} />
        </Header>
        <CardBody>
          <Content>
            <Members userIds={selectedUsers} />
            <Checklists />
          </Content>
          <Actions>
            Actions
            <PopButton
              content={<NewChecklist />}
              button={
                <IconButton
                  dark
                  block
                  wide
                  text="Checklist"
                  icon={<CheckSquare />}
                />
              }
            />
            <PopButton
              content={<AddMember selectedUsers={selectedUsers} />}
              button={
                <IconButton
                  dark
                  block
                  wide
                  text="Member"
                  icon={<UserIcon />}
                />
              }
            />
          </Actions>
        </CardBody>
      </div>
    )
  }

  content = () => {
    const { loading, card } = this.props

    return (
      <Container>
        <CashMeOutside
          onClickOutside={this.close}
          render={provided => (
            <Modal innerRef={provided}>
              { (loading || !card)
                ? <Loading />
                : this.innerContent() }
            </Modal>
          )}
        />
      </Container>
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
