import { createReducer } from 'common/utils/reducerUtils'
import { MODAL_OPEN, MODAL_CLOSE } from './modalManagerConstants'

const initialState = {
  open: false,
  title: null,
  type: null
}

const modalOpen = (state, payload) => {
  return {
    ...state,
    title: payload.title,
    open: true,
    type: payload.type
  }
}

const modalClose = () => initialState

export default createReducer(initialState, {
  [MODAL_OPEN]: modalOpen,
  [MODAL_CLOSE]: modalClose,
})
