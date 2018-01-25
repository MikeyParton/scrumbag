import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './loginConstants'

export const loginRequest = params => ({
  type: LOGIN_REQUEST,
  payload: {
    ...params
  }
})

export const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...response
  }
})

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: {
    ...error
  }
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})
