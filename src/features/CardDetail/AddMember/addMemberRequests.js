import CreateRequest from 'common/utils/CreateRequest'
import { cardsSchema } from 'features/Cards/cardsSchema'

export const addUserRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/ADD_MEMBER/ADD_USER',
  request: {
    method: 'post',
    responseSchema: cardsSchema
  }
})

export const removeUserRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/ADD_MEMBER/REMOVE_USER',
  request: {
    method: 'post',
    responseSchema: cardsSchema
  },
})
