import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { updateListRequest } from './listsActions'
import { getCardsById } from '../Cards/cardsSelectors'

import ElipsisIcon from 'react-icons/lib/fa/ellipsis-h'
import Card from '../Cards/Card'
import ListTitle from './ListTitle/ListTitle'
import {
  OuterListWrapper,
  ListWrapper,
  ListHeader,
  ListFooter,
  ListDropZone,
  ScrollContainer,
  ListButton
} from './listsStyledComponents'

const mapState = (state, ownProps) => ({
  cards: getCardsById(state, ownProps.list.cards)
})

const actions = { updateListRequest }

class List extends Component {
  render() {
    const { list, cards, index, updateListRequest } = this.props
    const { id, name } = list

    return (
      <Draggable
        draggableId={`list-${id}`}
        type="LIST"
        index={index}
      >
        {(provided, snapshot) => {
          const onMouseDown = (event) => {
            if (event.target.nodeName === 'TEXTAREA') return
            provided.dragHandleProps.onMouseDown(event)
          }

          const onKeyDown = (event) => {
            if (event.target.nodeName === 'TEXTAREA') return
            provided.dragHandleProps.onKeyDown(event)
          }

          const patched = {
            onMouseDown,
            onKeyDown
          }

          return (
            <OuterListWrapper>
              <ListWrapper
                innerRef={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                {...patched}
                style={provided.draggableProps.style}
              >
                <ListHeader>
                  <ListTitle
                    name={name}
                    id={id}
                    updateListRequest={updateListRequest}
                  />
                  <ListButton><ElipsisIcon /></ListButton>
                </ListHeader>
                <ScrollContainer>
                  <Droppable
                    droppableId={id}
                    type="CARD"
                  >
                    {(provided2, snapshot) => (
                      <ListDropZone
                        innerRef={provided2.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                      >
                        {cards.map((card, index) => (
                          <Card
                            key={card.id}
                            card={card}
                            index={index}
                          />
                        ))}
                        {provided2.placeholder}
                      </ListDropZone>
                    )}
                  </Droppable>
                </ScrollContainer>
                <ListFooter>
                  Some Acition
                </ListFooter>
              </ListWrapper>
              {provided.placeholder}
            </OuterListWrapper>
          )
        }}
      </Draggable>
    )
  }
}

export default connect(mapState, actions)(List)
