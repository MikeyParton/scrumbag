import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { withRouter } from 'react-router-dom'

import NewList from './NewList/NewList'
import List from './Lists/List'
import { BoardArea, InnerContainer } from './boardStyledComponents'

import { boardDetailRequest } from './boardDetailActions'
import { moveCard } from './Cards/cardsActions'
import { moveList } from './Lists/listsActions'
import { getListIds } from './Lists/listsSelectors'

const mapState = state => ({
  listIds: getListIds(state)
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
    const { listIds, match } = this.props
    const { boardId } = match.params

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="board"
          type="LIST"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <BoardArea innerRef={provided.innerRef}>
              {listIds.map((listId, index) => (
                <List
                  key={listId}
                  id={listId}
                  index={index}
                />
              ))}
              <NewList boardId={boardId} />
            </BoardArea>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default connect(mapState, actions)(withRouter(BoardDetail))
