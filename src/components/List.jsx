import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { cardSelectors } from '../state/ducks/card'
import ListCard from './ListCard'

const grid = 8

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? 'lightblue' : 'lightgrey')};
  display: flex;
  flex-direction: column;
  padding: ${grid}px ${grid}px 0 ${grid}px;
  margin: 0 ${2 * grid}px 0 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: ${grid}px;
`

const Dropzone = styled.div`
  min-height: 58px;
`

class List extends Component {
  render() {
    const { cards, list } = this.props
    const { id, title } = list

    return (
      <Draggable draggableId={id} type="COLUMN">
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              style={provided.draggableStyle}
              {...provided.dragHandleProps}
            >
              <Droppable droppableId={id} type="CARD">
                {(provided2, snapshot2) => (
                  <Wrapper isDraggingOver={snapshot2.isDraggingOver}>
                    <Title>{title}</Title>
                    <Dropzone innerRef={provided2.innerRef}>
                      {cards.map(card => (
                        <ListCard key={card.id} card={card} />
                      ))}
                      {provided2.placeholder}
                    </Dropzone>
                    <div>Add a card</div>
                  </Wrapper>
                )}
              </Droppable>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    )
  }
}

List.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = (state, ownProps) => ({
  cards: cardSelectors.getCards(state, ownProps.list.cards)
})

export default connect(
  mapStateToProps,
  null
)(List)
