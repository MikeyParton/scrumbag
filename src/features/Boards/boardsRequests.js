import { BOARDS_URL } from 'config/api'
import CreateRequest from 'common/utils/CreateRequest'
import { modalClose } from 'features/ModalManager/modalManagerActions'
import { resetForm } from 'features/BoardForm/boardFormActions'
import boardsSchema from './boardsSchema'

const getBoardsRequest = new CreateRequest({
  constantPrefix: 'BOARDS/GET_BOARDS',
  request: {
    url: BOARDS_URL,
    method: 'get',
    responseSchema: boardsSchema
  }
})

const createBoardRequest = new CreateRequest({
  constantPrefix: 'BOARDS/CREATE_BOARD',
  request: {
    url: BOARDS_URL,
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
