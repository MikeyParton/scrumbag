const getCards = ({ card }, arrayOfIds) => (
  arrayOfIds.map(id => card.byId[id])
)

const getCardById = ({ card }, id) => card.byId[id]

export default {
  getCards,
  getCardById
}
