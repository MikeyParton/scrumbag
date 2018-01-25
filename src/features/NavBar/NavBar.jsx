import React from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser } from 'features/Login/loginSelectors'
import { logoutRequest } from 'features/Login/loginActions'
import { connect } from 'react-redux'
import { Bar, Brand } from './navBarStyles'

const mapState = (state) => ({
  currentUser: getCurrentUser(state)
})

const actions = { logoutRequest }

const NavBar = (props) => {
  const { currentUser, logoutRequest } = props
  return (
    <Bar>
      <Brand>
        <Link to="/">
          <span aria-label="money-bag" role="img" className="moneybags">💰</span>
          <span className="text">crumbag</span>
        </Link>
      </Brand>
      { currentUser && (
        <button
          onClick={logoutRequest}>
          Logout
        </button>
      )}
    </Bar>
  )
}

export default connect(mapState, actions)(NavBar)
