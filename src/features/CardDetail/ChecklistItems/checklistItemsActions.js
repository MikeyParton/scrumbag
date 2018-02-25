import { SHOW_EDIT_ITEM, HIDE_EDIT_ITEM } from './checklistItemsConstants'

export const showEditItem = id => ({
  type: SHOW_EDIT_ITEM,
  payload: {
    id
  }
})

export const hideEditItem = () => ({
  type: HIDE_EDIT_ITEM
})
