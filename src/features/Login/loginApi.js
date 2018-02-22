import api, { loginUrl, signupUrl } from 'config/api'

export const getUser = () => (
  api.get('/profile')
    .then(response => response.data)
    .catch(error => error.response.data)
)

export const login = params => (
  api.post(loginUrl(), params)
    .then(response => response.data)
    .catch(error => error.response.data)
)

export const createAccount = params => (
  api.post(signupUrl(), params)
    .then(response => response.data)
    .catch(error => error.response.data)
)
