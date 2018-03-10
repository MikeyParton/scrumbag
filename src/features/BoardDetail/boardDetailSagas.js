import { takeEvery, put, all, select } from 'redux-saga/effects'
import { boardDetailUrl } from 'config/api'
import { getCardDetailRequest } from 'features/Cards/cardsRequests'
import { getBoard } from './boardDetailSelectors'
import { getBoardDetailRequest, updateListRequest } from './boardDetailRequests'

export function* keepBoardSyncedWithCard({ payload }) {
  const cardsBoardSlug = Object.values(payload.cards)[0].boardSlug
  const board = yield select(getBoard)
  if (cardsBoardSlug !== board.slug) {
    yield put(getBoardDetailRequest.actions.request({
      requestUrl: boardDetailUrl(cardsBoardSlug)
    }))
  }
}

export default function* rootSaga() {
  yield all([
    getBoardDetailRequest.saga(),
    updateListRequest.saga(),
    takeEvery(getCardDetailRequest.constants.success, keepBoardSyncedWithCard)
  ])
}
