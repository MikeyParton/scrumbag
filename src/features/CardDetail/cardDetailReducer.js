import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'
import { SHOW_EDIT_TITLE, HIDE_EDIT_TITLE } from './cardDetailConstants'
import { getCardDetailRequest, updateCardRequest } from './cardDetailRequests'
import checklists from './Checklists/checklistsReducer'
import checklistItems from './ChecklistItems/checklistItemsReducer'

const card = createReducer({}, {
  [getCardDetailRequest.constants.request]: () => ({}),
  [getCardDetailRequest.constants.success]: (state, payload) => Object.values(payload.card)[0],
  [updateCardRequest.constants.success]: (state, payload) => Object.values(payload.card)[0]
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
  card,
  loading,
  editingTitle,
  checklists,
  checklistItems
})
