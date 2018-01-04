import { takeEvery, put, call } from 'redux-saga/effects'
import { BOARD_DETAIL_REQUEST } from './boardDetailConstants'
import { getBoardDetailRequest } from './boardDetailAPI'
import { boardDetailSuccess, boardDetailError } from './boardDetailActions'

function* boardDetailRequestSaga({ payload }) {
  const { error, ...entities } = yield call(getBoardDetailRequest, payload.id)
  if (!error) {
    yield put(boardDetailSuccess(entities))
  } else {
    yield put(boardDetailError(error))
  }
}

export default function* rootSaga() {
  yield takeEvery(BOARD_DETAIL_REQUEST, boardDetailRequestSaga)
}
