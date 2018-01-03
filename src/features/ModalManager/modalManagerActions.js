import { MODAL_OPEN, MODAL_CLOSE } from './modalManagerConstants'

export const modalOpen = ({ title, type }) => ({
  type: MODAL_OPEN,
  payload: {
    title,
    type
  }
})

export const modalClose = () => ({
  type: MODAL_CLOSE
})
