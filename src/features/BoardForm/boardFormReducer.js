import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'
import { CREATE_BOARD_REQUEST, CREATE_BOARD_SUCCESS, CREATE_BOARD_ERROR } from 'features/Boards/boardsConstants'
import { UPDATE_FORM } from './boardFormConstants'

const initialState = {
  name: ''
}

export const updateForm = (state, payload) => {
  return { ...state, ...payload }
}

const form = createReducer(initialState, {
  [CREATE_BOARD_SUCCESS]: () => initialState,
  [UPDATE_FORM]: updateForm
})

const loading = createReducer(false, {
  [CREATE_BOARD_REQUEST]: () => true,
  [CREATE_BOARD_SUCCESS]: () => false,
  [CREATE_BOARD_ERROR]: () => false
})

export default combineReducers({
  form,
  loading
})
