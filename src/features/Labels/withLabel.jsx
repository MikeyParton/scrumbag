import React from 'react'
import { connect } from 'react-redux'
import { makeGetLabelById } from './labelsSelectors'

const withLabel = (Component) => {
  const mapState = (state, ownProps) => ({
    label: makeGetLabelById(ownProps.id)(state)
  })

  const wrappedComponent = props => <Component {...props} />

  return connect(mapState, null)(wrappedComponent)
}

export default withLabel
