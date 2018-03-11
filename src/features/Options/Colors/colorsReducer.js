import { createReducer } from 'common/utils/reducerUtils'
import { getColorOptionsRequest } from './colorsRequests'

export const loadColors = (state, payload) => payload.colors

export default createReducer([], {
  [getColorOptionsRequest.constants.success]: loadColors
})
