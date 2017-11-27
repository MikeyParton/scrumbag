import { combineReducers } from 'redux'
import types from './types'
import { cardTypes } from '../card'

const initialState = {
  byId: {
    1: { id: '1', title: 'List number 1', cards: ['1', '2'] },
    2: { id: '2', title: 'List number 2', cards: ['3', '4'] }
  },
  allIds: ['1', '2']
}

const removeFromList = (list, index) => {
  const result = Array.from(list)
  result.splice(index, 1)
  return result
}

const addToList = (list, element, index) => {
  const result = Array.from(list)
  result.splice(index, 0, element)
  return result
}

const moveCard = (state, action) => {
  const sourceListCards = state[action.startListId].cards
  const newSourceListCards = removeFromList(sourceListCards, action.startIndex)

  const endListCards = action.startListId === action.endListId
    ? newSourceListCards
    : state[action.endListId].cards

  const newEndListCards = addToList(endListCards, action.id, action.endIndex)

  return {
    ...state,
    [action.startListId]: { ...state[action.startListId], cards: newSourceListCards },
    [action.endListId]: { ...state[action.endListId], cards: newEndListCards }
  }
}


const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case cardTypes.MOVE_CARD:
      return moveCard(state, action)
    default:
      return state
  }
}

const moveList = (state, action) => {
  const newOrder = removeFromList(state, action.startIndex)
  return addToList(newOrder, action.id, action.endIndex)
}

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.MOVE_LIST:
      return moveList(state, action)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  allIds
})
