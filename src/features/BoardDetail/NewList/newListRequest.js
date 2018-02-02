import CreateRequest from 'common/utils/CreateRequest'
import { reset } from 'redux-form'

export const createListRequest = new CreateRequest({
  constantPrefix: 'NEW_LIST/CREATE_LIST',
  request: {
    method: 'post'
  },
  afterSuccess: [{
    action: reset,
    args: ['NewList']
  }]
})
