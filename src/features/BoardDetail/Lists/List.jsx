import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { listUrl } from 'config/api'

import { updateListRequest } from '../boardDetailRequests'
import { makeGetListById } from './listsSelectors'
import { showNewCard, hideNewCard } from '../NewCard/newCardActions'
import { makeIsShowCardVisible } from '../NewCard/newCardSelectors'

import ElipsisIcon from 'react-icons/lib/fa/ellipsis-h'
import Card from '../Cards/Card'
import NewCardButton from '../NewCard/NewCardButton'
import ListTitle from './ListTitle/ListTitle'
import NewCardFormContainer from '../NewCard/NewCardFormContainer'


import {
  OuterListWrapper,
  ListWrapper,
  ListHeader,
  ListDropZone,
  ScrollContainer,
  ListButton
} from './listsStyledComponents'

const mapState = (state, ownProps) => {
  const getListById = makeGetListById(ownProps.id)
  const isShowCardVisible = makeIsShowCardVisible(ownProps.id)

  return {
    list: getListById(state),
    isShowCardVisible: isShowCardVisible(state)
  }
}

const actions = {
  updateList: updateListRequest.actions.request,
  showNewCard,
  hideNewCard
}

class List extends Component {
  setRef = (node) => {
    this.newCardForm = node
  }

  scrollToNewCardForm = () => {
    if (!this.newCardForm) return
    this.newCardForm.scrollIntoView()
  }

  render() {

    const {
      list,
      index,
      updateList,
      showNewCard,
      hideNewCard,
      newCardListId,
      isShowCardVisible
    } = this.props

    const {
      id,
      name,
      boardId,
      cards
    } = list

    return (
      <Draggable
        draggableId={`list-${id}`}
        type="LIST"
        index={index}
      >
        {(provided) => {
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
                    value={name}
                    requestUrl={listUrl(id)}
                    onBlur={updateList}
                  />
                  <ListButton><ElipsisIcon /></ListButton>
                </ListHeader>
                <ScrollContainer>
                  <Droppable
                    droppableId={`list-${id}`}
                    type="CARD"
                  >
                    {(provided2, snapshot) => (
                      <ListDropZone
                        innerRef={provided2.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                      >
                        {cards.map((cardId, index) => (
                          <Card
                            key={cardId}
                            id={cardId}
                            index={index}
                          />
                        ))}
                        {provided2.placeholder}
                      </ListDropZone>
                    )}
                  </Droppable>
                  { isShowCardVisible && (
                    <NewCardFormContainer
                      setRef={this.setRef}
                      scrollTo={this.scrollToNewCardForm}
                      boardId={boardId}
                      listId={id}
                      handleCancel={hideNewCard}
                    />
                  )}
                </ScrollContainer>
                { !isShowCardVisible && (
                  <NewCardButton handleClick={() => showNewCard(id)} />
                )}
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
