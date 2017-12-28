import axios from 'axios'
import humps from 'humps'
import { normalize } from 'normalizr'
import { BOARDS_URL } from 'config/api'
import boardsSchema from './boardsSchema'

export const boardsRequest = () => {
  return axios.get(BOARDS_URL)
    .then((response) => {
      const { boards } = normalize(humps.camelizeKeys(response.data), boardsSchema).entities
      return { boards }
    })
    .catch((error) => {
      return { error }
    })
}

export const createBoardRequest = (params) => {
  return axios.post(BOARDS_URL, { board: params })
    .then((response) => {
      const { board } = humps.camelizeKeys(response.data)
      return { board }
    })
    .catch((error) => {
      return { error }
    })
}
