import { all } from 'redux-saga/effects'
import { createLabelRequest, updateLabelRequest } from './labelsRequests'

export default function* rootSaga() {
  yield all([
    createLabelRequest.saga(),
    updateLabelRequest.saga()
  ])
}
