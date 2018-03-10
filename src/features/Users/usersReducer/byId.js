import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'

const loadUsers = (state, payload) => {
  if (!payload.users) return state
  return {
    ...state,
    ...payload.users
  }
}

export default createReducer({}, {
  [getBoardDetailRequest.constants.success]: loadUsers,
  [getCardDetailRequest.constants.success]: loadUsers
})
