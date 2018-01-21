import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const loggedIn = true

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (loggedIn) {
        return <Component {...props} />
      }
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

export default PrivateRoute
