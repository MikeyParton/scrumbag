import CreateRequest from 'common/utils/CreateRequest'
import { singleChecklistSchema, checklistItemsListSchema } from './cardDetailSchema'

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

export const createChecklistItemRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/CREATE_CHECKLIST_ITEM',
  request: {
    method: 'post',
    responseSchema: checklistItemsListSchema
  }
})
