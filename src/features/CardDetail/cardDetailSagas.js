import { call, all, takeEvery } from 'redux-saga/effects'
import history from 'app/Routes/history'
import { getCardDetailRequest, updateCardRequest } from './cardDetailRequests'

export function* syncUrl({ payload }) {
  const { slug } = payload.card
  yield call(history.push, `/c/${slug}`)
}

export default function* rootSaga() {
  yield all([
    getCardDetailRequest.saga(),
    updateCardRequest.saga(),
    takeEvery(updateCardRequest.constants.success, syncUrl)
  ])
}
