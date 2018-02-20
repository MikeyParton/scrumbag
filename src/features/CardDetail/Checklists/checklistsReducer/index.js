import { combineReducers } from 'redux'
import byId from './checklistsById'
import allIds from './checklistsAllIds'

export default combineReducers({
  byId,
  allIds
})
