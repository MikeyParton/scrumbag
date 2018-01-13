import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'
import { Container, OuterContainer } from './cardStyles'

class Card extends Component {
  render() {
    const { card, index } = this.props
    const { id, name, boardId } = card

    return (
      <Draggable
        draggableId={id}
        type="CARD"
        index={index}
      >
        {(cardProvided, cardSnapshot) => (
          <OuterContainer>
            <Link to={`/boards/${boardId}/card/${id}`}>
              <div>
                <Container
                  className="card"
                  innerRef={cardProvided.innerRef}
                  isDragging={cardSnapshot.isDragging}
                  {...cardProvided.draggableProps}
                  {...cardProvided.dragHandleProps}
                  style={cardProvided.draggableProps.style}
                >
                  {name}
                </Container>
                {cardProvided.placeholder}
              </div>
            </Link>
          </OuterContainer>
        )}
      </Draggable>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    boardId: PropTypes.number,
  }).isRequired
}

export default Card
