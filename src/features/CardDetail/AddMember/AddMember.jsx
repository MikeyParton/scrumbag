import React from 'react'
import PropTypes from 'prop-types'
import { OptionsMenu } from 'common/components'
import MemberForm from './MemberForm'

const AddMember = (props) => {
  const { deactivate, selectedUsers } = props
  return (
    <OptionsMenu
      title="Add a Member"
      deactivate={deactivate}
    >
      <MemberForm selectedUsers={selectedUsers} />
    </OptionsMenu>
  )
}

AddMember.propTypes = {
  deactivate: PropTypes.func.isRequired,
}

export default AddMember
