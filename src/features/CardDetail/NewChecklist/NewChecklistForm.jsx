import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Box } from 'grid-styled'
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
          <Box mt={2}>
            <Button wide type="submit" buttonType="success">
              Add
            </Button>
          </Box>
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
