import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'

const loadUsers = (state, payload) => {
  if (!payload.users) return state
  const items = [...state, ...Object.keys(payload.users)]
  return [...new Set(items)]
}

export default createReducer([], {
  [getBoardDetailRequest.constants.success]: loadUsers,
  [getCardDetailRequest.constants.success]: loadUsers
})
