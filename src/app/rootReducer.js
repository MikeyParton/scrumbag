import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import boards from 'features/Boards/boardsReducer'
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
  boardDetail,
  modalManager,
  boardForm,
  contextMenu,
  cardDetail
})
