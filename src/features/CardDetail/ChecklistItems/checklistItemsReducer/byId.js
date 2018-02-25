import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest, createChecklistItemRequest } from 'features/CardDetail/cardDetailRequests'
import { updateItemRequest, checkItemRequest, uncheckItemRequest } from '../checklistItemsRequests'

const reloadChecklistItems = (state, payload) => {
  if (!payload.checklistItems) return {}
  return payload.checklistItems
}

const loadChecklistItems = (state, payload) => {
  if (!payload.checklistItems) return state
  return {
    ...state,
    ...payload.checklistItems
  }
}

export default createReducer([], {
  [getCardDetailRequest.constants.success]: reloadChecklistItems,
  [checkItemRequest.constants.success]: loadChecklistItems,
  [uncheckItemRequest.constants.success]: loadChecklistItems,
  [createChecklistItemRequest.constants.success]: loadChecklistItems,
  [updateItemRequest.constants.success]: loadChecklistItems
})
