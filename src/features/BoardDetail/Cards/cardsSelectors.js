export const getCards = state => state.boardDetail.cards

export const getCardsById = (state, arrayOfIds) => {
  const cards = getCards(state)
  return arrayOfIds.map(id => cards.byId[id])
}

export const getCardBySlug = (state, slug) => {
  const cards = getCards(state)
  return Object.values(cards.byId).find(card => card.slug === slug)
}

export const getCardById = (state, id) => {
  const cards = getCards(state)
  return cards.byId[id]
}
