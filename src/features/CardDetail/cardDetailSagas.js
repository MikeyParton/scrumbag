import { all } from 'redux-saga/effects'
import { getCardDetailRequest } from './cardDetailRequests'

export default function* rootSaga() {
  yield all([
    getCardDetailRequest.saga()
  ])
}