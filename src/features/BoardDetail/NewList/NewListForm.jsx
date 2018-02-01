import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Box } from 'reflexbox'
import { withTheme } from 'styled-components'
import { Input, Button } from 'common/components'
import { FormContainer } from './newListFormStyles'

const NewListForm = (props) => {
  const { handleSubmit, theme } = props
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          placeholder="Enter a Name ..."
          component={Input}
        />
        <Box mt={`${theme.grid}px`}>
          <Button type="submit" buttonType="success">
            Save
          </Button>
        </Box>

      </form>
    </FormContainer>
  )
}

NewListForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'NewList'
})(withTheme(NewListForm))
