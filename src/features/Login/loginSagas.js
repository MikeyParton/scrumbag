import { race, fork, take, call, put } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import history from 'app/Routes/history'
// import { signupError } from 'features/Signup/signupActions'
import { SIGNUP_REQUEST } from 'features/Signup/signupConstants'

import { login, getUser, createAccount } from './loginApi'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './loginConstants'
import { loginError, loginSuccess, logoutSuccess } from './loginActions'
import { getToken, setToken, removeToken, setHeader } from './loginUtils'

function* storedTokenLogin() {
  while (true) {
    let tried
    while (!tried) {
      const token = yield call(getToken)

      if (token) {
        yield call(setHeader, token)
        const { user } = yield call(getUser, token)
        return { user }
      }

      tried = true
    }
  }
}

function* vanillaLogin() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST)

    const { error, user, token } = yield call(login, payload)

    if (error) {
      yield put(loginError(error))
      yield put(stopSubmit('Login', error))
    } else {
      yield call(setToken, token)
      yield call(setHeader, token)

      return {
        user,
        redirectPath: '/'
      }
    }
  }
}

function* signup() {
  while (true) {
    const { payload } = yield take(SIGNUP_REQUEST)

    const { error, user, token } = yield call(createAccount, payload)

    if (error) {
      // yield put(signupError(error))
      yield put(stopSubmit('Signup', error))
    } else {
      yield call(setToken, token)
      yield call(setHeader, token)

      return {
        user,
        redirectPath: '/'
      }
    }
  }
}

function* logout() {
  yield take(LOGOUT_REQUEST)
  yield call(removeToken, null)
  yield put(logoutSuccess())
  yield call(history.push, '/login')
}

function* loginFlow() {
  while (true) {
    // These are the ways to login
    const raceResults = yield race({
      storedTokenLogin: call(storedTokenLogin),
      vanillaLogin: call(vanillaLogin),
      signup: call(signup)
    })

    const { user, redirectPath } = Object.values(raceResults)[0]
    yield put(loginSuccess({ user }))

    if (redirectPath) {
      yield call(history.push, redirectPath)
    }

    yield call(logout)
  }
}

export default function* rootSaga() {
  yield fork(loginFlow)
}
