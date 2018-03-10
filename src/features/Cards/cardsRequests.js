import CreateRequest from 'common/utils/CreateRequest'
import { reset } from 'redux-form'
import { cardsSchema } from './cardsSchema'

export const createCardRequest = new CreateRequest({
  constantPrefix: 'NEW_CARD/CREATE_CARD',
  request: {
    method: 'post',
    responseSchema: cardsSchema
  },
  afterSuccess: [{
    action: reset,
    args: ['NewCard']
  }]
})

export const getCardDetailRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/GET_CARD_DETAIL',
  request: {
    method: 'get',
    responseSchema: cardsSchema
  },
})

export const updateCardRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/UPDATE_CARD',
  request: {
    method: 'put',
    responseSchema: cardsSchema
  },
})
