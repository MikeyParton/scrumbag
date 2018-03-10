import { createReducer } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { createCardRequest, updateCardRequest } from '../cardsRequests'

export const loadCards = (state, payload) => {
  if (payload.cards) return Object.keys(payload.cards)
  return state
}

export const loadCard = (state, payload) => ([
  ...state,
  Object.keys(payload.cards)
])

export default createReducer([], {
  [getBoardDetailRequest.constants.success]: loadCards,
  [updateCardRequest.constants.success]: loadCard,
  [createCardRequest.constants.success]: loadCard
})
