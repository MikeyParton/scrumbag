import { createSelector } from 'reselect'

const getChecklistItems = state => state.cardDetail.checklistItems

export const makeGetChecklistItemById = id => (
  createSelector(
    getChecklistItems,
    checklistItems => checklistItems.byId[id]
  )
)
