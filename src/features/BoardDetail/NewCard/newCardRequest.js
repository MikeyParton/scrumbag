import CreateRequest from 'common/utils/CreateRequest'
import { reset } from 'redux-form'

const newCardRequest = new CreateRequest({
  constantPrefix: 'NEW_CARD/CREATE_CARD',
  request: {
    method: 'post'
  },
  afterSuccess: [{
    action: reset,
    args: ['NewCard']
  }]
})

export default newCardRequest
