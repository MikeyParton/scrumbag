import axios from 'axios'
import humps from 'humps'
import { normalize } from 'normalizr'
import { boardDetailUrl, listUrl } from 'config/api'
import schema from './boardDetailSchema'

export const getBoardDetailRequest = (id) => {
  const url = boardDetailUrl(id)
  return axios.get(url)
    .then((response) => {
      const board = humps.camelizeKeys(response.data.board)
      const { entities } = normalize(board, schema)
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
      const { list } = humps.camelizeKeys(response.data)
      debugger
      return list
    })
    .catch((error) => {
      return { error }
    })
}
