import CreateRequest from 'common/utils/CreateRequest'
import { checklistItemsListSchema } from '../cardDetailSchema'

export const checkItemRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/CHECKLIST_ITEMS/CHECK_ITEM',
  request: {
    method: 'put',
    responseSchema: checklistItemsListSchema
  }
})

export const uncheckItemRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/CHECKLIST_ITEMS/UNCHECK_ITEM',
  request: {
    method: 'put',
    responseSchema: checklistItemsListSchema
  }
})

export const updateItemRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/CHECKLIST_ITEMS/UPDATE_ITEM',
  request: {
    method: 'put',
    responseSchema: checklistItemsListSchema
  }
})

export const deleteItemRequest = new CreateRequest({
  constantPrefix: 'CARD_DETAIL/CHECKLIST_ITEMS/DELETE_ITEM',
  request: {
    method: 'delete',
    responseSchema: checklistItemsListSchema
  }
})
