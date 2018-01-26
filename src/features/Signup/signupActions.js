import { SIGNUP_REQUEST } from './signupConstants'

export const signupRequest = params => ({
  type: SIGNUP_REQUEST,
  payload: {
    ...params
  }
})
