import CreateRequest from 'common/utils/CreateRequest'
import { listUrl } from 'config/api'

export const createListRequest = new CreateRequest({
  constantPrefix: 'NEW_LIST/CREATE_LIST',
  request: {
    method: 'post'
  }
})
