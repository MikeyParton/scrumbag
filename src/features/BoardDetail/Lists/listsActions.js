import { MOVE_LIST } from './listsConstants'

export const moveList = ({ id, startIndex, endIndex }) => ({
  type: MOVE_LIST,
  payload: {
    id,
    startIndex,
    endIndex
  }
})
