import { createReducer } from 'common/utils/reducerUtils'
import { CHECKED_STORED_TOKEN, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './loginConstants'

const initialState = {
  checkedStoredToken: false,
  currentUser: null
}

export const checkedStoredToken = (state, payload) => ({
  ...state,
  checkedStoredToken: true
})

export const loginSuccess = (state, payload) => ({
  ...state,
  currentUser: payload.user
})

export const logoutSuccess = () => initialState

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGOUT_SUCCESS]: logoutSuccess,
  [CHECKED_STORED_TOKEN]: checkedStoredToken
})
