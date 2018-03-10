import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'
import { updateCardRequest, getCardDetailRequest } from 'features/Cards/cardsRequests'
import { SHOW_EDIT_TITLE, HIDE_EDIT_TITLE } from './cardDetailConstants'

import checklists from './Checklists/checklistsReducer'
import checklistItems from './ChecklistItems/checklistItemsReducer'

const id = createReducer(null, {
  [getCardDetailRequest.constants.request]: () => null,
  [getCardDetailRequest.constants.success]: (state, payload) => parseInt(Object.keys(payload.cards)[0], 0),
})

const loading = createReducer(true, ({
  [getCardDetailRequest.constants.success]: () => false
}))

const editingTitle = createReducer(false, ({
  [SHOW_EDIT_TITLE]: () => true,
  [HIDE_EDIT_TITLE]: () => false,
  [updateCardRequest.constants.success]: () => false
}))


export default combineReducers({
  id,
  loading,
  editingTitle,
  checklists,
  checklistItems
})
