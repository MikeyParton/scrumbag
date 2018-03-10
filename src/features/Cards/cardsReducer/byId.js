import { createReducer, oneLevelDeepMerge } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { getCardDetailRequest, createCardRequest, updateCardRequest } from '../cardsRequests'

export const loadCards = (state, payload) => {
  if (!payload.cards) return state
  return {
    ...state,
    ...oneLevelDeepMerge(state, payload.cards)
  }
}

export default createReducer({}, {
  [getBoardDetailRequest.constants.success]: loadCards,
  [updateCardRequest.constants.success]: loadCards,
  [createCardRequest.constants.success]: loadCards,
  [getCardDetailRequest.constants.success]: loadCards
})
