export const getCards = state => state.cards

export const getCardsById = (state, arrayOfIds) => {
  const cards = getCards(state)
  return arrayOfIds.map(id => cards.byId[id])
}

export const getCardById = (state, id) => {
  const cards = getCards(state)
  return cards.byId[id]
}
