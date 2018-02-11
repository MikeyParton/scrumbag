import { createReducer } from 'common/utils/reducerUtils'
import { getCardDetailRequest } from './cardDetailRequests'

const initialState = {
  card: null
}

const getCardDetailSuccess = (state, payload) => ({ ...payload })

export default createReducer(initialState, {
  [getCardDetailRequest.constants.success]: getCardDetailSuccess
})
