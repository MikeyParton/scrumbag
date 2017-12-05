/* @flow */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { cardSelectors } from '../state/ducks/card'
import ListCard from './ListCard'
import type { ListType, CardType, State } from '../types'

const grid = 8

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? 'lightblue' : 'lightgrey')};
  display: flex;
  flex-direction: column;
  padding: ${grid}px;
  margin: 0 ${2 * grid}px 0 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
  max-height: 100%;
  box-sizing: border-box;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: ${grid}px;
`

const Dropzone = styled.div`
  min-height: 58px;
`

const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: scroll;

  .card {
    margin-bottom: ${grid}px
  }

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

const ScrollWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
`

const ScrollZone = styled.div`
  position: absolute;
  ${props => props.top && 'top: 0;'}
  ${props => props.bottom && 'bottom: 0;'}
  bottom: 0;
  height: 40px;
  width: 100%;
  background-color: transparent;
`

type StateProps = {
  cards: CardType[]
}

type OwnProps = {
  list: ListType,
  dragging: boolean
}

type Props = {
  cards: CardType[],
  list: ListType,
  dragging: boolean
}

class List extends Component<Props> {
  scroll = (val) => {
    this.interval = setInterval(() => {
      this.scrollContainer.scrollTop += val
    }, 100)
  }

  stopScroll = () => {
    clearInterval(this.interval)
  }

  render() {
    const { cards, list } = this.props
    const { id, title } = list

    return (
      <Draggable draggableId={id} type="COLUMN">
        {(provided, snapshot) => (
          <div style={{ height: '100%', position: 'relative' }}>
            <div
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              style={{ ...provided.draggableStyle, height: '500px' }}
              {...provided.dragHandleProps}
            >
              <Droppable droppableId={id} type="CARD">
                {(provided2, snapshot2) => (
                  <Wrapper isDraggingOver={snapshot2.isDraggingOver}>
                    <Title>{title}</Title>
                    <ScrollWrapper>
                      {/* <ScrollZone top onMouseOver={() => this.scroll(-10)} onMouseLeave={this.stopScroll} /> */}
                      <ScrollContainer innerRef={(scroll) => { this.scrollContainer = scroll }}>
                        <Dropzone innerRef={provided2.innerRef}>
                          {cards.map(card => (
                            <ListCard key={card.id} card={card} />
                          ))}
                          {provided2.placeholder}
                        </Dropzone>
                      </ScrollContainer>
                      {/* <ScrollZone bottom onMouseOver={() => this.scroll(10)} onMouseLeave={this.stopScroll} /> */}
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

const mapStateToProps = (state: State, ownProps: OwnProps):StateProps => ({
  cards: cardSelectors.getCards(state, ownProps.list.cards)
})

export default connect(
  mapStateToProps,
  null
)(List)
