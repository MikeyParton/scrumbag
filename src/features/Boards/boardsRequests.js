import CreateRequest from 'common/utils/CreateRequest'
import { boardsRequest } from './boardsAPI'

const getBoardsRequest = new CreateRequest({
  constantPrefix: 'GET_BOARDS',
  request: boardsRequest
})

export {
  getBoardsRequest
}
