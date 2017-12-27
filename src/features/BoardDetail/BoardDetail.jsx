import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { Container, Full } from './boardStyles'
import List from './Lists/List'

import { moveCard } from './Cards/cardsActions'
import { moveList } from './Lists/listsActions'
import { getAllLists } from './Lists/listsSelectors'

const mapState = state => ({
  lists: getAllLists(state)
})

const actions = {
  moveCard,
  moveList
}

class BoardDetail extends Component {
  onDragEnd = (result) => {
    if (!result.destination) return

    if (result.type === 'CARD') {
      this.props.moveCard({
        id: result.draggableId,
        startListId: result.source.droppableId,
        endListId: result.destination.droppableId,
        startIndex: result.source.index,
        endIndex: result.destination.index
      })
    }

    if (result.type === 'COLUMN') {
      this.props.moveList({
        id: result.draggableId,
        startIndex: result.source.index,
        endIndex: result.destination.index
      })
    }
  }

  onDragStart = () => {
    // this.props.publishDrag
  }

  render() {
    const { lists } = this.props

    return (
      <Full>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <Droppable
            droppableId="board"
            type="COLUMN"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <Container innerRef={provided.innerRef} isDragging={snapshot.isDragging}>
                {lists.map(list => (
                  <List
                    key={list.id}
                    list={list}
                  />
                ))}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </Full>
    )
  }
}

BoardDetail.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
  moveCard: PropTypes.func.isRequired,
  moveList: PropTypes.func.isRequired,
}

BoardDetail.defaultProps = {
  lists: []
}

export default connect(mapState, actions)(BoardDetail)
