import React from 'react'
import { connect } from 'react-redux'
import { Page, Header, Container } from 'common/components/login'
import SignupForm from './SignupForm'
import { signupRequest } from './signupActions'

const actions = {
  signupRequest
}

class Login extends React.Component {
  onSubmit = (values) => {
    const { signupRequest } = this.props
    signupRequest(values)
  }

  render() {
    return (
      <Page>
        <Container>
          <Header>
            Sign Up to Scrumbag
          </Header>
          <SignupForm onSubmit={this.onSubmit} />
        </Container>
      </Page>
    )
  }
}

export default connect(null, actions)(Login)
