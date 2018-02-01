import { all, fork } from 'redux-saga/effects'
import loginSagas from 'features/Login/loginSagas'
import boardsSagas from 'features/Boards/boardsSagas'
import boardDetailSagas from 'features/BoardDetail/boardDetailSagas'
import newListSagas from 'features/BoardDetail/NewList/newListSagas'

export default function* rootSaga() {
  yield all([
    fork(loginSagas),
    fork(boardsSagas),
    fork(boardDetailSagas),
    fork(newListSagas)
  ])
}
