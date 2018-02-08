import { createSelector } from 'reselect'

export const getNewCardListId = state => state.boardDetail.newCard.listId

export const makeIsShowCardVisible = id => (
  createSelector(
    getNewCardListId,
    newCardListId => newCardListId == id
  )
)
