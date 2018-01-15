import { delay } from 'redux-saga'
import { takeEvery, put, call, all } from 'redux-saga/effects'
import { modalClose } from 'features/ModalManager/modalManagerActions'
import { resetForm } from 'features/BoardForm/boardFormActions'
import { CREATE_BOARD_REQUEST } from './boardsConstants'

import { createBoardSuccess, createBoardError } from './boardsActions'
import { createBoardRequest } from './boardsAPI'

import { getBoardsRequest } from './boardsRequests'

function* createBoardRequestSaga({ payload }) {
  const { params } = payload
  const { board, error } = yield call(createBoardRequest, params)
  if (board) {
    yield put(createBoardSuccess(board))

    // Small delay to show some Feedback on the form
    yield delay(500)
    yield put(resetForm())
    yield put(modalClose())
  } else {
    yield put(createBoardError(error))
  }
}

export default function* rootSaga() {
  all([
    yield getBoardsRequest.saga(),
    yield takeEvery(CREATE_BOARD_REQUEST, createBoardRequestSaga)
  ])
}
