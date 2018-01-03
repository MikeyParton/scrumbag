import { BOARDS_REQUEST, BOARDS_SUCCESS, BOARDS_ERROR } from './boardsConstants'
import { CREATE_BOARD_REQUEST, CREATE_BOARD_SUCCESS, CREATE_BOARD_ERROR } from './boardsConstants'

export const boardsRequest = () => ({
  type: BOARDS_REQUEST
})

export const boardsSuccess = boards => ({
  type: BOARDS_SUCCESS,
  payload: {
    boards
  }
})

export const boardsError = error => ({
  type: BOARDS_ERROR,
  payload: {
    error
  }
})

export const createBoardRequest = (params) => ({
  type: CREATE_BOARD_REQUEST,
  payload: {
    params
  }
})

export const createBoardSuccess = board => ({
  type: CREATE_BOARD_SUCCESS,
  payload: {
    board
  }
})

export const createBoardError = error => ({
  type: CREATE_BOARD_ERROR,
  payload: {
    error
  }
})