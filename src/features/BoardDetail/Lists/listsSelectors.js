export const getLists = state => state.boardDetail.lists

export const getAllLists = (state) => {
  const lists = getLists(state)
  return lists.allIds.map(id => lists.byId[id])
}
