import { formValueSelector } from 'redux-form'
import { getAllUsers } from 'features/BoardDetail/Users/usersSelectors'
import { createSelector } from 'reselect'

export const getAddMemberFilter = state => (
  formValueSelector('AddMember')(state, 'filter')
)

export const getFilteredUsers = createSelector(
  getAddMemberFilter,
  getAllUsers,
  (filter, users) => {
    if (filter === undefined) return users
    return users.filter(user => (
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(filter.toLowerCase())
    ))
  }
)
