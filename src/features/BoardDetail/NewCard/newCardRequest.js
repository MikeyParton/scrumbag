import CreateRequest from 'common/utils/CreateRequest'

const newCardRequest = new CreateRequest({
  constantPrefix: 'NEW_CARD/CREATE_CARD',
  request: {
    method: 'post'
  }
})

export default newCardRequest
