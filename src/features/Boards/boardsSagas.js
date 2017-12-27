import { takeEvery, put, call } from 'redux-saga/effects'
import { BOARDS_REQUEST } from './boardsConstants'
import { boardsSuccess, boardsError } from './boardsActions'
import { boardsRequest } from './boardsAPI'

function* boardsRequestSaga() {
  const { boards, error } = yield call(boardsRequest)
  if (boards) {
    yield put(boardsSuccess(boards))
  } else {
    yield put(boardsError(error))
  }
}

export default function* rootSaga() {
  yield takeEvery(BOARDS_REQUEST, boardsRequestSaga)
}
