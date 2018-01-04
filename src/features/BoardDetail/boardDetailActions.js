import { BOARD_DETAIL_REQUEST, BOARD_DETAIL_SUCCESS, BOARD_DETAIL_ERROR } from './boardDetailConstants'

export const boardDetailRequest = id => ({
  type: BOARD_DETAIL_REQUEST,
  payload: {
    id
  }
})

export const boardDetailSuccess = entities => ({
  type: BOARD_DETAIL_SUCCESS,
  payload: {
    ...entities
  }
})

export const boardDetailError = error => ({
  type: BOARD_DETAIL_ERROR,
  payload: {
    error
  }
})
