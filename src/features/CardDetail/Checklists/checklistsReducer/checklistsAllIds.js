import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest } from 'features/CardDetail/cardDetailRequests'

const loadChecklists = (state, payload) => {
  if (!payload.checklists) return state
  return Object.keys(payload.checklists)
}

export default createReducer([], {
  [getCardDetailRequest.constants.success]: loadChecklists
})
