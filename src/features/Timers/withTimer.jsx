import React from 'react'
import { connect } from 'react-redux'
import { makeGetTimerById } from './timersSelectors'

import {
  timerUrl,
  startTimerUrl,
  stopTimerUrl
} from 'config/api'

import {
  startTimerRequest,
  stopTimerRequest,
  deleteTimerRequest
} from './timersRequests'

const withTimer = (Component) => {
  const mapState = (state, ownProps) => ({
    timer: makeGetTimerById(ownProps.id)(state)
  })

  const actions = (dispatch, ownProps) => ({
    startTimer: () => {
      dispatch(startTimerRequest.actions.request({
        requestUrl: startTimerUrl(ownProps.id)
      }))
    },
    stopTimer: () => {
      dispatch(stopTimerRequest.actions.request({
        requestUrl: stopTimerUrl(ownProps.id)
      }))
    },
    deleteTimer: () => {
      dispatch(deleteTimerRequest.actions.request({
        requestUrl: timerUrl(ownProps.id)
      }))
    }
  })

  const wrappedComponent = props => <Component {...props} />

  return connect(mapState, actions)(wrappedComponent)
}

export default withTimer
