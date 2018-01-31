import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container, CardWrapper } from './cardStyledComponents'

class Card extends React.Component {
  render() {
    const { card, index } = this.props
    const { id, slug, name, boardSlug } = card

    return (
      <Draggable
        draggableId={`card-${id}`}
        index={index}
      >
        {(provided, snapshot) => (
          <Container>
            <Link to={`/boards/${boardSlug}/card/${slug}`}>
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

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    boardSlug: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default Card
