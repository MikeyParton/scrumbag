/* @flow */
import { cardActions } from 'state/ducks/card'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { listSelectors, listActions } from '../state/ducks/list'
import List from './List'
import type { ListType } from '../types'

const grid = 8

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
`

const Full = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

type Props = {
  lists: ListType[],
  moveCard: Function,
  moveList: Function
}

type State = {
  dragging: boolean
}

class Board extends Component<Props, State> {
  state = {
    dragging: false
  }

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
    this.setState({ dragging: true })
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
                {lists.map(list => <List dragging={this.state.dragging} key={list.id} list={list} />)}
                {provided.placeholder}
              </Container>
          )}
          </Droppable>
        </DragDropContext>
      </Full>
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
