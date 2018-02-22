import { createReducer } from 'common/utils/reducerUtils'
import {
  getCardDetailRequest,
  createChecklistRequest,
  updateChecklistRequest
} from 'features/CardDetail/cardDetailRequests'

const reloadChecklists = (state, payload) => {
  if (!payload.checklists) return {}
  return payload.checklists
}

const loadChecklists = (state, payload) => ({
  ...state,
  ...payload.checklists
})

export default createReducer([], {
  [getCardDetailRequest.constants.success]: reloadChecklists,
  [createChecklistRequest.constants.success]: loadChecklists,
  [updateChecklistRequest.constants.success]: loadChecklists
})
