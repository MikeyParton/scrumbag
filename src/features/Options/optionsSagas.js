import { all } from 'redux-saga/effects'
import { getColorOptionsRequest } from './Colors/colorsRequests'

export default function* rootSaga() {
  yield all([
    getColorOptionsRequest.saga()
  ])
}
