import { MODAL_OPEN, MODAL_CLOSE, MODAL_CLOSE_ALL } from './modalManagerConstants'

export const modalOpen = component => ({
  type: MODAL_OPEN,
  payload: {
    component
  }
})

export const modalClose = () => ({
  type: MODAL_CLOSE
})

export const modalCloseAll = () => ({
  type: MODAL_CLOSE_ALL
})
