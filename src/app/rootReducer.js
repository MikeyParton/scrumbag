import { combineReducers } from 'redux'

import boards from 'features/Boards/boardsReducer'
import modalManager from 'features/ModalManager/modalManagerReducer'
import boardForm from 'features/BoardForm/boardFormReducer'
import boardDetail from 'features/BoardDetail/boardDetailReducer'

export default combineReducers({
  boards,
  boardDetail,
  modalManager,
  boardForm
})
