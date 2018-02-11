import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest } from './cardDetailRequests'

const initialState = {
  card: {},
  loading: true
}

const getCardDetailSuccess = (state, payload) => ({
  ...payload,
  loading: false
})

export default createReducer(initialState, {
  [getCardDetailRequest.constants.success]: getCardDetailSuccess,
  [getCardDetailRequest.constants.request]: () => ({ ...initialState })
})
