export const ROOT_URL = 'http://localhost:3001/api'
export const BOARDS_URL = `${ROOT_URL}/boards`
export const boardDetailUrl = id => `${ROOT_URL}/boards/${id}`
export const listUrl = (boardId, id) => `${boardDetailUrl(boardId)}/lists/${id}`
export const cardsUrl = (boardId, id) => `${boardDetailUrl(boardId)}/cards/${id}`
