import React from 'react'
import BoardTile from 'components/BoardTile'

const boards = [
  { id: '1', name: 'Super Secret Project' },
  { id: '2', name: 'Doing stuff' }
]

class Home extends React.Component {

  render() {
    return (
      <div>
        { boards.map(b => <BoardTile {...b} />) }
      </div>
    )
  }
}

export default Home
