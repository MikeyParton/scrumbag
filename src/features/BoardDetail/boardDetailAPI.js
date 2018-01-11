import axios from 'axios'
import humps from 'humps'
import { normalize } from 'normalizr'
import { boardDetailUrl, listUrl } from 'config/api'
import { boardSchema, listSchema } from './boardDetailSchema'

export const getBoardDetailRequest = (id) => {
  const url = boardDetailUrl(id)
  return axios.get(url)
    .then((response) => {
      const board = humps.camelizeKeys(response.data.board)
      const { entities } = normalize(board, boardSchema)
      return { board, ...entities }
    })
    .catch((error) => {
      return { error }
    })
}

export const updateListRequest = (id, boardId, params) => {
  const url = listUrl(boardId, id)
  return axios.put(url, params)
    .then((response) => {
      const { list } = humps.camelizeKeys(response).data
      const { lists } = normalize(list, listSchema).entities
      return { lists }
    })
    .catch((error) => {
      return { error }
    })
}
