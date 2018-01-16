import { createReducer } from 'common/utils/reducerUtils'
import { SHOW_MENU, HIDE_MENU } from './contextMenuConstants'

const initialState = {
  show: false,
  location: {
    x: null,
    y: null,
  },
  type: null,
  menuArgs: undefined,
}

const showMenu = (state, payload) => ({
  ...state,
  ...payload,
  show: true,
})

export default createReducer(initialState, {
  [SHOW_MENU]: showMenu,
  [HIDE_MENU]: () => initialState
})
