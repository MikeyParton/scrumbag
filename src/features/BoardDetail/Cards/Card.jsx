import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'
import { Container } from './cardStyles'

class Card extends Component {
  render() {
    const { card } = this.props

    return (
      <Draggable draggableId={card.id} type="CARD">
        {(cardProvided, cardSnapshot) => (
          <Link to={`/boards/${1}/card/${card.id}`}>
            <div>
              <Container
                className="card"
                innerRef={cardProvided.innerRef}
                isDragging={cardSnapshot.isDragging}
                style={cardProvided.draggableStyle}
                {...cardProvided.dragHandleProps}
              >
                {card.title}
              </Container>
              {cardProvided.placeholder}
            </div>
          </Link>
        )}
      </Draggable>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Card
