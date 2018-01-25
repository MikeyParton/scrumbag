import { fork, take, call, put } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import { storeToken } from 'config/api'
import history from 'app/Routes/history'
import { login } from './loginApi'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './loginConstants'
import { loginError, loginSuccess, logoutSuccess } from './loginActions'

function* loginRequestSaga({ payload }) {
  const { error, token, user } = yield call(login, payload.params)
  if (error) {
    yield put(loginError(error))
    yield put(stopSubmit('Login', error))
  } else {

  }
}

function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST)
    const { payload } = request

    const { error, user, token } = yield call(login, payload)

    if (error) {
      yield put(loginError(error))
      yield put(stopSubmit('Login', error))
      return
    }

    yield call(storeToken, token)
    yield put(loginSuccess({ token, user }))
    yield call(history.push, '/')

    yield take(LOGOUT_REQUEST)
    yield call(storeToken, null)
    yield put(logoutSuccess())
    yield call(history.push, '/login')
  }
}

export default function* rootSaga() {
  yield fork(loginFlow)
}
