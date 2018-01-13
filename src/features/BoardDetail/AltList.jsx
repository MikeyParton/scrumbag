import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { getCardsById } from './Cards/cardsSelectors'

const mapState = (state, ownProps) => ({
  cards: getCardsById(state, ownProps.list.cards)
})

const listBackgroundColor = '#e2e4e6'
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
})


const ListWrapper = styled.div`
  background-color: ${listBackgroundColor};
  display: flex;
  flex-direction: column;
  user-select: none;
  min-width: 250px;
  max-height: 100%;
  border-radius: 3px;

  margin-right: 20px;

  &:first-of-type {
    margin-left: 20px;
  }
`

export const ListHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`

export const ListFooter = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`

const ListDropZone = styled.div`
  min-height: 100px;
  background: ${props => props.isDraggingOver ? 'lightblue' : 'lightgrey'};
  padding: ${grid}px;
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
                  <Draggable
                    key={card.id}
                    draggableId={card.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {card.name}
                        </div>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
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
