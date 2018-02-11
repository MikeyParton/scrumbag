import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'

import { removeFromList, addToList } from './listUtils'
import { MOVE_LIST } from './listsConstants'
import { MOVE_CARD } from '../Cards/cardsConstants'

import { createListRequest } from '../NewList/newListRequest'
import createCardRequest from '../NewCard/newCardRequest'

import {
  getBoardDetailRequest,
  updateListRequest
} from '../boardDetailRequests'

export const moveCard = (state, payload) => {
  const { id, startListId, startIndex, endListId, endIndex } = payload
  const sourceListCards = state[startListId].cards
  const newSourceListCards = removeFromList(sourceListCards, startIndex)

  const endListCards = startListId === endListId
    ? newSourceListCards
    : state[endListId].cards

  const newEndListCards = addToList(endListCards, id, endIndex)

  return {
    ...state,
    [startListId]: { ...state[startListId], cards: newSourceListCards },
    [endListId]: { ...state[endListId], cards: newEndListCards }
  }
}

export const moveList = (state, payload) => {
  const { id, startIndex, endIndex } = payload
  const newOrder = removeFromList(state, startIndex)
  return addToList(newOrder, id, endIndex)
}

export const updateList = (state, payload) => {
  return {
    ...state,
    ...payload.lists
  }
}

const byIdSucess = (state, payload) => {
  if (!payload.lists) return state

  return {
    ...payload.lists,
    scroll: 0
  }
}

const allIdsSuccess = (state, payload) => {
  if (payload.lists) return Object.keys(payload.lists)
  return state
}

const byIdCreateList = (state, payload) => ({
  ...state,
  [payload.list.id]: payload.list
})

const byIdCreateCard = (state, payload) => {
  const { id, listId } = payload.card
  const oldList = state[listId]

  const newList = {
    ...oldList,
    cards: [...oldList.cards, id]
  }

  return {
    ...state,
    [listId]: newList
  }
}

const allIdsCreateList = (state, payload) => [...state, payload.list.id]

const byId = createReducer({}, {
  [getBoardDetailRequest.constants.success]: byIdSucess,
  [MOVE_CARD]: moveCard,
  [updateListRequest.constants.success]: updateList,
  [createListRequest.constants.success]: byIdCreateList,
  [createCardRequest.constants.success]: byIdCreateCard
})

const allIds = createReducer([], {
  [getBoardDetailRequest.constants.success]: allIdsSuccess,
  [MOVE_LIST]: moveList,
  [createListRequest.constants.success]: allIdsCreateList
})

export default combineReducers({
  byId,
  allIds
})
