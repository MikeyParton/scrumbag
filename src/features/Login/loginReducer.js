import { createReducer } from 'common/utils/reducerUtils'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './loginConstants'

const initialState = {
  currentUser: null
}

export const loginSuccess = (state, payload) => ({
  currentUser: payload.user
})

export const logoutSuccess = () => initialState

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGOUT_SUCCESS]: logoutSuccess
})
