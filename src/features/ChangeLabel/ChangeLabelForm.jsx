import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Box } from 'grid-styled'
import { Button, Input } from 'common/components'
import withLabel from 'features/Labels/withLabel'

class ChangeLabelForm extends React.Component {
  render() {
    const { setEditingId, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            autoFocus
            component={Input}
            placeholder="Enter a name"
          />
        </Box>
        <Button type="submit" wide buttonType="success">
          Save
        </Button>
      </form>
    )
  }
}

ChangeLabelForm.propTypes = {
  id: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setEditingId: PropTypes.func.isRequired,
}

export default withLabel(reduxForm({
  form: 'ChangeLabel'
})(ChangeLabelForm))
