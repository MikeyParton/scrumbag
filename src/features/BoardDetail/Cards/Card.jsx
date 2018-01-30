import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import { Container, CardWrapper } from './cardStyledComponents'

class Card extends React.Component {
  render() {
    const { card, index } = this.props
    const { id, name, boardId } = card

    return (
      <Draggable
        draggableId={`card-${card.id}`}
        index={index}
      >
        {(provided, snapshot) => (
          <Container>
            <Link to={`/boards/${boardId}/card/${id}`}>
              <CardWrapper
                innerRef={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >

                <div>{name}</div>
              </CardWrapper>
              {provided.placeholder}
            </Link>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Card
