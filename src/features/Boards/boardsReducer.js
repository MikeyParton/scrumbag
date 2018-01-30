import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { getBoardsRequest, createBoardRequest } from './boardsRequests'

const { constants: getBoardsConstants } = getBoardsRequest
const { constants: createBoardConstants } = createBoardRequest

export const byIdSucess = (state, payload) => payload.boards || state

export const byIdCreateSucess = (state, payload) => {
  const { board } = payload
  return {
    ...state,
    [board.id]: board
  }
}

export const allIdsSuccess = (state, payload) => {
  if (payload.boards) {
    return Object.keys(payload.boards)
  }
  return state
}

export const allIdsCreateSuccess = (state, payload) => {
  return [...state, payload.board.id]
}

const byId = createReducer({}, {
  [getBoardsConstants.success]: byIdSucess,
  [createBoardConstants.success]: byIdCreateSucess
})

const allIds = createReducer([], {
  [getBoardsConstants.success]: allIdsSuccess,
  [createBoardConstants.success]: allIdsCreateSuccess
})

const loading = createReducer(false, {
  [getBoardsConstants.request]: () => true,
  [getBoardsConstants.success]: () => false,
  [getBoardsConstants.error]: () => false
})

export default combineReducers({
  byId,
  allIds,
  loading
})
