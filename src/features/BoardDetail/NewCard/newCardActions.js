import { SHOW, HIDE } from './newCardConstants'

export const showNewCard = (listId) => ({
  type: SHOW,
  payload: {
    listId
  }
})

export const hideNewCard = () => ({
  type: HIDE
})
