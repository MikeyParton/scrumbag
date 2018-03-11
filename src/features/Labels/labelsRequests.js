import CreateRequest from 'common/utils/CreateRequest'
import { labelsSchema } from './labelsSchema'

export const updateLabelRequest = new CreateRequest({
  constantPrefix: 'LABELS/UPDATE_LABEL',
  request: {
    method: 'put',
    responseSchema: labelsSchema
  }
})
