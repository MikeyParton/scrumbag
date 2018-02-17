import { call, all, takeEvery } from 'redux-saga/effects'
import history from 'app/Routes/history'
import { getCardDetailRequest, updateCardRequest } from './cardDetailRequests'

export function* syncUrl({ payload }) {
  const { url } = payload.card
  yield call(history.push, url)
}

export default function* rootSaga() {
  yield all([
    getCardDetailRequest.saga(),
    updateCardRequest.saga(),
    takeEvery(updateCardRequest.constants.success, syncUrl)
  ])
}
