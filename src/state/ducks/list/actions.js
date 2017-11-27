import types from "./types"

const moveList = ({ id, startIndex, endIndex }) => ({
  type: types.MOVE_LIST,
  id,
  startIndex,
  endIndex
})

export default {
  moveList
}
