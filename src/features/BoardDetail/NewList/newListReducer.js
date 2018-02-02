import { createReducer } from 'common/utils/reducerUtils'
import { SHOW, HIDE } from './newListConstants'

const initialState = {
  show: false
}

export default createReducer(initialState, {
  [SHOW]: () => ({ show: true }),
  [HIDE]: () => ({ show: false })
})
