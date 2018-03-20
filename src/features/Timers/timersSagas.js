import { all } from 'redux-saga/effects'
import {
  createTimerRequest,
  startTimerRequest,
  stopTimerRequest,
  deleteTimerRequest
} from './timersRequests'

export default function* rootSaga() {
  yield all([
    createTimerRequest.saga(),
    startTimerRequest.saga(),
    stopTimerRequest.saga(),
    deleteTimerRequest.saga()
  ])
}
