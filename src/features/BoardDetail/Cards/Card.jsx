import React from 'react'
import { connect } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeGetCardById } from 'features/Cards/cardsSelectors'
import { Container, CardWrapper } from './cardStyledComponents'

const mapState = (state, ownProps) => {
  const getCardById = makeGetCardById(ownProps.id)
  return {
    card: getCardById(state)
  }
}

class Card extends React.Component {
  render() {
    const { id, index, card } = this.props

    if (!card) return null

    const { name, url } = card

    return (
      <Draggable
        draggableId={`card-${id}`}
        index={index}
      >
        {provided => (
          <Container>
            <Link to={url}>
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
  id: PropTypes.number.isRequired,
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    boardSlug: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default connect(mapState, null)(Card)
