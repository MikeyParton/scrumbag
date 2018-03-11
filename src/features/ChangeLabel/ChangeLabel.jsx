import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withLabel from 'features/Labels/withLabel'
import { labelUrl } from 'config/api'
import { OptionsMenu } from 'common/components'
import { getColors } from 'features/Options/Colors/colorsSelectors'
import { getColorOptionsRequest } from 'features/Options/Colors/colorsRequests'
import { updateLabelRequest } from 'features/Labels/labelsRequests'
import ChangeLabelForm from './ChangeLabelForm'

const mapState = state => ({
  colors: getColors(state)
})

const actions = {
  updateLabel: updateLabelRequest.actions.request,
  getColors: getColorOptionsRequest.actions.request
}

class ChangeLabel extends React.Component {
  componentDidMount() {
    const { colors, getColors } = this.props
    if (Object.values(colors).length === 0) {
      getColors()
    }
  }

  onSubmit = (values) => {
    const { updateLabel, id, onBack, colors } = this.props
    const colorValues = colors[values.color]

    updateLabel({
      ...values,
      ...colorValues,
      requestUrl: labelUrl(id)
    })
    onBack()
  }

  render() {
    const { id, deactivate, onBack, label, colors } = this.props
    const { name, color } = label
    return (
      <OptionsMenu
        title="Change Label"
        deactivate={deactivate}
        onBack={onBack}
      >
        <ChangeLabelForm
          initialValues={{ name, color }}
          id={id}
          colors={Object.values(colors)}
          onSubmit={this.onSubmit}
        />
      </OptionsMenu>
    )
  }
}

ChangeLabel.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })).isRequired,
  deactivate: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  getColors: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default connect(mapState, actions)(withLabel(ChangeLabel))
