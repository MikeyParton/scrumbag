import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser, getcheckedStoredToken } from 'features/Login/loginSelectors'

const mapState = state => ({
  currentUser: getCurrentUser(state),
  checkedStoredToken: getcheckedStoredToken(state)
})

const PrivateRoute = ({ component: Component, currentUser, checkedStoredToken, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!checkedStoredToken) return null
      if (currentUser) return <Component {...props} />

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }}
  />
)

PrivateRoute.propTypes = {
  checkedStoredToken: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  currentUser: PropTypes.object
}

PrivateRoute.defaultProps = {
  currentUser: null
}

export default connect(mapState, null)(PrivateRoute)
