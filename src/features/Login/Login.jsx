import React from 'react'
import styled from 'styled-components'
import { Input } from 'common/components/Form'
import { Button } from 'common/components/Button'
import Title from 'common/components/CardTitle'

export const Page = styled.div`
  display: flex;
  flex-grow: 1;
  padding: ${props => props.theme.grid * 2}px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.boardBackgroundColor};
`

export const Header = styled.div`
  padding-bottom: ${props => props.theme.grid * 2}px;
  border-bottom: 1px black;
`

export const Container = styled.div`
  background-color: white;
  width: 300px;
  border-radius: ${props => props.theme.borderRadius}px;
  padding: ${props => props.theme.grid * 2}px;
`


class Login extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <Header>
            Login to Scrumbag
          </Header>
          <label htmlFor="email" type="email">Email</label>
          <Input name="email" />
          <label htmlFor="password">Password</label>
          <Input name="password" type="password" />
          <hr />
          <Button buttonType="success">
            Login
          </Button>
        </Container>
      </Page>
    )
  }
}

export default Login
