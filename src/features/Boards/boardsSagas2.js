import { all } from 'redux-saga/effects'

import {
  getBoardsRequest,
  createBoardRequest
} from './boardsRequests'

export default function* rootSaga() {
  yield all([
    getBoardsRequest.saga(),
    createBoardRequest.saga()
  ])
}
