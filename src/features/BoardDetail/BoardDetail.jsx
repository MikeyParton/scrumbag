import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { withRouter } from 'react-router-dom'

import List from './Lists/List'
import { BoardArea } from './boardStyledComponents'

import { boardDetailRequest } from './boardDetailActions'
import { moveCard } from './Cards/cardsActions'
import { moveList } from './Lists/listsActions'
import { getAllLists } from './Lists/listsSelectors'

const mapState = state => ({
  lists: getAllLists(state)
})

const actions = {
  boardDetailRequest,
  moveCard,
  moveList
}

class BoardDetail extends Component {
  componentDidMount() {
    const { boardDetailRequest, match } = this.props
    const { boardId } = match.params
    boardDetailRequest(boardId)
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return

    const id = result.draggableId.split('-')[1]

    if (result.type === 'CARD') {
      this.props.moveCard({
        id,
        startListId: result.source.droppableId.split('-')[1],
        endListId: result.destination.droppableId.split('-')[1],
        startIndex: result.source.index,
        endIndex: result.destination.index
      })
    }

    if (result.type === 'LIST') {
      this.props.moveList({
        id,
        startIndex: result.source.index,
        endIndex: result.destination.index
      })
    }
  }

  render() {
    const { lists } = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="board"
          type="LIST"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <BoardArea innerRef={provided.innerRef}>
              {lists.map((list, index) => (
                <List
                  key={list.id}
                  list={list}
                  index={index}
                />
              ))}
            </BoardArea>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default connect(mapState, actions)(withRouter(BoardDetail))
