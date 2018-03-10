import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Box } from 'grid-styled'
import { cardAddUserUrl, cardRemoveUserUrl } from 'config/api'
import { Input } from 'common/components'
import { getCardId } from 'features/CardDetail/cardDetailSelectors'
import { getAddMemberFilter, getFilteredUsers } from './addMemberSelectors'
import { addUserRequest, removeUserRequest } from './addMemberRequests'
import UserOption from './UserOption'

const mapState = state => ({
  id: getCardId(state),
  users: getFilteredUsers(state),
  filter: getAddMemberFilter(state)
})

const actions = {
  addUser: addUserRequest.actions.request,
  removeUser: removeUserRequest.actions.request
}

class MemberForm extends React.Component {
  handleSelect = (user) => {
    const { addUser, removeUser, id: cardId } = this.props
    const { id: userId } = user


    if (this.isSelected(userId)) {
      removeUser({
        userId,
        requestUrl: cardRemoveUserUrl(cardId)
      })
    } else {
      addUser({
        userId,
        requestUrl: cardAddUserUrl(cardId)
      })
    }
  }

  isSelected = (id) => {
    const { selectedUsers } = this.props
    return selectedUsers.includes(id)
  }

  render() {
    const { users } = this.props
    return (
      <form>
        <Box mb={2}>
          <Field
            name="filter"
            autoFocus
            component={Input}
            placeholder="Find a User"
          />
        </Box>
        {users.map(id => (
          <UserOption
            id={id}
            selected={this.isSelected(id)}
            handleSelect={this.handleSelect}
          />
        ))}
      </form>
    )
  }
}

MemberForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
}

export default connect(mapState, actions)(reduxForm({
  form: 'AddMember'
})(MemberForm))
