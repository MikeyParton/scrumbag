import axios from 'axios'
import { BOARDS_URL } from 'config/api'
import { normalize, schema } from 'normalizr'
import humps from 'humps'

const board = new schema.Entity('boards')
const mySchema = { boards: [board] }

export const boardsRequest = () => {
  return axios.get(BOARDS_URL)
    .then((response) => {
      const { boards } = normalize(humps.camelizeKeys(response.data), mySchema).entities
      return { boards }
    })
    .catch((error) => {
      return { error }
    })
}
