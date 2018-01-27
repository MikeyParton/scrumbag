import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { FormGroup, Button } from 'common/components'

class SignupForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Field
          name="firstName"
          placeholder="First"
          component={FormGroup}
        />
        <Field
          placeholder="Last"
          name="lastName"
          component={FormGroup}
        />
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
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <Field
          name="passwordConfirmation"
          type="password"
          component={FormGroup}
        />
        <Link to="/login">
          Already have an account? Log in now
        </Link>
        <hr />
        <Button type="submit" buttonType="success">
          Sign Up
        </Button>
      </form>
    )
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'Signup'
})(SignupForm)
