import axios from 'axios'
import humps from 'humps'
import { normalize } from 'normalizr'
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
    //
    // Eventually we want
    //
    // request: {
    //   endpoint: 'https://www.someEndPoint.com',
    //   method: 'get',
    //   responseSchema:
    // }

    this.constantPrefix = options.constantPrefix

    const { request } = options

    this.method = request.method
    this.url = request.url
    this.params = request.params || {}
    this.responseSchema = request.responseSchema

    this.constants = this.createConstants()
    this.actions = this.createActions()
    this.api = this.createApi()
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

  createApi() {
    const { method, url, params, responseSchema } = this
    return () => (
      axios({
        method,
        url,
        data: { ...params }
      })
        .then((response) => {
          let { data } = response
          data = humps.camelizeKeys(data)

          if (responseSchema) {
            data = normalize(data, responseSchema).entities
          }

          return { data }
        })
        .catch(error => error)
    )
  }

  createSaga() {
    const { constants, actions, api } = this
    const { request: requestConstant } = constants
    const { success: successAction, error: errorAction } = actions

    function* requestSaga() {
      debugger
      const { error, ...response } = yield call(api)
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
