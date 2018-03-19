import { all } from 'redux-saga/effects'
import {
  createTimerRequest,
  startTimerRequest,
  stopTimerRequest
} from './timersRequests'

export default function* rootSaga() {
  yield all([
    createTimerRequest.saga(),
    startTimerRequest.saga(),
    stopTimerRequest.saga()
  ])
}
