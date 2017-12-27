import { all, fork } from 'redux-saga/effects'
import boardsSagas from 'features/Boards/boardsSagas'

export default function* rootSaga() {
  yield all([
    fork(boardsSagas)
  ])
}
