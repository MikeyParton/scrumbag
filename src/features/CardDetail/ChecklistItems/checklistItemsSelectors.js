import { createSelector } from 'reselect'
import { getCardDetail } from '../cardDetailSelectors'

const getChecklistItems = createSelector(
  getCardDetail,
  cardDetail => cardDetail.checklistItems
)

const getEditingId = createSelector(
  getChecklistItems,
  checklistItems => checklistItems.editingId
)

export const makeIsEditing = id => (
  createSelector(
    getEditingId,
    editingId => editingId == id
  )
)

export const makeGetChecklistItemById = id => (
  createSelector(
    getChecklistItems,
    checklistItems => checklistItems.byId[id]
  )
)

export const makeGetChecklistItemsByChecklistId = checklistId => (
  createSelector(
    getChecklistItems,
    checklistItems => Object.values(checklistItems.byId).filter(cli => cli.checklistId === checklistId)
  )
)
