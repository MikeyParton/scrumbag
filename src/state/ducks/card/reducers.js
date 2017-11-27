import { combineReducers } from 'redux'

const initialState = {
  byId: {
    1: { id: '1', title: 'Do some stuff' },
    2: { id: '2', title: 'Feed the cat' },
    3: { id: '3', title: 'Go to the Gym' },
    4: { id: '4', title: 'Eat some cheese' }
  },
  allIds: ['1', '2', '3', '4']
}

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  byId,
  allIds
})
