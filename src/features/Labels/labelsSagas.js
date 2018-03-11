import { all } from 'redux-saga/effects'
import { updateLabelRequest } from './labelsRequests'

export default function* rootSaga() {
  yield all([
    updateLabelRequest.saga()
  ])
}
