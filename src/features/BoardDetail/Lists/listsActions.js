import {
  MOVE_LIST,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_ERROR
} from './listsConstants'

export const moveList = ({ id, startIndex, endIndex }) => ({
  type: MOVE_LIST,
  payload: {
    id,
    startIndex,
    endIndex
  }
})

export const updateListRequest = (id, changes) => ({
  type: UPDATE_LIST_REQUEST,
  payload: {
    id,
    changes
  }
})

export const updateListSuccess = lists => ({
  type: UPDATE_LIST_SUCCESS,
  payload: {
    lists
  }
})

export const updateListError = error => ({
  type: UPDATE_LIST_ERROR,
  payload: {
    error
  }
})
