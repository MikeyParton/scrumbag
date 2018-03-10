import { createSelector } from 'reselect'

const getLabels = state => state.labels

export const getAllLabelIds = createSelector(
  getLabels,
  labels => labels.allIds
)

export const makeGetLabelById = id => (
  createSelector(
    getLabels,
    labels => labels.byId[id]
  )
)
