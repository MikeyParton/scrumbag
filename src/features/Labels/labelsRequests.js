import CreateRequest from 'common/utils/CreateRequest'
import { labelsSchema } from './labelsSchema'

export const createLabelRequest = new CreateRequest({
  constantPrefix: 'LABELS/CREATE_LABEL',
  request: {
    method: 'post',
    responseSchema: labelsSchema
  }
})

export const updateLabelRequest = new CreateRequest({
  constantPrefix: 'LABELS/UPDATE_LABEL',
  request: {
    method: 'put',
    responseSchema: labelsSchema
  }
})
