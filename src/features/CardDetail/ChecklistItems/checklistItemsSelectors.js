import { createSelector } from 'reselect'
import { getCardDetail } from '../cardDetailSelectors'

const getChecklistItems = createSelector(
  getCardDetail,
  cardDetail => cardDetail.checklistItems
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
