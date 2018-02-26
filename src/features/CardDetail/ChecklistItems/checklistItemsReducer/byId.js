import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest, createChecklistItemRequest } from 'features/CardDetail/cardDetailRequests'
import {
  updateItemRequest,
  checkItemRequest,
  uncheckItemRequest,
  deleteItemRequest
} from '../checklistItemsRequests'

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

const removeChecklistItem = (state, payload) => {
  const id = Object.keys(payload.checklistItems)[0]
  const { [id]: deleted, ...newState } = state
  return newState
}

export default createReducer([], {
  [getCardDetailRequest.constants.success]: reloadChecklistItems,
  [checkItemRequest.constants.success]: loadChecklistItems,
  [uncheckItemRequest.constants.success]: loadChecklistItems,
  [createChecklistItemRequest.constants.success]: loadChecklistItems,
  [updateItemRequest.constants.success]: loadChecklistItems,
  [deleteItemRequest.constants.success]: removeChecklistItem
})
