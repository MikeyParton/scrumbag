import api from 'config/api'

const TOKEN_NAME = 'scrumbagToken'

export const getToken = () => localStorage.getItem(TOKEN_NAME)

export const setToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token)
}

export const setHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_NAME)
}

export const removeHeader = () => {
  api.defaults.headers.common.Authorization = null
}
