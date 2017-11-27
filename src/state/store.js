import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './ducks'

const configureStore = () => {
  const rootReducer = combineReducers(reducers)
  return createStore(
    rootReducer,
    composeWithDevTools()
  )
}

export default configureStore
