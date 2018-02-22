import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box } from 'grid-styled'
import { CashMeOutside, CloseButton, Button, Input } from 'common/components'

class NewChecklistItemForm extends React.Component {
  render() {
    const { handleSubmit, onCancel } = this.props

    return (
      <CashMeOutside
        onClickOutside={onCancel}
        render={provided => (
          <form
            onSubmit={handleSubmit}
            ref={provided}
          >
            <Field
              name="name"
              placeholder="Enter a Name ..."
              autoFocus
              component={Input}
            />
            <Flex mt={2} align="center">
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

NewChecklistItemForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'NewChecklistItem'
})(NewChecklistItemForm)
