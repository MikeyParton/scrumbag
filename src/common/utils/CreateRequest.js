import api from 'config/api'
import { normalize } from 'normalizr'
import { delay } from 'redux-saga'
import { takeEvery, put, call } from 'redux-saga/effects'

export const RESPONSE = '@@response'
export const DELAY = '@@delay'

const processAfterAction = (actionObject, response) => {
  const { action, args = [] } = actionObject

  // Include response into args if needed
  const newArgs = args.map(arg => (arg === RESPONSE ? response : arg))

  // handle delay action
  if (action === DELAY) {
    return delay(...newArgs)
  }

  // dispatch regular action
  return put(action(...newArgs))
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
      api({
        method,
        url,
        data: {
          ...params
        }
      })
        .then((response) => {
          let { data } = response

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
        // Main error action which is exported
        yield put(errorAction(error))

        // Handle any optional actions after error
        for (let action of afterError) {
          yield processAfterAction(action, error)
        }
      } else {
        // Main success action which is exported
        yield put(successAction(response))

        // Handle any optional actions after success
        for (let action of afterSuccess) {
          yield processAfterAction(action, response)
        }
      }
    }

    return function* root() {
      yield takeEvery(requestConstant, requestSaga)
    }
  }
}

export default CreateRequest
