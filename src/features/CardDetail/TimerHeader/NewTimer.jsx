import React from 'react'
import { connect } from 'react-redux'
import { createTimerRequest } from 'features/Timers/timersRequests'
import { timersUrl } from 'config/api'

const actions = {
  createTimer: createTimerRequest.actions.request
}

const NewTimer = (props) => {
  const { cardId, createTimer } = props
  return (
    <div onClick={() => createTimer({ requestUrl: timersUrl(cardId) })}>
      Start work on this card now!
    </div>
  )
}

export default connect(null, actions)(NewTimer)
