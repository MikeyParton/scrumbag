import { createReducer } from 'common/utils/reducerUtils'
import { HIDE, SHOW } from './newCardConstants'

const initialState = {
  listId: null
}

export default createReducer(initialState, {
  [SHOW]: (state, payload) => ({ listId: payload.listId }),
  [HIDE]: () => ({ listId: null })
})
