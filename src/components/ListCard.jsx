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
        {(provided3, snapshot3) => (
          <Link to={`/boards/${1}/card/${card.id}`}>
            <div>
              <Container
                className="card"
                innerRef={provided3.innerRef}
                isDragging={snapshot3.isDragging}
                style={provided3.draggableStyle}
                {...provided3.dragHandleProps}
              >
                {card.title}
              </Container>
              {provided3.placeholder}
            </div>
          </Link>
        )}
      </Draggable>
    );
  }
}

export default ListCard
