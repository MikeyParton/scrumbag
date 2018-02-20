import { createSelector } from 'reselect'

export const getCardDetail = state => state.cardDetail

export const getCard = createSelector(
  getCardDetail,
  cardDetail => cardDetail.card
)

export const getLoading = createSelector(
  getCardDetail,
  cardDetail => cardDetail.loading
)

export const getEditingTitle = createSelector(
  getCardDetail,
  cardDetail => cardDetail.editingTitle
)

export const getCardId = createSelector(
  getCard,
  card => card.id
)

export const getName = createSelector(
  getCard,
  card => card.name
)
