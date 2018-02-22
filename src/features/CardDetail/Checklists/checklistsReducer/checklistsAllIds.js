import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest, createChecklistRequest } from 'features/CardDetail/cardDetailRequests'

const reloadChecklists = (state, payload) => {
  if (!payload.checklists) return state
  return Object.keys(payload.checklists)
}

const loadChecklists = (state, payload) => ([
  ...state,
  Object.keys(payload.checklists)
])

export default createReducer([], {
  [getCardDetailRequest.constants.success]: reloadChecklists,
  [createChecklistRequest.constants.success]: loadChecklists
})
