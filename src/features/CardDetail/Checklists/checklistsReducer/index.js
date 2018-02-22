import { combineReducers } from 'redux'
import byId from './checklistsById'
import allIds from './checklistsAllIds'
import editingTitleId from './editingTitleId'
import addingChecklistItemId from './addingChecklistItemId'

export default combineReducers({
  byId,
  allIds,
  editingTitleId,
  addingChecklistItemId
})
