import { createSelector } from 'reselect'

const getUsers = state => state.users

export const getAllUsers = createSelector(
  getUsers,
  users => users.allIds.map(id => users.byId[id])
)

export const makeGetUserById = id => (
  createSelector(
    getUsers,
    users => users.byId[id]
  )
)
