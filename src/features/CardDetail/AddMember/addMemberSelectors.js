import { formValueSelector } from 'redux-form'
import { getAllUsers } from 'features/Users/usersSelectors'
import { createSelector } from 'reselect'

export const getAddMemberFilter = state => (
  formValueSelector('AddMember')(state, 'filter')
)

export const getFilteredUsers = createSelector(
  getAddMemberFilter,
  getAllUsers,
  (filter, users) => {
    let results = users

    if (filter !== undefined) {
      results = results.filter(user => (
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(filter.toLowerCase())
      ))
    }

    return results.map(user => user.id)
  }
)
