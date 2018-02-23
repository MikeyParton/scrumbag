import { createSelector } from 'reselect'
import { getCardDetail } from '../cardDetailSelectors'
import { makeGetChecklistItemsByChecklistId } from '../ChecklistItems/checklistItemsSelectors'

export const getChecklists = createSelector(
  getCardDetail,
  cardDetail => cardDetail.checklists
)

export const getChecklistIds = createSelector(
  getChecklists,
  checklists => checklists.allIds
)

export const makeGetChecklistById = id => (
  createSelector(
    getChecklists,
    checklists => checklists.byId[id]
  )
)

export const getEditingTitleId = createSelector(
  getChecklists,
  checklists => checklists.editingTitleId
)

export const makeIsEditingTitle = id => (
  createSelector(
    getEditingTitleId,
    editingTitleId => editingTitleId == id
  )
)

export const getAddingChecklistItemId = createSelector(
  getChecklists,
  checklists => checklists.addingChecklistItemId
)

export const makeIsAddingChecklistItem = id => (
  createSelector(
    getAddingChecklistItemId,
    addingChecklistItemId => addingChecklistItemId == id
  )
)

export const makeGetPercentageComplete = (id) => {
  const getChecklistItems = makeGetChecklistItemsByChecklistId(id)
  return createSelector(
    getChecklistItems,
    (checklistItems) => {
      const total = checklistItems.length
      if (total === 0) return 0
      const completed = checklistItems.filter(cli => cli.status === 'completed').length
      return Math.round((completed / total) * 100)
    }
  )
}
