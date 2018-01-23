import { createReducer } from 'common/utils/reducerUtils'
import { loginRequest } from './loginRequest'

const initialState = {
  loggedIn: false,
  token: null
}

export default createReducer(initialState, {
  [loginRequest.constants.success]: (state, payload) => ({
    token: payload.token,
    loggedIn: true
  })
})
