import { all, fork } from 'redux-saga/effects'
import loginSagas from 'features/Login/loginSagas'
import boardsSagas from 'features/Boards/boardsSagas'
import cardsSagas from 'features/Cards/cardsSagas'
import boardDetailSagas from 'features/BoardDetail/boardDetailSagas'
import newListSagas from 'features/BoardDetail/NewList/newListSagas'
import cardDetailSagas from 'features/CardDetail/cardDetailSagas'

export default function* rootSaga() {
  yield all([
    fork(loginSagas),
    fork(boardsSagas),
    fork(cardsSagas),
    fork(boardDetailSagas),
    fork(newListSagas),
    fork(cardDetailSagas)
  ])
}
