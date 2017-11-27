const getCards = ({ card }, arrayOfIds) => (
  arrayOfIds.map(id => card.byId[id])
)

export default {
  getCards
}
