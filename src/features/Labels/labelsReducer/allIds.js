import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'
import { createLabelRequest } from 'features/Labels/labelsRequests'

const loadLabels = (state, payload) => {
  if (!payload.labels) return state
  const items = [...state, ...Object.keys(payload.labels)]
  return [...new Set(items)]
}

export default createReducer([], {
  [getBoardDetailRequest.constants.success]: loadLabels,
  [getCardDetailRequest.constants.success]: loadLabels,
  [createLabelRequest.constants.success]: loadLabels
})
