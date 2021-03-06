import React from 'react'
import { connect } from 'react-redux'
import { Page, Header, Container } from 'common/components/login'
import LoginForm from './LoginForm'
import { loginRequest } from './loginActions'

const actions = {
  loginRequest
}

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
