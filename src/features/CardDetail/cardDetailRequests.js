import CreateRequest from 'common/utils/CreateRequest'
import { singleCardSchema } from './cardDetailSchema'

export const getCardDetailRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/GET_CARD_DETAIL',
  request: {
    method: 'get'
  },
  responseSchema: singleCardSchema
})
