import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'

const loadLabels = (state, payload) => {
  if (!payload.labels) return state
  return {
    ...state,
    ...payload.labels
  }
}

export default createReducer({}, {
  [getBoardDetailRequest.constants.success]: loadLabels,
  [getCardDetailRequest.constants.success]: loadLabels
})
