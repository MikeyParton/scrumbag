import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Input, Button, CashMeOutside } from 'common/components'

class EditNameForm extends React.Component {
  render() {
    const { onCancel } = this.props

    return (
      <form>
        <CashMeOutside
          onClickOutside={onCancel}
          render={provided => (
            <Field
              autoFocus
              withRef
              ref={provided}
              name="name"
              type="autoTextArea"
              component={Input}
            />
          )}
        />
        <Button type="submit" buttonType="success">
          Save
        </Button>
      </form>
    )
  }
}

EditNameForm.propTypes = {
  onCancel: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'CardName',
})(EditNameForm)
