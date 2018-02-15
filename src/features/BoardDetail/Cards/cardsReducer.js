import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'

import { updateCardRequest } from 'features/CardDetail/cardDetailRequests'
import { getBoardDetailRequest } from '../boardDetailRequests'
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
  [getBoardDetailRequest.constants.success]: boardDetailsSuccessById,
  [updateCardRequest.constants.success]: byIdCreateCard,
  [newCardRequest.constants.success]: byIdCreateCard
})

const allIds = createReducer([], {
  [getBoardDetailRequest.constants.success]: boardDetailsSuccessAllIds,
  [newCardRequest.constants.success]: allIdsCreateCard
})

export default combineReducers({
  byId,
  allIds
})
