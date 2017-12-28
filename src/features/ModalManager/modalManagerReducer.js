import { createReducer } from 'common/utils/reducerUtils'
import { MODAL_OPEN, MODAL_CLOSE, MODAL_CLOSE_ALL } from './modalManagerConstants'

const initialState = {
  open: false,
  modals: []
}

const modalOpen = (state, payload) => {
  return {
    ...state,
    open: true,
    modals: [...state.modals, payload.component]
  }
}

const modalClose = (state) => {
  const newModals = state.modals.slice(0, state.modals.length - 1)
  return {
    ...state,
    open: newModals.length > 0,
    modals: newModals
  }
}

const modalCloseAll = (state, payload) => {
  return {
    ...state,
    open: false,
    modals: []
  }
}

export default createReducer(initialState, {
  [MODAL_OPEN]: modalOpen,
  [MODAL_CLOSE]: modalClose,
  [MODAL_CLOSE_ALL]: modalCloseAll
})
