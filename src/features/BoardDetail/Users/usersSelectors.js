import { createSelector } from 'reselect'

const getUsers = state => state.boardDetail.users

export const getAllUsers = createSelector(
  getUsers,
  users => users.allIds.map(id => users.byId[id])
)
