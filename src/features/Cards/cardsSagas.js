import { all } from 'redux-saga/effects'
import {
  createCardRequest,
  getCardDetailRequest,
  updateCardRequest
} from './cardsRequests'

export default function* rootSaga() {
  yield all([
    createCardRequest.saga(),
    getCardDetailRequest.saga(),
    updateCardRequest.saga()
  ])
}
