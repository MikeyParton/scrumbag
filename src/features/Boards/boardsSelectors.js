export const getBoards = state => state.boards

export const getAllBoards = (state) => {
  const boards = getBoards(state)
  return boards.allIds.map(id => boards.byId[id])
}

export const loading = state => getBoards(state).loading
