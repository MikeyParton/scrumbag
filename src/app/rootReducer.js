import { combineReducers } from 'redux'

import boards from 'features/Boards/boardsReducer'
import cards from 'features/BoardDetail/Cards/cardsReducer'
import lists from 'features/BoardDetail/Lists/listsReducer'

export default combineReducers({
  boards,
  lists,
  cards
})
