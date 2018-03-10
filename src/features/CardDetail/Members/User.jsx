import React from 'react'
import { Avatar } from 'common/components'
import withUser from 'features/Users/withUser'

const User = props => <Avatar {...props.user} />

export default withUser(User)
