import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { reduxForm, Field, getFormSubmitErrors } from 'redux-form'
import { connect } from 'react-redux'
import { FormGroup, Button, Message } from 'common/components'

const mapState = state => ({
  submitErrors: getFormSubmitErrors('Login')(state)
})

class LoginForm extends React.Component {
  render() {
    const { handleSubmit, submitErrors } = this.props
    const { base } = submitErrors

    return (
      <form onSubmit={handleSubmit}>
        { base && (
          <Message type="error">
            {base}
          </Message>
        )}
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          component={FormGroup}
        />
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          component={FormGroup}
        />
        <Link to="/signup">
          Don't have an account? Sign up now
        </Link>
        <hr />
        <Button type="submit" buttonType="success">
          Login
        </Button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default connect(mapState, null)(reduxForm({
  form: 'Login'
})(LoginForm))
