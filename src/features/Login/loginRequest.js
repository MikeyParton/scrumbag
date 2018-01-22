import CreateRequest from 'common/utils/CreateRequest'
import { LOGIN_URL } from 'config/api'

export const loginRequest = new CreateRequest({
  constantPrefix: 'LOGIN',
  request: {
    url: LOGIN_URL,
    method: 'post',
  }
})
