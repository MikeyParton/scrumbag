import api from 'config/api'
import { normalize } from 'normalizr'
import { boardDetailUrl, listUrl } from 'config/api'
import { boardSchema, listSchema } from './boardDetailSchema'

export const getBoardDetailRequest = (id) => {
  const url = boardDetailUrl(id)
  return api.get(url)
    .then((response) => {
      const { board } = response.data
      const { entities } = normalize(board, boardSchema)
      return { board, ...entities }
    })
    .catch((error) => {
      return { error }
    })
}

export const updateListRequest = (id, boardId, params) => {
  const url = listUrl(boardId, id)
  return api.put(url, params)
    .then((response) => {
      const { list } = response.data
      const { lists } = normalize(list, listSchema).entities
      return { lists }
    })
    .catch((error) => {
      return { error }
    })
}
