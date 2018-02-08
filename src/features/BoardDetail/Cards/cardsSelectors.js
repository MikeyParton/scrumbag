import { createSelector } from 'reselect'

export const getCards = state => state.boardDetail.cards

export const getCardBySlug = (state, slug) => {
  const cards = getCards(state)
  return Object.values(cards.byId).find(card => card.slug === slug)
}

export const makeGetCardById = id => (
  createSelector(
    getCards,
    cards => cards.byId[id]
  )
)
