import CreateRequest from 'common/utils/CreateRequest'
import { timersSchema } from './timersSchema'

export const createTimerRequest = new CreateRequest({
  constantPrefix: 'TIMERS/CREATE_TIMER',
  request: {
    method: 'post',
    responseSchema: timersSchema
  }
})

export const startTimerRequest = new CreateRequest({
  constantPrefix: 'TIMERS/START_TIMER',
  request: {
    method: 'post',
    responseSchema: timersSchema
  }
})

export const stopTimerRequest = new CreateRequest({
  constantPrefix: 'TIMERS/STOP_TIMER',
  request: {
    method: 'post',
    responseSchema: timersSchema
  }
})

export const deleteTimerRequest = new CreateRequest({
  constantPrefix: 'TIMERS/DELETE_TIMER',
  request: {
    method: 'delete'
  }
})
