import CreateRequest from 'common/utils/CreateRequest'
import { cardSchema } from 'features/CardDetail/cardDetailSchema'

export const assingUserRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/ADD_MEMBER/ADD_USER',
  request: {
    method: 'post',
    responseSchema: cardSchema
  },
})

export const removeUserRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/ADD_MEMBER/REMOVE_USER',
  request: {
    method: 'post',
    responseSchema: cardSchema
  },
})
