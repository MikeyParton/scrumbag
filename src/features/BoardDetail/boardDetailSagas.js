import { all } from 'redux-saga/effects'
import { getBoardDetailRequest, updateListRequest } from './boardDetailRequests'

export default function* rootSaga() {
  yield all([
    getBoardDetailRequest.saga(),
    updateListRequest.saga()
  ])
}
