import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box } from 'reflexbox'
import { withTheme } from 'styled-components'
import { Input, Button, CloseButton } from 'common/components'
import { FormContainer } from './newListFormStyles'

const NewListForm = (props) => {
  const { handleSubmit, handleCancel, theme } = props
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          placeholder="Enter a Name ..."
          autoFocus
          component={Input}
        />
        <Flex
          align="center"
          mt={`${theme.grid}px`}
        >
          <Button type="submit" buttonType="success">
            Save
          </Button>
          <Box ml={`${theme.grid}px`}>
            <CloseButton onClick={handleCancel} />
          </Box>
        </Flex>

      </form>
    </FormContainer>
  )
}

NewListForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'NewList'
})(withTheme(NewListForm))
