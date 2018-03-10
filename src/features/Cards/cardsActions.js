import { MOVE_CARD } from './cardsConstants'

export const moveCard = ({ id, startListId, endListId, startIndex, endIndex }) => ({
  type: MOVE_CARD,
  payload: {
    id,
    startListId,
    endListId,
    startIndex,
    endIndex
  }
})
