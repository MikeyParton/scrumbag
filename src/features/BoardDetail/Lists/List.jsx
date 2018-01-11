import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import ElipsisIcon from 'react-icons/lib/fa/ellipsis-h'
import { OuterListWrapper, Wrapper, Dropzone, ScrollContainer, ScrollWrapper, ListHeader, ListButton } from './listStyles'
import ListTitle from './ListTitle/ListTitle'

import { getCardsById } from '../Cards/cardsSelectors'
import { updateListRequest } from './listsActions'
import Card from '../Cards/Card'

const mapState = (state, ownProps) => ({
  cards: getCardsById(state, ownProps.list.cards)
})

const actions = { updateListRequest }

class List extends Component {
  state = {
    editingTitle: false
  }

  scroll = (val) => {
    this.interval = setInterval(() => {
      this.scrollContainer.scrollTop += val
    }, 100)
  }

  stopScroll = () => {
    clearInterval(this.interval)
  }

  render() {
    const { list, cards, updateListRequest } = this.props
    const { id, name } = list

    return (
      <Draggable
        disableInteractiveElementBlocking={true}
        draggableId={String(id)}
        type="COLUMN"
      >
        {(provided, snapshot) => {
          const onMouseDown = (event) => {
            if (event.target.nodeName === 'TEXTAREA') return
            provided.dragHandleProps.onMouseDown(event)
          }

          const onKeyDown = (event) => {
            if (event.target.nodeName === 'TEXTAREA') return
            console.log('fuckme')
            provided.dragHandleProps.onKeyDown(event)
          }

          const patched = {
            onMouseDown,
            onKeyDown
          }

          return (
            <OuterListWrapper className="list-wrapper">
              <div
                ref={provided.innerRef}
                // isDragging={snapshot.isDragging}
                style={{ ...provided.draggableStyle, height: '100%', maxHeight: '100%' }}
                {...provided.dragHandleProps}
                {...patched}
              >
                <Droppable droppableId={String(id)} type="CARD">
                  {(provided2, snapshot2) => (
                    <Wrapper isDraggingOver={snapshot2.isDraggingOver}>
                      <ListHeader>
                        <ListTitle
                          name={name}
                          id={id}
                          updateListRequest={updateListRequest}
                        />
                        <ListButton><ElipsisIcon /></ListButton>
                      </ListHeader>
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
            </OuterListWrapper>
          )
        }}
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
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateListRequest: PropTypes.func.isRequired
}

export default connect(mapState, actions)(List)
