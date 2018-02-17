import { createSelector } from 'reselect'

export const getBoardDetail = state => state.boardDetail

export const getBoard = createSelector(
  getBoardDetail,
  boardDetail => boardDetail.board
)

export const getLoading = createSelector(
  getBoard,
  board => board.loading
)

export const getBoardUrl = createSelector(
  getBoard,
  board => board.url
)
