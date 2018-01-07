import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { BOARD_DETAIL_SUCCESS } from './boardDetailConstants'
import cards from './Cards/cardsReducer'
import lists from './Lists/listsReducer'

export const boardDetailSuccess = (state, payload) => payload.board

const board = createReducer({}, {
  [BOARD_DETAIL_SUCCESS]: boardDetailSuccess
})

export default combineReducers({
  board,
  cards,
  lists
})
