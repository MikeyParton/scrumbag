import { BOARDS_REQUEST, BOARDS_SUCCESS, BOARDS_ERROR } from './boardsConstants'

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
