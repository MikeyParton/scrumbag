import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'
import { CREATE_BOARD_REQUEST, CREATE_BOARD_SUCCESS, CREATE_BOARD_ERROR } from 'features/Boards/boardsConstants'
import { UPDATE_FORM, RESET_FORM } from './boardFormConstants'

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
  [CREATE_BOARD_REQUEST]: () => 'busy',
  [CREATE_BOARD_SUCCESS]: () => 'done',
  [CREATE_BOARD_ERROR]: () => null,
  [RESET_FORM]: () => null
})

export default combineReducers({
  form,
  submitStatus
})
