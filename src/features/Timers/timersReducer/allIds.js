import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'
import {
  createTimerRequest,
  startTimerRequest,
  stopTimerRequest
} from '../timersRequests'

const loadTimers = (state, payload) => {
  if (!payload.timers) return state
  const items = [...state, ...Object.keys(payload.timers)]
  return [...new Set(items)]
}

export default createReducer([], {
  [getBoardDetailRequest.constants.success]: loadTimers,
  [getCardDetailRequest.constants.success]: loadTimers,
  [createTimerRequest.constants.success]: loadTimers,
  [startTimerRequest.constants.success]: loadTimers,
  [stopTimerRequest.constants.success]: loadTimers
})
