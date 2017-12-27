import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import cards from 'features/BoardDetail/Cards/cardsReducer'
import lists from 'features/BoardDetail/Lists/listsReducer'

const configureStore = () => {
  const rootReducer = combineReducers({
    lists,
    cards
  })

  return createStore(
    rootReducer,
    composeWithDevTools()
  )
}

export default configureStore
