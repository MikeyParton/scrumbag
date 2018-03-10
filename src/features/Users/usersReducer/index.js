import { combineReducers } from 'redux'
import byId from './byId'
import allIds from './allIds'

export default combineReducers({
  byId,
  allIds
})
