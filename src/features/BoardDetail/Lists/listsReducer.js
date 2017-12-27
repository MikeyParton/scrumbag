import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'

import { removeFromList, addToList } from './listUtils'
import { MOVE_LIST } from './listsConstants'
import { MOVE_CARD } from '../Cards/cardsConstants'

const initialState = {
  byId: {
    1: { id: '1', title: 'List number 1', cards: ['1', '2', '5', '6', '7', '8', '9', '10', '11', '12'] },
    2: { id: '2', title: 'List number 2', cards: ['3', '4'] }
  },
  allIds: ['1', '2']
}

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

const byId = createReducer(initialState.byId, {
  [MOVE_CARD]: moveCard
})

const allIds = createReducer(initialState.allIds, {
  [MOVE_LIST]: moveList
})

export default combineReducers({
  byId,
  allIds
})
