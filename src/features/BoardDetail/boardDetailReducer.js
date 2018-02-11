import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'

import { getBoardDetailRequest } from './boardDetailRequests'

import cards from './Cards/cardsReducer'
import lists from './Lists/listsReducer'
import newList from './NewList/newListReducer'
import newCard from './NewCard/newCardReducer'

export const boardDetailSuccess = (state, payload) => Object.values(payload.board)[0]

const board = createReducer({}, {
  [getBoardDetailRequest.constants.success]: boardDetailSuccess
})

export default combineReducers({
  board,
  cards,
  lists,
  newList,
  newCard
})
