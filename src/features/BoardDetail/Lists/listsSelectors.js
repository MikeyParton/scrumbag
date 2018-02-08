import { createSelector } from 'reselect'

export const getLists = state => state.boardDetail.lists

export const makeGetListById = id => (
  createSelector(
    getLists,
    lists => lists.byId[id]
  )
)

export const getListIds = createSelector(
  getLists,
  lists => lists.allIds
)
