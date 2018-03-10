import React from 'react'
import PropTypes from 'prop-types'
import { OptionsMenu } from 'common/components'
import LabelForm from './LabelForm'

const AddMember = (props) => {
  const { deactivate, selectedLabels } = props
  return (
    <OptionsMenu
      title="Add a Label"
      deactivate={deactivate}
    >
      <LabelForm selectedLabels={selectedLabels} />
    </OptionsMenu>
  )
}

AddMember.propTypes = {
  deactivate: PropTypes.func.isRequired,
  selectedLabels: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default AddMember
