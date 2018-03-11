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

// Auth
export const loginUrl = () => '/auth/login'
export const signupUrl = () => '/auth/signup'

// Boards
export const boardsUrl = () => '/boards'
export const boardDetailUrl = id => `/boards/${id}`

// Lists
export const listsUrl = boardId => `${boardDetailUrl(boardId)}/lists`
export const listUrl = id => `/lists/${id}`

// Cards
export const cardsUrl = boardId => `${boardDetailUrl(boardId)}/cards`
export const cardUrl = id => `/cards/${id}`
export const cardAddUserUrl = id => `${cardUrl(id)}/add_user`
export const cardRemoveUserUrl = id => `${cardUrl(id)}/remove_user`
export const cardAddLabelUrl = id => `${cardUrl(id)}/add_label`
export const cardRemoveLabelUrl = id => `${cardUrl(id)}/remove_label`

// Checklists
export const checklistsUrl = id => `${cardUrl(id)}/checklists`
export const checklistUrl = id => `/checklists/${id}`

// Checklist Items
export const checklistItemsUrl = id => `${checklistUrl(id)}/checklist_items`
export const checklistItemUrl = id => `/checklist_items/${id}`
export const checkChecklistItemUrl = id => `${checklistItemUrl(id)}/complete`
export const uncheckChecklistItemUrl = id => `${checklistItemUrl(id)}/undo`

// Labels
export const labelUrl = id => `/labels/${id}`

export default api
