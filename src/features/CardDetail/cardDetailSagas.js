import { call, all, takeEvery, select } from 'redux-saga/effects'
import history from 'app/Routes/history'

import { updateCardRequest } from 'features/Cards/cardsRequests'
import { getCardId } from './cardDetailSelectors'

import {
  createChecklistRequest,
  updateChecklistRequest,
  createChecklistItemRequest
} from './cardDetailRequests'

import {
  checkItemRequest,
  uncheckItemRequest,
  updateItemRequest,
  deleteItemRequest
} from './ChecklistItems/checklistItemsRequests'

import {
  addUserRequest,
  removeUserRequest
} from './AddMember/addMemberRequests'

import {
  addLabelRequest,
  removeLabelRequest
} from './AddLabel/addLabelRequests'

export function* syncUrl({ payload }) {
  const currentCardId = yield select(getCardId)
  const { url, id } = Object.values(payload.cards)[0]
  if (currentCardId === id) {
    yield call(history.push, url)
  }
}

export default function* rootSaga() {
  yield all([
    createChecklistRequest.saga(),
    updateChecklistRequest.saga(),
    createChecklistItemRequest.saga(),
    checkItemRequest.saga(),
    uncheckItemRequest.saga(),
    updateItemRequest.saga(),
    deleteItemRequest.saga(),
    addUserRequest.saga(),
    removeUserRequest.saga(),
    addLabelRequest.saga(),
    removeLabelRequest.saga(),
    takeEvery(updateCardRequest.constants.success, syncUrl)
  ])
}
