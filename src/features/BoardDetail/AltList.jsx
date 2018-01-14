import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import styled from 'styled-components'
import { darken } from 'polished'

import ElipsisIcon from 'react-icons/lib/fa/ellipsis-h'

import ListTitle from './Lists/ListTitle/ListTitle'
import { updateListRequest } from './Lists/listsActions'
import { getCardsById } from './Cards/cardsSelectors'
import Card from './AltCard'

const mapState = (state, ownProps) => ({
  cards: getCardsById(state, ownProps.list.cards)
})

const actions = { updateListRequest }

const OuterListWrapper = styled.div`
  height: 100%;

  &:first-child {
    margin-left: ${props => 2 * props.theme.grid}px;
  }
`

const ListWrapper = styled.div`
  background-color: ${props => props.theme.listBackgroundColor};
  display: flex;
  flex-direction: column;
  user-select: none;
  min-width: 250px;
  max-height: 100%;
  border-radius: 3px;
  padding: ${props => props.theme.grid}px;
  margin-right: ${props => 2 * props.theme.grid}px;
`

export const ListHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  padding: ${props => props.theme.grid}px;
`

export const ListFooter = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  padding: ${props => props.theme.grid}px;
`

const ListDropZone = styled.div`
  /* FOLLOW THESE RULES AND EVERYONE WILL BE HAPPY

  1. DO NOT put any padding or margin on the top or
  left as it will affect the animation of a card
  entering an empty list

  2. Some margin or padding is needed at the bottom
  to stop dropzone from collapsing when trying to
  drop a card right at the end
  */

  min-height: 58px;
  background: ${({ isDraggingOver }) => isDraggingOver ? 'lightblue' : 'lightgrey'};
  padding-right: ${props => props.theme.grid}px;
  /* RULE 2 */
  margin-bottom: ${props => props.theme.grid}px;
`

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`

export const ListButton = styled.div`
  border-radius: 3px;
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-transition: background-color 0.25s;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${props => darken(0.10, props.theme.listBackgroundColor)};
  }
`

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
