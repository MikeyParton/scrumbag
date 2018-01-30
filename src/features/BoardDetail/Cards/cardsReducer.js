import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { BOARD_DETAIL_SUCCESS } from '../boardDetailConstants'

export const boardDetailsSuccessById = (state, payload) => payload.cards || state

export const boardDetailsSuccessAllIds = (state, payload) => {
  if (payload.cards) return Object.keys(payload.cards)
  return state
}

const byId = createReducer({}, {
  [BOARD_DETAIL_SUCCESS]: boardDetailsSuccessById
})

const allIds = createReducer([], {
  [BOARD_DETAIL_SUCCESS]: boardDetailsSuccessAllIds
})

export default combineReducers({
  byId,
  allIds
})
