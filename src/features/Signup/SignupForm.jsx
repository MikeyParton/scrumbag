import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Input } from 'common/components/Form'
import { Button } from 'common/components/Button'

class SignupForm extends React.Component {
  renderInput = (props) => {
    return (
      <div>
        <Input
          placeholder={props.placeholder}
          type={props.type}
          {...props.input}
        />
        <strong>{props.meta.error}</strong>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name</label>
            <Field
              name="firstName"
              placeholder="First"
              component={this.renderInput}
            />
          </div>
          <div>
            <Field
              placeholder="Last"
              name="lastName"
              component={this.renderInput}
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          component={this.renderInput}
        />
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          component={this.renderInput}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <Field
          name="passwordConfirmation"
          type="password"
          component={this.renderInput}
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
