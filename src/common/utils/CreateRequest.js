import axios from 'axios'
import humps from 'humps'
import { normalize } from 'normalizr'
import { delay } from 'redux-saga'
import { takeEvery, put, call, all } from 'redux-saga/effects'

const processAfterAction = (action) => {
  // Allow delaying (is sometimes useful)
  if (typeof action === 'number') {
    return delay(action)
  }
  return put(action())
}

class CreateRequest {
  constructor(options) {
    const { request, constantPrefix, afterSuccess, afterError } = options

    this.constantPrefix = constantPrefix

    this.method = request.method
    this.url = request.url
    this.responseSchema = request.responseSchema

    this.afterError = afterError || []
    this.afterSuccess = afterSuccess || []

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

    const request = (params = {}) => ({
      type: constants.request,
      payload: {
        params
      }
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
        ...err
      }
    })

    return {
      request,
      success,
      error
    }
  }

  createApi() {
    const { method, url, responseSchema } = this
    return (params = {}) => (
      axios({
        method,
        url,
        data: {
          ...params
        }
      })
        .then((response) => {
          let { data } = response
          data = humps.camelizeKeys(data)

          if (responseSchema) {
            data = normalize(data, responseSchema).entities
          }

          return data
        })
        .catch(error => error.response.data)
    )
  }

  createSaga() {
    const { constants, actions, api, afterSuccess, afterError } = this
    const { request: requestConstant } = constants
    const { success: successAction, error: errorAction } = actions

    function* requestSaga({ payload }) {
      const { params } = payload
      const { error, ...response } = yield call(api, params)

      if (error) {
        yield put(errorAction(error))
        for (let action of afterError) {
          yield processAfterAction(action)
        }
      } else {
        yield put(successAction(response))
        for (let action of afterSuccess) {
          yield processAfterAction(action)
        }
      }
    }

    return function* root() {
      yield takeEvery(requestConstant, requestSaga)
    }
  }
}

export default CreateRequest
