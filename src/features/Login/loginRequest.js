import CreateRequest, { RESPONSE } from 'common/utils/CreateRequest'
import { stopSubmit } from 'redux-form'
import { LOGIN_URL, storeToken } from 'config/api'

export const loginRequest = new CreateRequest({
  constantPrefix: 'LOGIN',
  request: {
    url: LOGIN_URL,
    method: 'post',
  },
  afterSuccess: [
    {
      function: storeToken,
      args: [RESPONSE]
    }
  ],
  afterError: [
    {
      action: stopSubmit,
      args: ['Login', RESPONSE]
    }
  ]
})
