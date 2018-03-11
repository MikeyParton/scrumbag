import React from 'react'
import PropTypes from 'prop-types'
import { OptionsMenu } from 'common/components'
import LabelForm from './LabelForm'
import ChangeLabel from 'features/ChangeLabel/ChangeLabel'

class AddLabel extends React.Component {
  state = {
    editingId: null
  }

  setEditingId = (editingId) => {
    this.setState({ editingId })
  }

  render() {
    const { editingId } = this.state
    const { deactivate, selectedLabels } = this.props

    if (editingId) {
      return (
        <ChangeLabel
          id={editingId}
          setEditingId={this.setEditingId}
          deactivate={deactivate}
          onBack={() => this.setEditingId(null)}
        />
      )
    }

    return (
      <OptionsMenu
        title="Add a Label"
        deactivate={deactivate}
      >
        <LabelForm
          selectedLabels={selectedLabels}
          setEditingId={this.setEditingId}
        />
      </OptionsMenu>
    )
  }
}

AddLabel.propTypes = {
  deactivate: PropTypes.func.isRequired,
  selectedLabels: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default AddLabel
