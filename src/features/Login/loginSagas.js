import { race, fork, take, call, put, cancel } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import history from 'app/Routes/history'
// import { signupError } from 'features/Signup/signupActions'
import { SIGNUP_REQUEST } from 'features/Signup/signupConstants'

import { login, getUser, createAccount } from './loginApi'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './loginConstants'
import { checkedStoredToken, loginError, loginSuccess, logoutSuccess } from './loginActions'
import { getToken, setToken, removeToken, setHeader, removeHeader } from './loginUtils'

function* storedTokenLogin() {
  const token = yield call(getToken)

  // If there is a token, try to get the user the server
  if (token) {
    yield call(setHeader, token)
    const { user } = yield call(getUser, token)

    // Success if we get a user back
    if (user) {
      return { user }
    }

    // Otherwise token must be bad
    yield call(removeToken)
    yield call(removeHeader)
  }

  yield put(checkedStoredToken())

  // And at this point we may as well opt of the race
  yield cancel()
}

function* vanillaLogin() {
  // Always listen for login requests
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
  // Always listen for signup requests
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
  yield call(removeToken)
  yield call(removeHeader)
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

    // Handle login with the result
    const { user, redirectPath } = Object.values(raceResults)[0]
    yield put(loginSuccess({ user }))

    if (raceResults.storedTokenLogin) {
      yield put(checkedStoredToken())
    }

    if (redirectPath) {
      yield call(history.push, redirectPath)
    }

    yield call(logout)
  }
}

export default function* rootSaga() {
  yield fork(loginFlow)
}
