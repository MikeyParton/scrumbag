import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import boards from 'features/Boards/boardsReducer'
import cards from 'features/Cards/cardsReducer'
import users from 'features/Users/usersReducer'
import labels from 'features/Labels/labelsReducer'
import login from 'features/Login/loginReducer'
import modalManager from 'features/ModalManager/modalManagerReducer'
import boardForm from 'features/BoardForm/boardFormReducer'
import boardDetail from 'features/BoardDetail/boardDetailReducer'
import contextMenu from 'features/ContextMenu/contextMenuReducer'
import cardDetail from 'features/CardDetail/cardDetailReducer'

export default combineReducers({
  form,
  login,
  boards,
  cards,
  users,
  labels,
  boardDetail,
  modalManager,
  boardForm,
  contextMenu,
  cardDetail
})
