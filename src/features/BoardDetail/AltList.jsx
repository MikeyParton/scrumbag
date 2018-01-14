import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { getCardsById } from './Cards/cardsSelectors'
import Card from './AltCard'

const mapState = (state, ownProps) => ({
  cards: getCardsById(state, ownProps.list.cards)
})

const ListWrapper = styled.div`
  background-color: ${props => props.theme.listBackgroundColor};
  display: flex;
  flex-direction: column;
  user-select: none;
  min-width: 250px;
  max-height: 100%;
  border-radius: 3px;
  padding: ${props => props.theme.grid}px;

  margin-right: 20px;

  &:first-of-type {
    margin-left: 20px;
  }
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

class List extends Component {
  render() {
    const { list, cards } = this.props
    const { id, name } = list

    return (
      <ListWrapper>
        <ListHeader>
          {name}
        </ListHeader>
        <ScrollContainer>
          <Droppable
            droppableId={id}
            type="CARD"
          >
            {(provided, snapshot) => (
              <ListDropZone
                innerRef={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {cards.map((card, index) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </ListDropZone>
            )}
          </Droppable>
        </ScrollContainer>
        <ListFooter>
          Some Acition
        </ListFooter>
      </ListWrapper>
    )
  }
}

export default connect(mapState, null)(List)
