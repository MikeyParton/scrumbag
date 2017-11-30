/* @flow */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import type { CardType } from '../types'

const grid = 8

const Container = styled.div`
  margin-bottom: ${grid}px;
  padding: ${grid * 2}px;
  background-color: ${({ isDragging }) => (isDragging ? 'lightgreen' : 'grey')};
  user-select: none;
`

type Props = {
  card: CardType
}

class ListCard extends Component<Props> {
  render() {
    const { card } = this.props

    return (
      <Draggable draggableId={card.id} type="CARD">
        {(provided, snapshot) => (
          <Link to={`/card/${card.id}`}>
            <div>
              <Container
                innerRef={provided.innerRef}
                isDragging={snapshot.isDragging}
                style={provided.draggableStyle}
                {...provided.dragHandleProps}
              >
                {card.title}
              </Container>
              {provided.placeholder}
            </div>
          </Link>
        )}
      </Draggable>
    );
  }
}

export default ListCard
