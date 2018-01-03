import { UPDATE_FORM, RESET_FORM } from './boardFormConstants'

export const updateForm = updates => ({
  type: UPDATE_FORM,
  payload: updates
})

export const resetForm = () => ({
  type: RESET_FORM
})
