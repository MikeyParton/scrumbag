import { createSelector } from 'reselect'

const getTimers = state => state.timers

export const makeGetTimerById = id => (
  createSelector(
    getTimers,
    timers => timers.byId[id]
  )
)
