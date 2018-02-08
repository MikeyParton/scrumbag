import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser, getcheckedStoredToken } from 'features/Login/loginSelectors'

const mapState = state => ({
  currentUser: getCurrentUser(state),
  checkedStoredToken: getcheckedStoredToken(state)
})

class PrivateRoute extends React.Component {
  renderProps = (props) => {
    const { component: Component, currentUser, checkedStoredToken, ...rest } = this.props

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
  }

  render() {
    const { component: Component, currentUser, checkedStoredToken, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={this.renderProps}
      />
    )
  }
}

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
