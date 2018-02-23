import { createReducer } from 'common/utils/reducerUtils'
import {
  getCardDetailRequest,
  createChecklistRequest,
  updateChecklistRequest,
  createChecklistItemRequest
} from 'features/CardDetail/cardDetailRequests'

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

  return {
    ...state,
    [checklistId]: {
      ...checklist,
      checklistItems: [...checklist.checklistItems, id]
    }
  }
}

export default createReducer([], {
  [getCardDetailRequest.constants.success]: reloadChecklists,
  [createChecklistRequest.constants.success]: loadChecklists,
  [updateChecklistRequest.constants.success]: loadChecklists,
  [createChecklistItemRequest.constants.success]: loadChecklistItem
})
