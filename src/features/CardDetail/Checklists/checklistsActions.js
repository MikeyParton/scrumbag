import {
  SHOW_EDIT_TITLE,
  HIDE_EDIT_TITLE,
  SHOW_ADD_CHECKLIST_ITEM,
  HIDE_ADD_CHECKLIST_ITEM
} from './checklistsConstants'

export const showEditTitle = id => ({
  type: SHOW_EDIT_TITLE,
  payload: {
    id
  }
})

export const hideEditTitle = () => ({
  type: HIDE_EDIT_TITLE,
})

export const showAddChecklistItem = id => ({
  type: SHOW_ADD_CHECKLIST_ITEM,
  payload: {
    id
  }
})

export const hideAddChecklistItem = () => ({
  type: HIDE_ADD_CHECKLIST_ITEM,
})
