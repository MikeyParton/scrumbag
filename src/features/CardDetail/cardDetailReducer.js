import { combineReducers } from 'redux'
import { createReducer } from 'common/utils/reducerUtils'
import { SHOW_EDIT_TITLE, HIDE_EDIT_TITLE } from './cardDetailConstants'
import { getCardDetailRequest, updateCardRequest } from './cardDetailRequests'

const card = createReducer({}, {
  [getCardDetailRequest.constants.request]: () => ({}),
  [getCardDetailRequest.constants.success]: (state, payload) => payload.card,
  [updateCardRequest.constants.success]: (state, payload) => payload.card
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
  editingTitle
})
