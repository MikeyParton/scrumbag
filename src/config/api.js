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

export const loginUrl = () => '/auth/login'
export const signupUrl = () => '/auth/signup'
export const boardsUrl = () => '/boards'
export const boardDetailUrl = id => `/boards/${id}`
export const listsUrl = boardId => `${boardDetailUrl(boardId)}/lists`
export const listUrl = id => `/lists/${id}`
export const cardsUrl = boardId => `${boardDetailUrl(boardId)}/cards`
export const cardUrl = id => `/cards/${id}`
export const cardAddUserUrl = id => `${cardUrl(id)}/add_user`
export const cardUsersUrl = id => `${cardUrl(id)}/users`
export const checklistsUrl = id => `${cardUrl(id)}/checklists`
export const checklistUrl = id => `/checklists/${id}`
export const checklistItemsUrl = id => `${checklistUrl(id)}/checklist_items`
export const checklistItemUrl = id => `/checklist_items/${id}`
export const checkChecklistItemUrl = id => `${checklistItemUrl(id)}/complete`
export const uncheckChecklistItemUrl = id => `${checklistItemUrl(id)}/undo`

export default api
