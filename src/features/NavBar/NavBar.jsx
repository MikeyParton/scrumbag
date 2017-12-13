import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  height: 40px;
  background-color: #026aa7;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Brand = styled.a`
  display: flex;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  align-items: center;

  &:hover {
    color: white;
    text-decoration: none;
  }

  .text {
    margin-top: 5px;
  }

  .moneybags {
    font-size: 28px;
  }
`

const AppNavBar = (props) => {
  return (
    <NavBar>
      <Brand href="#">
        <span aria-label="money-bag" role="img" className="moneybags">💰</span>
        <span className="text">crumbag</span>
      </Brand>
    </NavBar>
  )
}

export default AppNavBar
