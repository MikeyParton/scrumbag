/* @flow */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { listSelectors, listActions } from '../state/ducks/list'
import List from './List'
import { cardActions } from '../state/ducks/card'
import type { ListType } from '../types'

const grid = 8

const Container = styled.div`
  width: 100vw;
  display: inline-flex;
  align-items: flex-start;
  padding: ${2 * grid}px;
`

type Props = {
  lists: ListType[],
  moveCard: Function,
  moveList: Function
}

class Board extends Component<Props> {
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

  render() {
    const { lists } = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <Container innerRef={provided.innerRef} isDragging={snapshot.isDragging}>
              {lists.map(list => <List key={list.id} list={list} />)}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists: listSelectors.getAllLists(state)
})

export default connect(
  mapStateToProps,
  {
    moveCard: cardActions.moveCard,
    moveList: listActions.moveList
  }
)(Board)
