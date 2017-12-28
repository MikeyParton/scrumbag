import { takeEvery, put, call } from 'redux-saga/effects'
import { BOARDS_REQUEST, CREATE_BOARD_REQUEST } from './boardsConstants'
import { boardsSuccess, boardsError } from './boardsActions'
import { createBoardSuccess, createBoardError } from './boardsActions'
import { boardsRequest, createBoardRequest } from './boardsAPI'

function* boardsRequestSaga() {
  const { boards, error } = yield call(boardsRequest)
  if (boards) {
    yield put(boardsSuccess(boards))
  } else {
    yield put(boardsError(error))
  }
}

function* createBoardRequestSaga({ payload }) {
  const { params } = payload
  const { board, error } = yield call(createBoardRequest, params)
  if (board) {
    yield put(createBoardSuccess(board))
  } else {
    yield put(createBoardError(error))
  }
}

export default function* rootSaga() {
  yield takeEvery(BOARDS_REQUEST, boardsRequestSaga)
  yield takeEvery(CREATE_BOARD_REQUEST, createBoardRequestSaga)
}
