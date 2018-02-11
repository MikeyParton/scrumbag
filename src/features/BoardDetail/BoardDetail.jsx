import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { withRouter } from 'react-router-dom'
import { boardDetailUrl } from 'config/api'

import NewList from './NewList/NewList'
import List from './Lists/List'

import { OuterContainer, BoardArea } from './boardStyledComponents'

import { getBoardDetailRequest } from './boardDetailRequests'
import { moveCard } from './Cards/cardsActions'
import { moveList } from './Lists/listsActions'
import { getListIds } from './Lists/listsSelectors'

const mapState = state => ({
  listIds: getListIds(state)
})

const actions = {
  getBoard: getBoardDetailRequest.actions.request,
  moveCard,
  moveList
}

class BoardDetail extends Component {
  componentDidMount() {
    const { match, getBoard } = this.props

    const { id } = match.params
    getBoard({
      requestUrl: boardDetailUrl(id)
    })
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
    const { id } = match.params

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="board"
          type="LIST"
          direction="horizontal"
        >
          {provided => (
            <OuterContainer>
              <BoardArea innerRef={provided.innerRef}>
                {listIds.map((listId, index) => (
                  <List
                    key={listId}
                    id={listId}
                    index={index}
                  />
                ))}
                <NewList boardId={id} />
              </BoardArea>
            </OuterContainer>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

BoardDetail.propTypes = {
  listIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  moveList: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  getBoard: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(mapState, actions)(withRouter(BoardDetail))
