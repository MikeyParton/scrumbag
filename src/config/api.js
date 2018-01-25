import axios from 'axios'
import humps from 'humps'

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    return humps.camelizeKeys(data)
  })
})

const setHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

// Look for token in localStorage on first load
const token = localStorage.getItem('scrumbagToken')
setHeader(token)


export const storeToken = (newToken) => {
  localStorage.setItem('scrumbagToken', newToken)
  setHeader(newToken)
}

export const LOGIN_URL = '/auth/login'
export const BOARDS_URL = '/boards'
export const boardDetailUrl = id => `/boards/${id}`
export const listUrl = (boardId, id) => `${boardDetailUrl(boardId)}/lists/${id}`
export const cardsUrl = (boardId, id) => `${boardDetailUrl(boardId)}/cards/${id}`

export default api
