import { createReducer } from 'common/utils/reducerUtils'
import { SHOW_EDIT_ITEM, HIDE_EDIT_ITEM } from '../checklistItemsConstants'
import { updateItemRequest } from '../checklistItemsRequests'

export default createReducer(null, {
  [SHOW_EDIT_ITEM]: (state, payload) => payload.id,
  [HIDE_EDIT_ITEM]: () => null,
  [updateItemRequest.constants.success]: () => null
})
