import { createSelector } from 'reselect'
import { getCardDetail } from '../cardDetailSelectors'

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
