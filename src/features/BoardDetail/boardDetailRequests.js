import CreateRequest from 'common/utils/CreateRequest'
import { boardDetailSchema, singleListSchema } from './boardDetailSchema'

export const getBoardDetailRequest = new CreateRequest({
  constantPrefix: 'BOARD_DETAIL/GET_BOARD',
  request: {
    method: 'get',
    responseSchema: boardDetailSchema
  }
})

export const updateListRequest = new CreateRequest({
  constantPrefix: 'BOARD_DETAIL/UPDATE_LIST',
  request: {
    method: 'put',
    responseSchema: singleListSchema
  }
})
