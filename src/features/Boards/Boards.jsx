import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import BoardForm from 'features/BoardForm/BoardForm'
import { modalOpen } from 'features/ModalManager/modalManagerActions'
import BoardTile from './BoardTile'
import Loading from 'common/components/Loading'
import { Tile } from 'features/Boards/BoardTile'
import { getAllBoards, loading } from './boardsSelectors'
import { getBoardsRequest } from './boardsRequests'

const mapState = state => ({
  boards: getAllBoards(state),
  loading: loading(state)
})

const actions = {
  boardsRequest: getBoardsRequest.actions.request,
  modalOpen
}

class Boards extends React.Component {
  componentDidMount() {
    this.props.boardsRequest()
  }

  openNewBoardModal = () => {
    this.props.modalOpen({
      title: 'Create a Board',
      type: 'BoardForm'
    })
  }

  render() {
    const { boards, loading } = this.props
    return (
      <Grid fluid>
        <Row>
          { loading && <Loading /> }
          <Col key={'new-board'} xs={12} sm={6} md={4}>
            <Tile onClick={this.openNewBoardModal}>
              <p>New Board</p>
            </Tile>
          </Col>
          { boards.map((board) => (
            <Col key={board.id} xs={12} sm={6} md={4}>
              <BoardTile {...board} />
            </Col>
          ))}
        </Row>
      </Grid>
    )
  }
}

export default connect(mapState, actions)(Boards)
