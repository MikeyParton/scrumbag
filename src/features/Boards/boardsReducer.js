import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { BOARDS_REQUEST, BOARDS_SUCCESS, BOARDS_ERROR } from './boardsConstants'

export const byIdSucess = (state, payload) => {
  return payload.boards
}

export const allIdsSuccess = (state, payload) => {
  return Object.keys(payload.boards)
}

const byId = createReducer({}, {
  [BOARDS_SUCCESS]: byIdSucess
})

const allIds = createReducer([], {
  [BOARDS_SUCCESS]: allIdsSuccess
})

const loading = createReducer(false, {
  [BOARDS_REQUEST]: () => true,
  [BOARDS_SUCCESS]: () => false,
  [BOARDS_ERROR]: () => false
})

export default combineReducers({
  byId,
  allIds,
  loading
})
