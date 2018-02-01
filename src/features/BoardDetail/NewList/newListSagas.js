import { all } from 'redux-saga/effects'
import { createListRequest } from './newListRequest'

export default function* rootSaga() {
  yield all([
    createListRequest.saga()
  ])
}
