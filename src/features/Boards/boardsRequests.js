import { boardsUrl } from 'config/api'
import CreateRequest from 'common/utils/CreateRequest'
import { modalClose } from 'features/ModalManager/modalManagerActions'
import { resetForm } from 'features/BoardForm/boardFormActions'
import boardsSchema from './boardsSchema'

const getBoardsRequest = new CreateRequest({
  constantPrefix: 'BOARDS/GET_BOARDS',
  request: {
    url: boardsUrl(),
    method: 'get',
    responseSchema: boardsSchema
  }
})

const createBoardRequest = new CreateRequest({
  constantPrefix: 'BOARDS/CREATE_BOARD',
  request: {
    url: boardsUrl(),
    method: 'post'
  },
  afterSuccess: [
    500,
    resetForm,
    modalClose
  ]
})

export {
  getBoardsRequest,
  createBoardRequest
}
