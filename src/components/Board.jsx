import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listSelectors } from '../state/ducks/list'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import List from './List'
import { cardActions } from '../state/ducks/card'
import styled from 'styled-components'

const grid = 8

const Container = styled.div`
  width: 100vw;
  display: inline-flex;
  align-items: flex-start;
  padding: ${2 * grid}px;
`

class Board extends Component {
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
  }

  render() {
    const { lists } = this.props

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Container
          // ref={provided.innerRef}
        >

        {/* <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
        >
          {(provided, snapshot) => ( */}
              {lists.map(list => {
                return (
                  <List
                    key={list.id}
                    list={list}
                  />
                )
              })}
              {/* {provided.placeholder} */}
          {/* )}
        </Droppable> */}
        </Container>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: listSelectors.getAllLists(state)
  }
}

export default connect(
  mapStateToProps,
  { moveCard: cardActions.moveCard }
)(Board)
