import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Input } from 'common/components/Form'
import { Button } from 'common/components/Button'
import Title from 'common/components/CardTitle'
import LoginForm from './LoginForm'
import { loginRequest } from './loginActions'

const actions = {
  loginRequest
}

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
  onSubmit = (values) => {
    const { loginRequest } = this.props
    loginRequest(values)
  }

  render() {
    return (
      <Page>
        <Container>
          <Header>
            Login to Scrumbag
          </Header>
          <LoginForm onSubmit={this.onSubmit} />
        </Container>
      </Page>
    )
  }
}

export default connect(null, actions)(Login)
