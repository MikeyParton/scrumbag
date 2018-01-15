import { all, fork } from 'redux-saga/effects'
import boardsSagas from 'features/Boards/boardsSagas2'
import boardDetailSagas from 'features/BoardDetail/boardDetailSagas'

export default function* rootSaga() {
  yield all([
    fork(boardsSagas),
    fork(boardDetailSagas)
  ])
}
