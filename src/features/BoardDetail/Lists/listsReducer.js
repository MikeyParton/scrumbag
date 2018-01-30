import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'

import { removeFromList, addToList } from './listUtils'
import { MOVE_LIST, UPDATE_LIST_SUCCESS } from './listsConstants'
import { MOVE_CARD } from '../Cards/cardsConstants'
import { BOARD_DETAIL_SUCCESS } from '../boardDetailConstants'

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

const byIdSucess = (state, payload) => payload.lists || state

const allIdsSuccess = (state, payload) => {
  if (payload.lists) return Object.keys(payload.lists)
  return state
}

const byId = createReducer({}, {
  [BOARD_DETAIL_SUCCESS]: byIdSucess,
  [MOVE_CARD]: moveCard,
  [UPDATE_LIST_SUCCESS]: updateList
})

const allIds = createReducer([], {
  [BOARD_DETAIL_SUCCESS]: allIdsSuccess,
  [MOVE_LIST]: moveList
})

export default combineReducers({
  byId,
  allIds
})
