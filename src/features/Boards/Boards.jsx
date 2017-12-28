import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import BoardForm from 'features/BoardForm/BoardForm'
import BoardTile from './BoardTile'
import Loading from 'common/components/Loading'
import { boardsRequest } from './boardsActions'
import { getAllBoards, loading } from './boardsSelectors'

const mapState = state => ({
  boards: getAllBoards(state),
  loading: loading(state)
})

const actions = {
  boardsRequest
}

class Boards extends React.Component {
  componentDidMount() {
    this.props.boardsRequest()
  }

  render() {
    const { boards, loading } = this.props
    return (
      <Grid fluid>
        <Row>
          { loading && <Loading /> }
          <Col key={'new-board'} xs={12} sm={6} md={4}>
            <BoardForm />
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
