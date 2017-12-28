import { combineReducers } from 'redux'

import boards from 'features/Boards/boardsReducer'
import boardForm from 'features/BoardForm/boardFormReducer'
import cards from 'features/BoardDetail/Cards/cardsReducer'
import lists from 'features/BoardDetail/Lists/listsReducer'

export default combineReducers({
  boards,
  boardForm,
  lists,
  cards
})
