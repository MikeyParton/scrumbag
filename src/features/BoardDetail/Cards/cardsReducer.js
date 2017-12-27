import { createReducer } from 'common/utils/reducerUtils'
import { combineReducers } from 'redux'

const initialState = {
  byId: {
    1: { id: '1', title: 'Do some stuff' },
    2: { id: '2', title: 'Feed the cat' },
    3: { id: '3', title: 'Go to the Gym' },
    4: { id: '4', title: 'Eat some cheese' },
    5: { id: '5', title: 'Do some stuff' },
    6: { id: '6', title: 'Feed the cat' },
    7: { id: '7', title: 'Go to the Gym' },
    8: { id: '8', title: 'Eat some cheese' },
    9: { id: '9', title: 'Do some stuff' },
    10: { id: '10', title: 'Feed the cat' },
    11: { id: '11', title: 'Go to the Gym' },
    12: { id: '12', title: 'Eat some cheese' }
  },
  allIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
}

const byId = createReducer(initialState.byId, {})
const allIds = createReducer(initialState.allIds, {})

export default combineReducers({
  byId,
  allIds
})
