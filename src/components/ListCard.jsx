import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const grid = 8

const Container = styled.div`
  margin-bottom: ${grid}px;
  padding: ${grid * 2}px;
  background-color: ${({ isDragging }) => (isDragging ? 'lightgreen' : 'grey')};
  user-select: none;
`

class ListCard extends Component {
  render() {
    const { card } = this.props

    return (
      <Draggable draggableId={card.id} type='CARD'>
        {(provided, snapshot) => (
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
        )}
      </Draggable>
    );
  }
}

ListCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default ListCard
