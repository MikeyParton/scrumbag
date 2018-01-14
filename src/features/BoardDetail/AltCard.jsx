import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const CardWrapper = styled.div`
  user-select: none;
  padding: ${props => (props.theme.grid * 2)}px;
  margin: 0 0 ${props => props.theme.grid}px 0;
  background-color: grey;
`

class Card extends React.Component {
  render() {
    const { card, index, theme } = this.props
    return (
      <Draggable
        draggableId={`card-${card.id}`}
        index={index}
      >
        {(provided, snapshot) => (
          <div>
            <CardWrapper
              innerRef={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div>{card.name}</div>
            </CardWrapper>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    )
  }
}

export default Card
