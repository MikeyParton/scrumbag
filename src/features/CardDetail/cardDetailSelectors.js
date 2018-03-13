import { createSelector } from 'reselect'
import { getCards } from 'features/Cards/cardsSelectors'

export const getCardDetail = state => state.cardDetail

export const getCardId = createSelector(
  getCardDetail,
  cardDetail => cardDetail.id
)

export const getLoading = createSelector(
  getCardDetail,
  cardDetail => cardDetail.loading
)

export const getEditingTitle = createSelector(
  getCardDetail,
  cardDetail => cardDetail.editingTitle
)

export const getCard = createSelector(
  getCardId,
  getCards,
  (id, cards) => cards.byId[id]
)

export const getName = createSelector(
  getCard,
  card => card.name
)

export const getBoardId = createSelector(
  getCard,
  card => card.boardSlug
)
