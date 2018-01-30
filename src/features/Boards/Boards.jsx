import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { showMenu } from 'features/ContextMenu/contextMenuActions'
import BoardTile from './BoardTile'
import Loading from 'common/components/Loading'
import { Tile } from 'features/Boards/BoardTile'
import { getAllBoards, loading } from './boardsSelectors'
import { getBoardsRequest } from './boardsRequests'
import { Container } from './boardsStyles'

const mapState = state => ({
  boards: getAllBoards(state),
  loading: loading(state)
})

const actions = {
  boardsRequest: getBoardsRequest.actions.request,
  showMenu
}

class Boards extends React.Component {
  componentDidMount() {
    this.props.boardsRequest()
  }

  openNewBoardModal = () => {
    const bounds = this.newBoardTile.getBoundingClientRect()
    const { x, y } = bounds

    this.props.showMenu(
      x,
      y,
      'BoardForm',
      null
    )
  }

  render() {
    const { boards, loading } = this.props

    if (loading) {
      return <Loading />
    }

    return (
      <Container>
        <Grid fluid>
          <Row>
            <Col key={'new-board'} xs={12} sm={6} md={4}>
              <Tile
                innerRef={(node) => { this.newBoardTile = node }}
                onClick={this.openNewBoardModal}
              >
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
      </Container>
    )
  }
}

export default connect(mapState, actions)(Boards)
