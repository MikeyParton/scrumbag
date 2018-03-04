import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Downshift from 'downshift'
import { Input, Option } from 'common/components'
import { getCardId } from 'features/CardDetail/cardDetailSelectors'
import { getAddMemberFilter, getFilteredUsers } from './addMemberSelectors'
import { getUsersRequest } from './addMemberRequests'

const mapState = state => ({
  id: getCardId(state),
  users: getFilteredUsers(state),
  filter: getAddMemberFilter(state)
})

const actions = {}

class MemberForm extends React.Component {
  handleSelect = (selectedItem) => {}

  render() {
    const { id, users, filter } = this.props
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
              <Field
                name="filter"
                autoFocus
                component={Input}
                {...getInputProps({
                  placeholder: 'Favorite fruit ?',
                })}
              />
              {users.map(item => (
                <Option
                  key={item.id}
                  {...getItemProps({ item })}
                >
                  {`${item.firstName} ${item.lastName} ${item.selected ? ' - Yes' : ''}`}
                </Option>
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
