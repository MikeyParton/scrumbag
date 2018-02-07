import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box } from 'reflexbox'
import { withTheme } from 'styled-components'
import { Input, Button, CloseButton } from 'common/components'
import { CardWrapper } from '../Cards/cardStyledComponents'

class NewCardForm extends React.Component {
  render() {
    const {
      scrollTo,
      handleSubmit,
      handleCancel,
      theme,
      setRef
    } = this.props

    return (
      <Box mr={`${theme.grid}px`}>
        <form ref={setRef} onSubmit={handleSubmit}>
          <CardWrapper>
            <Field
              name="name"
              placeholder="Enter a Name ..."
              autoFocus
              type="autoTextArea"
              onResize={scrollTo}
              component={Input}
            />
          </CardWrapper>
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
      </Box>
    )
  }
}

NewCardForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'NewCard'
})(withTheme(NewCardForm))
