import React from 'react'
import { connect } from 'react-redux'
import { makeGetUserById } from './usersSelectors'

const withUser = (Component) => {
  const mapState = (state, ownProps) => ({
    user: makeGetUserById(ownProps.id)(state)
  })

  const wrappedComponent = props => <Component {...props} />

  return connect(mapState, null)(wrappedComponent)
}

export default withUser
