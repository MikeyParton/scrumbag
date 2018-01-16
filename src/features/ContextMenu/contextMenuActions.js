import { HIDE_MENU, SHOW_MENU } from './contextMenuConstants'

export const showMenu = (x, y, type, menuArgs) => ({
  type: SHOW_MENU,
  payload: {
    location: {
      x,
      y
    },
    type,
    menuArgs
  }
})

export const hideMenu = () => ({
  type: HIDE_MENU
})
