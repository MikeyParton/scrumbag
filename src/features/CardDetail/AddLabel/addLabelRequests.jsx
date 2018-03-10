import CreateRequest from 'common/utils/CreateRequest'
import { cardsSchema } from 'features/Cards/cardsSchema'

export const addLabelRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/ADD_LABEL/ADD_LABEL',
  request: {
    method: 'post',
    responseSchema: cardsSchema
  }
})

export const removeLabelRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/ADD_LABEL/REMOVE_LABEL',
  request: {
    method: 'post',
    responseSchema: cardsSchema
  },
})
