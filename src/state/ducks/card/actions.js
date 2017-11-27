import types from './types'

const moveCard = ({ id, startListId, endListId, startIndex, endIndex }) => ({
  type: types.MOVE_CARD,
  id,
  startListId,
  endListId,
  startIndex,
  endIndex
})

export default {
  moveCard
}
