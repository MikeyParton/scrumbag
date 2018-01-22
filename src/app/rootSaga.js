import { all, fork } from 'redux-saga/effects'
import loginSagas from 'features/Login/loginSagas'
import boardsSagas from 'features/Boards/boardsSagas'
import boardDetailSagas from 'features/BoardDetail/boardDetailSagas'

export default function* rootSaga() {
  yield all([
    fork(loginSagas),
    fork(boardsSagas),
    fork(boardDetailSagas)
  ])
}
