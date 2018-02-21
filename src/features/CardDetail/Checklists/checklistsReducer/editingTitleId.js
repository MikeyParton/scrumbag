import { createReducer } from 'common/utils/reducerUtils'
import { SHOW_EDIT_TITLE, HIDE_EDIT_TITLE } from '../checklistsConstants'

export default createReducer(null, {
  [SHOW_EDIT_TITLE]: (state, payload) => payload.id,
  [HIDE_EDIT_TITLE]: () => null
})
