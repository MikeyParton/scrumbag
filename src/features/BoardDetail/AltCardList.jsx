import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from './AltCard'

const grid = 8

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


class CardsLists extends React.Component {
  render() {
    const { cards } = this.props
    return (
      <div>
        {cards.map((card, index) => (
          <Draggable
            key={card.id}
            draggableId={card.id}
            index={index}
          >
            {(provided, snapshot) => (
              <Card
                card={card}
                provided={provided}
                snapshot={snapshot}
              />
            )}
          </Draggable>
        ))}
      </div>
    )
  }
}

export default CardsLists
