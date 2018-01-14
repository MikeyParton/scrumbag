import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`

const CardWrapper = styled.div`
  user-select: none;
  padding: ${props => (props.theme.grid * 2)}px;
  margin: 0 0 ${props => props.theme.grid}px 0;
  background-color: grey;
`

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

                <div>{card.name}</div>
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
