import React from 'react'
import NavBar from 'features/NavBar/NavBar'
import { Grid, Row, Col } from 'react-bootstrap'
import BoardTile from './BoardTile'

const boards = [
  { id: '1', name: 'Super Secret Project' },
  { id: '2', name: 'Doing stuff' },
  { id: '1', name: 'Super Secret Project' },
  { id: '2', name: 'Doing stuff' },
  { id: '1', name: 'Super Secret Project' },
  { id: '2', name: 'Doing stuff' },
  { id: '2', name: 'Doing stuff' }

]

class Home extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          { boards.map((board, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <BoardTile {...board} />
            </Col>
          ))}
        </Row>
      </Grid>
    )
  }
}

export default Home
