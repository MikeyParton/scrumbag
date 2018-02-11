import { take, all } from 'redux-saga/effects'
import { getBoardDetailRequest, updateListRequest } from './boardDetailRequests'

// export function* loadBoardFromCard() {
//   yield take(getCardDetailRequest)
// }

export default function* rootSaga() {
  yield all([
    getBoardDetailRequest.saga(),
    updateListRequest.saga()
  ])
}
