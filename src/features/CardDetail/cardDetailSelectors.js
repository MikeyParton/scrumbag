import { createSelector } from 'reselect'

const base = state => state.cardDetail

export const getCardDetail = createSelector(
  base,
  cardDetail => cardDetail.card
)

export const getLoading = createSelector(
  base,
  cardDetail => cardDetail.loading
)
