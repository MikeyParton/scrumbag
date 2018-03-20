import { createReducer, oneLevelDeepMerge } from 'common/utils/reducerUtils'
import { getBoardDetailRequest } from 'features/BoardDetail/boardDetailRequests'
import { addUserRequest, removeUserRequest } from 'features/CardDetail/AddMember/addMemberRequests'
import { addLabelRequest, removeLabelRequest } from 'features/CardDetail/AddLabel/addLabelRequests'
import { getCardDetailRequest, createCardRequest, updateCardRequest } from '../cardsRequests'
import { createTimerRequest, deleteTimerRequest } from 'features/Timers/timersRequests'

export const loadCards = (state, payload) => {
  if (!payload.cards) return state
  return {
    ...state,
    ...oneLevelDeepMerge(state, payload.cards)
  }
}

export const loadTimer = (state, payload) => {
  const timer = Object.values(payload.timers)[0]
  const { id, cardId } = timer
  const card = state[cardId]
  return {
    ...state,
    [cardId]: {
      ...card,
      currentTimer: id
    }
  }
}

export const deleteTimer = (state, payload) => {
  const timer = Object.values(payload.timers)[0]
  const { id, cardId } = timer
  const card = state[cardId]
  const { currentTimer } = card
  if (currentTimer != id) return state

  return {
    ...state,
    [cardId]: {
      ...card,
      currentTimer: null
    }
  }
}

export default createReducer({}, {
  [getBoardDetailRequest.constants.success]: loadCards,
  [updateCardRequest.constants.success]: loadCards,
  [createCardRequest.constants.success]: loadCards,
  [getCardDetailRequest.constants.success]: loadCards,
  [addUserRequest.constants.success]: loadCards,
  [removeUserRequest.constants.success]: loadCards,
  [addLabelRequest.constants.success]: loadCards,
  [removeLabelRequest.constants.success]: loadCards,
  [createTimerRequest.constants.success]: loadTimer,
  [deleteTimerRequest.constants.success]: deleteTimer
})
