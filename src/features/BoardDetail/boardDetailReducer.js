import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'

import { getBoardDetailRequest } from './boardDetailRequests'
import lists from './Lists/listsReducer'
import newList from './NewList/newListReducer'
import newCard from './NewCard/newCardReducer'

const initialState = {
  board: {},
  loading: true
}

export const boardDetailSuccess = (state, payload) => ({
  ...Object.values(payload.board)[0],
  loading: false
})

const board = createReducer(initialState, {
  [getBoardDetailRequest.constants.success]: boardDetailSuccess,
  [getBoardDetailRequest.constants.request]: () => initialState
})

export default combineReducers({
  board,
  lists,
  newList,
  newCard
})
