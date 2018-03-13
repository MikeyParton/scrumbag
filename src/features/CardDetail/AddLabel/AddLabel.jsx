import React from 'react'
import PropTypes from 'prop-types'
import { OptionsMenu } from 'common/components'
import LabelForm from './LabelForm'
import ChangeLabel from 'features/ChangeLabel/ChangeLabel'

class AddLabel extends React.Component {
  state = {
    showForm: false,
    editingId: null
  }

  showForm = (editingId) => {
    this.setState({ showForm: true, editingId })
  }

  hideForm = () => {
    this.setState({ showForm: false, editingId: null })
  }

  render() {
    const { showForm, editingId } = this.state
    const { deactivate, selectedLabels } = this.props

    if (showForm) {
      return (
        <ChangeLabel
          id={editingId}
          deactivate={deactivate}
          onBack={this.hideForm}
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
          showForm={this.showForm}
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
