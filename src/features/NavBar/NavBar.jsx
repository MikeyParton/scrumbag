import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Brand } from './navBarStyles'

const AppNavBar = () => {
  return (
    <NavBar>
      <Brand>
        <Link to="/">
          <span aria-label="money-bag" role="img" className="moneybags">💰</span>
          <span className="text">crumbag</span>
        </Link>
      </Brand>
    </NavBar>
  )
}

export default AppNavBar
