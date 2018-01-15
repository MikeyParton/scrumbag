import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { BOARDS_SUCCESS, BOARDS_ERROR } from './boardsConstants'
import { CREATE_BOARD_REQUEST, CREATE_BOARD_SUCCESS, CREATE_BOARD_ERROR } from './boardsConstants'

export const byIdSucess = (state, payload) => payload.boards

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
  [BOARDS_SUCCESS]: byIdSucess,
  [CREATE_BOARD_SUCCESS]: byIdCreateSucess
})

const allIds = createReducer([], {
  [BOARDS_SUCCESS]: allIdsSuccess,
  [CREATE_BOARD_SUCCESS]: allIdsCreateSuccess
})

const loading = createReducer(false, {
  // [BOARDS_REQUEST]: () => true,
  [BOARDS_SUCCESS]: () => false,
  [BOARDS_ERROR]: () => false
})

export default combineReducers({
  byId,
  allIds,
  loading
})
