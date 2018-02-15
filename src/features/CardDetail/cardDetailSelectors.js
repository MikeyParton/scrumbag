import { createSelector } from 'reselect'

const base = state => state.cardDetail

export const getCard = createSelector(
  base,
  cardDetail => cardDetail.card
)

export const getLoading = createSelector(
  base,
  cardDetail => cardDetail.loading
)

export const getEditingTitle = createSelector(
  base,
  cardDetail => cardDetail.editingTitle
)

export const getName = createSelector(
  getCard,
  card => card.name
)
