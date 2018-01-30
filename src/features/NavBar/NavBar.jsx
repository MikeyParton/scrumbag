import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'common/components'
import { getCurrentUser } from 'features/Login/loginSelectors'
import { logoutRequest } from 'features/Login/loginActions'
import { connect } from 'react-redux'
import { Bar, Brand, End } from './navBarStyles'

const mapState = (state) => ({
  currentUser: getCurrentUser(state)
})

const actions = { logoutRequest }

const NavBar = (props) => {
  const { currentUser, logoutRequest } = props
  return (
    <Bar>
      <End />
      <Brand>
        <Link to="/">
          <span aria-label="money-bag" role="img" className="moneybags">💰</span>
          <span className="text">crumbag</span>
        </Link>
      </Brand>
      <End>
        { currentUser && (
          <Button buttonType="navbarLight" onClick={logoutRequest}>
            Logout
          </Button>
        )}
      </End>
    </Bar>
  )
}

export default connect(mapState, actions)(NavBar)
