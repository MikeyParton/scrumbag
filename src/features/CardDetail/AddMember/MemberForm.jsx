import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Downshift from 'downshift'
import { Box } from 'grid-styled'
import { cardAddUserUrl } from 'config/api'
import { Input } from 'common/components'
import { getCardId } from 'features/CardDetail/cardDetailSelectors'
import { getAddMemberFilter, getFilteredUsers } from './addMemberSelectors'
import { addUserRequest } from './addMemberRequests'
import UserOption from './UserOption'

const mapState = state => ({
  id: getCardId(state),
  users: getFilteredUsers(state),
  filter: getAddMemberFilter(state)
})

const actions = {
  addUser: addUserRequest.actions.request
}

class MemberForm extends React.Component {
  handleSelect = (selectedItem) => {
    const { addUser, id } = this.props

    addUser({
      userId: selectedItem.id,
      requestUrl: cardAddUserUrl(id)
    })
  }

  render() {
    const { id, users, filter, selectedUsers } = this.props
    return (
      <form>
        <Downshift
          inputValue={filter}
          onChange={this.handleSelect}
          render={({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            selectedItem,
            highlightedIndex,
          }) => (
            <div>
              <Box mb={2}>
                <Field
                  name="filter"
                  autoFocus
                  component={Input}
                  {...getInputProps({
                    placeholder: 'Find a User',
                  })}
                />
              </Box>
              {users.map(id => (
                <UserOption {
                  ...{
                    selected: selectedUsers.includes(id),
                    id,
                    getItemProps
                  }
                } />
              ))}
            </div>
          )}
        />
      </form>
    )
  }
}

export default connect(mapState, actions)(reduxForm({
  form: 'AddMember'
})(MemberForm))
