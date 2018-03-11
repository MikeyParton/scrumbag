import CreateRequest from 'common/utils/CreateRequest'
import { colorOptionsUrl } from 'config/api'
import { colorsSchema } from './colorsSchema'

export const getColorOptionsRequest = new CreateRequest({
  constantPrefix: 'OPTIONS/COLORS/GET_COLOR_OPTIONS',
  request: {
    method: 'get',
    url: colorOptionsUrl(),
    responseSchema: colorsSchema
  }
})
