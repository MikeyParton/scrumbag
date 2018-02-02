import { all } from 'redux-saga/effects'
import newCardRequest from './newCardRequest'

export default function* rootSaga() {
  yield all([
    newCardRequest.saga()
  ])
}
