import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { CREATE_BOARD_REQUEST, CREATE_BOARD_SUCCESS, CREATE_BOARD_ERROR } from './boardsConstants'
import { getBoardsRequest } from './boardsRequests'

const { request, success, error } = getBoardsRequest.constants

export const byIdSucess = (state, payload) => {
  debugger
  return payload.boards
}

export const byIdCreateSucess = (state, payload) => {
  const { board } = payload
  return {
    ...state,
    [board.id]: board
  }
}

export const allIdsSuccess = (state, payload) => {
  return Object.keys(payload.boards)
}

export const allIdsCreateSuccess = (state, payload) => {
  return [...state, payload.board.id]
}

const byId = createReducer({}, {
  [success]: byIdSucess,
  [CREATE_BOARD_SUCCESS]: byIdCreateSucess
})

const allIds = createReducer([], {
  [success]: allIdsSuccess,
  [CREATE_BOARD_SUCCESS]: allIdsCreateSuccess
})

const loading = createReducer(false, {
  [request]: () => true,
  [success]: () => false,
  [error]: () => false
})

export default combineReducers({
  byId,
  allIds,
  loading
})
