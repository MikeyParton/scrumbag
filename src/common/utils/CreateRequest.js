import { delay } from 'redux-saga'
import { takeEvery, put, call } from 'redux-saga/effects'

class CreateRequest {
  constructor(options) {
    // Example usage:
    //
    // options = {
    //   constantPrefix: 'GET_BOARD',
    //   request: () => axios.get() ....,
    // }

    this.constantPrefix = options.constantPrefix
    this.request = options.request

    this.constants = this.createConstants()
    this.actions = this.createActions()
    this.saga = this.createSaga()
  }

  createConstants() {
    return {
      request: `${this.constantPrefix}_REQUEST`,
      success: `${this.constantPrefix}_SUCCESS`,
      error: `${this.constantPrefix}_ERROR`
    }
  }

  createActions() {
    const { constants } = this

    const request = () => ({
      type: constants.request
    })

    const success = res => ({
      type: constants.success,
      payload: {
        ...res
      }
    })

    const error = err => ({
      type: constants.error,
      payload: {
        err
      }
    })

    return {
      request,
      success,
      error
    }
  }

  createSaga() {
    const { constants, actions, request } = this
    const { request: requestConstant } = constants
    const { success: successAction, error: errorAction } = actions

    function* requestSaga() {
      debugger
      const { error, ...response } = yield call(request)
      if (error) {
        yield put(errorAction(error))
      } else {
        yield put(successAction(response))
      }
    }

    return function* root() {
      yield takeEvery(requestConstant, requestSaga)
    }
  }
}

export default CreateRequest
