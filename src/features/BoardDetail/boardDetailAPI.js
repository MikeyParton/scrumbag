import { normalize } from 'normalizr'
import api, { listUrl } from 'config/api'
import { listSchema } from './boardDetailSchema'

export const updateListRequest = (id, boardId, params) => {
  const url = listUrl(boardId, id)
  return api.put(url, params)
    .then((response) => {
      const { list } = response.data
      const { lists } = normalize(list, listSchema).entities
      return { lists }
    })
    .catch(error => ({ error }))
}
