import { all } from 'redux-saga/effects'
import { loginRequest } from './loginRequest'

export default function* rootSaga() {
  yield all([
    loginRequest.saga()
  ])
}
