import { all, select, takeEvery, put, call } from 'redux-saga/effects'

import { getBoardDetailRequest } from './boardDetailRequests'

import { UPDATE_LIST_REQUEST } from './Lists/listsConstants'
import { updateListRequest } from './boardDetailAPI'
import { updateListSuccess, updateListError } from './Lists/listsActions'

import { getBoard } from './boardDetailSelectors'

function* updateListSaga({ payload }) {
  const board = yield select(getBoard)
  const { error, lists } = yield call(updateListRequest, payload.id, board.id, payload.changes)
  if (!error) {
    yield put(updateListSuccess(lists))
  } else {
    yield put(updateListError(error))
  }
}

export default function* rootSaga() {
  yield all([
    getBoardDetailRequest.saga(),
    takeEvery(UPDATE_LIST_REQUEST, updateListSaga)
  ])
}
