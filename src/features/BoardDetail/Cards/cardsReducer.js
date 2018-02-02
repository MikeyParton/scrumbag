import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'
import { BOARD_DETAIL_SUCCESS } from '../boardDetailConstants'
import newCardRequest from '../NewCard/newCardRequest'

export const boardDetailsSuccessById = (state, payload) => payload.cards || state

export const boardDetailsSuccessAllIds = (state, payload) => {
  if (payload.cards) return Object.keys(payload.cards)
  return state
}

export const byIdCreateCard = (state, payload) => ({
  ...state,
  [payload.card.id]: payload.card
})

export const allIdsCreateCard = (state, payload) => ([
  ...state,
  payload.card.id
])

const byId = createReducer({}, {
  [BOARD_DETAIL_SUCCESS]: boardDetailsSuccessById,
  [newCardRequest.constants.success]: byIdCreateCard
})

const allIds = createReducer([], {
  [BOARD_DETAIL_SUCCESS]: boardDetailsSuccessAllIds,
  [newCardRequest.constants.success]: allIdsCreateCard
})

export default combineReducers({
  byId,
  allIds
})
