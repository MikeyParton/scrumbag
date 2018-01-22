import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Input } from 'common/components/Form'
import { Button } from 'common/components/Button'

class LoginForm extends React.Component {
  renderInput = (props) => {
    return <Input type={props.type} {...props.input} />
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'Login'
})(LoginForm)
