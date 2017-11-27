const getCards = ({ card }, arrayOfIds) => {
  return arrayOfIds.map(id => card.byId[id])
}

export default {
  getCards
}
