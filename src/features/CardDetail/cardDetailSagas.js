import { all } from 'redux-saga/effects'
import { getCardDetailRequest, updateCardRequest } from './cardDetailRequests'

export default function* rootSaga() {
  yield all([
    getCardDetailRequest.saga(),
    updateCardRequest.saga()
  ])
}
