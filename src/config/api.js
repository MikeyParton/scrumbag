import axios from 'axios'
import humps from 'humps'

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data)
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest
  ]
})

export const LOGIN_URL = '/auth/login'
export const SIGNUP_URL = '/auth/signup'
export const BOARDS_URL = '/boards'
export const boardDetailUrl = id => `/boards/${id}`
export const listsUrl = boardId => `${boardDetailUrl(boardId)}/lists`
export const listUrl = id => `/lists/${id}`
export const cardsUrl = boardId => `${boardDetailUrl(boardId)}/cards`
export const cardUrl = (boardId, id) => `${boardDetailUrl(boardId)}/cards/${id}`

export default api
