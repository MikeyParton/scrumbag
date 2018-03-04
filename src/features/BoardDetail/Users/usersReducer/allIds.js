import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from '../../boardDetailRequests'

const loadUsers = (state, payload) => {
  if (!payload.users) return state
  return Object.keys(payload.users)
}

export default createReducer([], {
  [getBoardDetailRequest.constants.success]: loadUsers
})
