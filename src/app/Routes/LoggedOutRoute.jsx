import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser, getcheckedStoredToken } from 'features/Login/loginSelectors'

const mapState = state => ({
  currentUser: getCurrentUser(state),
  checkedStoredToken: getcheckedStoredToken(state)
})

const LoggedOutRoute = ({ component: Component, currentUser, checkedStoredToken, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!checkedStoredToken) return null
      if (!currentUser) return <Component {...props} />

      return <Redirect to={{ pathname: '/' }} />
    }}
  />
)

LoggedOutRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  currentUser: PropTypes.object
}

LoggedOutRoute.defaultProps = {
  currentUser: null
}

export default connect(mapState, null)(LoggedOutRoute)
