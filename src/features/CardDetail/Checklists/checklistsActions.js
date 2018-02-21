import { SHOW_EDIT_TITLE, HIDE_EDIT_TITLE } from './checklistsConstants'

export const showEditTitle = id => ({
  type: SHOW_EDIT_TITLE,
  payload: {
    id
  }
})

export const hideEditTitle = () => ({
  type: HIDE_EDIT_TITLE,
})
