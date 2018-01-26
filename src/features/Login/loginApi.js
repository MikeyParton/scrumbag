import api, { LOGIN_URL, SIGNUP_URL } from 'config/api'

export const getUser = () => (
  api.get('/profile')
    .then(response => response.data)
    .catch(error => error.response.data)
)

export const login = params => (
  api.post(LOGIN_URL, params)
    .then(response => response.data)
    .catch(error => error.response.data)
)

export const createAccount = params => (
  api.post(SIGNUP_URL, params)
    .then(response => response.data)
    .catch(error => error.response.data)
)
