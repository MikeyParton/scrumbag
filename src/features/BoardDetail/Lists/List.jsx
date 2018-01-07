import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { Title, Wrapper, Dropzone, ScrollContainer, ScrollWrapper } from './listStyles'

import { getCardsById } from '../Cards/cardsSelectors'
import Card from '../Cards/Card'

const mapState = (state, ownProps) => ({
  cards: getCardsById(state, ownProps.list.cards)
})

class List extends Component {
  scroll = (val) => {
    this.interval = setInterval(() => {
      this.scrollContainer.scrollTop += val
    }, 100)
  }

  stopScroll = () => {
    clearInterval(this.interval)
  }

  render() {
    const { list, cards } = this.props
    const { id, name } = list

    return (
      <Draggable draggableId={String(id)} type="COLUMN">
        {(provided, snapshot) => (
          <div style={{ height: '100%', position: 'relative' }}>
            <div
              ref={provided.innerRef}
              // isDragging={snapshot.isDragging}
              style={{ ...provided.draggableStyle, height: '500px' }}
              {...provided.dragHandleProps}
            >
              <Droppable droppableId={String(id)} type="CARD">
                {(provided2, snapshot2) => (
                  <Wrapper isDraggingOver={snapshot2.isDraggingOver}>
                    <Title>{name}</Title>
                    <ScrollWrapper>
                      {/* <ScrollZone
                        top
                        onMouseOver={() => this.scroll(-10)}
                        onMouseLeave={this.stopScroll} />
                      */}
                      <ScrollContainer innerRef={(scroll) => { this.scrollContainer = scroll }}>
                        <Dropzone innerRef={provided2.innerRef}>
                          {cards.map(card => (
                            <Card key={card.id} card={card} />
                          ))}
                          {provided2.placeholder}
                        </Dropzone>
                      </ScrollContainer>
                      {/* <ScrollZone
                        bottom
                        onMouseOver={() => this.scroll(10)}
                        onMouseLeave={this.stopScroll} />
                      */}
                    </ScrollWrapper>
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
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(mapState, null)(List)
