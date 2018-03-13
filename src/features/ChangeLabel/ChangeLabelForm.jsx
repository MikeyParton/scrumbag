import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box } from 'grid-styled'
import { Button, Input } from 'common/components'
import withLabel from 'features/Labels/withLabel'
import ColorOption from './ColorOption'

class ChangeLabelForm extends React.Component {

  render() {
    const { handleSubmit, colors } = this.props

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
        <Flex wrap mr={-1} ml={-1}>
          {colors.map(color => (
            <Box
              key={color.color}
              width={1 / 5}
              pl={1}
              pr={1}
              mb={2}
            >
              <ColorOption {...color} />
            </Box>
          ))}
        </Flex>
        <Button type="submit" wide buttonType="success">
          Save
        </Button>
      </form>
    )
  }
}

ChangeLabelForm.propTypes = {
  id: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default withLabel(reduxForm({
  form: 'ChangeLabel'
})(ChangeLabelForm))
