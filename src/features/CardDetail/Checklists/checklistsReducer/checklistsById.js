import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'

import {
  createChecklistRequest,
  updateChecklistRequest,
  createChecklistItemRequest
} from 'features/CardDetail/cardDetailRequests'

import { deleteItemRequest } from 'features/CardDetail/ChecklistItems//checklistItemsRequests'

const reloadChecklists = (state, payload) => {
  if (!payload.checklists) return {}
  return payload.checklists
}

const loadChecklists = (state, payload) => ({
  ...state,
  ...payload.checklists
})

const loadChecklistItem = (state, payload) => {
  const checklistItem = Object.values(payload.checklistItems)[0]
  const { checklistId, id } = checklistItem
  const checklist = state[checklistId]
  const checklistItems = [...checklist.checklistItems, id]

  return {
    ...state,
    [checklistId]: {
      ...checklist,
      checklistItems
    }
  }
}

const removeChecklistItem = (state, payload) => {
  const checklistItem = Object.values(payload.checklistItems)[0]
  const { checklistId, id } = checklistItem
  const checklist = state[checklistId]
  const checklistItems = checklist.checklistItems.filter(itemId => itemId !== id)

  return {
    ...state,
    [checklistId]: {
      ...checklist,
      checklistItems
    }
  }
}

export default createReducer([], {
  [getCardDetailRequest.constants.success]: reloadChecklists,
  [createChecklistRequest.constants.success]: loadChecklists,
  [updateChecklistRequest.constants.success]: loadChecklists,
  [createChecklistItemRequest.constants.success]: loadChecklistItem,
  [deleteItemRequest.constants.success]: removeChecklistItem
})
