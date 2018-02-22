import CreateRequest from 'common/utils/CreateRequest'
import { singleCardSchema, singleChecklistSchema } from './cardDetailSchema'

export const getCardDetailRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/GET_CARD_DETAIL',
  request: {
    method: 'get',
    responseSchema: singleCardSchema
  },
})

export const updateCardRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/UPDATE_CARD',
  request: {
    method: 'put',
    responseSchema: singleCardSchema
  },
})

export const createChecklistRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/CREATE_CHECKLIST',
  request: {
    method: 'post',
    responseSchema: singleChecklistSchema
  }
})

export const updateChecklistRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/UPDATE_CHECKLIST',
  request: {
    method: 'put',
    responseSchema: singleChecklistSchema
  },
})
