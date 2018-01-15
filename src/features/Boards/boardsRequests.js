import CreateRequest from 'common/utils/CreateRequest'
import boardsSchema from './boardsSchema'
import { BOARDS_URL } from 'config/api'

const getBoardsRequest = new CreateRequest({
  constantPrefix: 'GET_BOARDS',
  request: {
    url: BOARDS_URL,
    method: 'get',
    responseSchema: boardsSchema
  }
})

export {
  getBoardsRequest
}
