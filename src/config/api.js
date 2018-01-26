import axios from 'axios'
import humps from 'humps'

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    return humps.camelizeKeys(data)
  })
})

export const LOGIN_URL = '/auth/login'
export const SIGNUP_URL = '/auth/signup'
export const BOARDS_URL = '/boards'
export const boardDetailUrl = id => `/boards/${id}`
export const listUrl = (boardId, id) => `${boardDetailUrl(boardId)}/lists/${id}`
export const cardsUrl = (boardId, id) => `${boardDetailUrl(boardId)}/cards/${id}`

export default api
