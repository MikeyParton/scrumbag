import { combineReducers } from 'redux'
import byId from './byId'
import editingId from './editingId'

export default combineReducers({
  byId,
  editingId
})
