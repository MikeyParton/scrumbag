import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Button, Input } from 'common/components'

class NewChecklistForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title</label>
          <Field
            name="name"
            placeholder="Enter a Name ..."
            autoFocus
            component={Input}
          />
          <Button wide type="submit" buttonType="success">
            Add
          </Button>
        </form>
      </div>
    )
  }
}

NewChecklistForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'NewChecklist'
})(NewChecklistForm)
