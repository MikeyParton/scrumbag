import styled from 'styled-components'

export const NavBar = styled.div`
  height: 40px;
  background-color: #026aa7;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

export const Brand = styled.a`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }

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
