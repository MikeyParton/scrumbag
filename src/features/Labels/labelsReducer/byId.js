import { createReducer, oneLevelDeepMerge } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'
import { createLabelRequest, updateLabelRequest } from 'features/Labels/labelsRequests'

const loadLabels = (state, payload) => {
  if (!payload.labels) return state
  return {
    ...state,
    ...oneLevelDeepMerge(state, payload.labels)
  }
}

export default createReducer({}, {
  [getBoardDetailRequest.constants.success]: loadLabels,
  [getCardDetailRequest.constants.success]: loadLabels,
  [updateLabelRequest.constants.success]: loadLabels,
  [createLabelRequest.constants.success]: loadLabels
})
