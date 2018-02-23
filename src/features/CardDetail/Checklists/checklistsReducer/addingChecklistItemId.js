import { createReducer } from 'common/utils/reducerUtils'
import { createChecklistItemRequest } from 'features/CardDetail/cardDetailRequests'
import { SHOW_ADD_CHECKLIST_ITEM, HIDE_ADD_CHECKLIST_ITEM } from '../checklistsConstants'

export default createReducer(null, {
  [SHOW_ADD_CHECKLIST_ITEM]: (state, payload) => payload.id,
  [HIDE_ADD_CHECKLIST_ITEM]: () => null,
  [createChecklistItemRequest.constants.success]: () => null
})
