import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withLabel from 'features/Labels/withLabel'
import { labelUrl } from 'config/api'
import { OptionsMenu } from 'common/components'
import { updateLabelRequest } from 'features/Labels/labelsRequests'
import ChangeLabelForm from './ChangeLabelForm'

const actions = {
  updateLabel: updateLabelRequest.actions.request
}

class ChangeLabel extends React.Component {
  onSubmit = (values) => {
    const { updateLabel, id, onBack } = this.props
    updateLabel({
      ...values,
      requestUrl: labelUrl(id)
    })
    onBack()
  }

  render() {
    const { id, deactivate, onBack, label } = this.props
    const { name } = label

    return (
      <OptionsMenu
        title="Change Label"
        deactivate={deactivate}
        onBack={onBack}
      >
        <ChangeLabelForm
          initialValues={{ name }}
          id={id}
          onSubmit={this.onSubmit}
        />
      </OptionsMenu>
    )
  }
}

ChangeLabel.propTypes = {
  deactivate: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default connect(null, actions)(withLabel(ChangeLabel))
