import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'
import { createBoardRequest } from 'features/Boards/boardsRequests'
import { UPDATE_FORM, RESET_FORM } from './boardFormConstants'

const { constants: createConstants } = createBoardRequest

const initialState = {
  name: ''
}

export const updateForm = (state, payload) => {
  return { ...state, ...payload }
}

const form = createReducer(initialState, {
  [UPDATE_FORM]: updateForm,
  [RESET_FORM]: () => initialState
})

const submitStatus = createReducer(null, {
  [createConstants.request]: () => 'busy',
  [createConstants.success]: () => 'done',
  [createConstants.error]: () => null,
  [RESET_FORM]: () => null
})

export default combineReducers({
  form,
  submitStatus
})
