import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box } from 'reflexbox'
import { withTheme } from 'styled-components'
import { Input, Button, CloseButton, CashMeOutside } from 'common/components'
import { CardWrapper } from '../Cards/cardStyledComponents'

const NewCardForm = (props) => {
  const { handleSubmit, handleCancel, theme } = props

  return (
    <CashMeOutside
      onClickOutside={handleCancel}
      render={provided => (
        <Box mr={`${theme.grid}px`}>
          <form
            ref={provided}
            onSubmit={handleSubmit}
          >
            <CardWrapper>
              <Field
                name="name"
                placeholder="Enter a Name ..."
                autoFocus
                type="autoTextArea"
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
      )}
    />
  )
}

NewCardForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'NewCard'
})(withTheme(NewCardForm))
