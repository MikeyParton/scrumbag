import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { withRouter } from 'react-router-dom'

import List from './AltList'

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

    if (result.type === 'CARD') {
      this.props.moveCard({
        id: result.draggableId,
        startListId: result.source.droppableId,
        endListId: result.destination.droppableId,
        startIndex: result.source.index,
        endIndex: result.destination.index
      })
    }
  }

  render() {
    const { lists } = this.props
    if (lists.length === 0) return null
    const list = lists[0]

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <List list={list} />
      </DragDropContext>
    )
  }
}

export default connect(mapState, actions)(withRouter(BoardDetail))
