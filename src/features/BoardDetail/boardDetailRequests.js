import CreateRequest from 'common/utils/CreateRequest'
import { boardDetailSchema } from './boardDetailSchema'

export const getBoardDetailRequest = new CreateRequest({
  constantPrefix: 'BOARD_DETAIL/GET_BOARD',
  request: {
    method: 'get',
    responseSchema: boardDetailSchema
  }
})
