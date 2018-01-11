import { all, select, takeEvery, put, call } from 'redux-saga/effects'

import { BOARD_DETAIL_REQUEST } from './boardDetailConstants'
import { getBoardDetailRequest } from './boardDetailAPI'
import { boardDetailSuccess, boardDetailError } from './boardDetailActions'

import { UPDATE_LIST_REQUEST } from './Lists/listsConstants'
import { updateListRequest } from './boardDetailAPI'
import { updateListSuccess, updateListError } from './Lists/listsActions'

import { getBoard } from './boardDetailSelectors'

function* boardDetailRequestSaga({ payload }) {
  const { error, ...entities } = yield call(getBoardDetailRequest, payload.id)
  if (!error) {
    yield put(boardDetailSuccess(entities))
  } else {
    yield put(boardDetailError(error))
  }
}

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
  all([
    yield takeEvery(BOARD_DETAIL_REQUEST, boardDetailRequestSaga),
    yield takeEvery(UPDATE_LIST_REQUEST, updateListSaga),
  ])
}
