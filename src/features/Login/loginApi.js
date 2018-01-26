import api, { LOGIN_URL } from 'config/api'

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
