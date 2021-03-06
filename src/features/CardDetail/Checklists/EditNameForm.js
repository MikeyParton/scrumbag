import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box } from 'grid-styled'
import { H1, Input, Button, CloseButton, CashMeOutside } from 'common/components'

class EditNameForm extends React.Component {
  render() {
    const { onCancel, handleSubmit } = this.props

    return (
      <CashMeOutside
        onClickOutside={onCancel}
        render={provided => (
          <form
            onSubmit={handleSubmit}
            ref={provided}
          >
            <H1>
              <Field
                autoFocus
                withRef
                name="name"
                type="autoTextArea"
                component={Input}
              />
            </H1>
            <Flex align="center">
              <Box mr={1}>
                <Button
                  type="submit"
                  buttonType="success"
                  wide
                >
                  Save
                </Button>
              </Box>
              <CloseButton onClick={onCancel} />
            </Flex>
          </form>
        )}
      />
    )
  }
}

EditNameForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'ChecklistName',
})(EditNameForm)
