import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withLabel from 'features/Labels/withLabel'
import { labelsUrl, labelUrl } from 'config/api'
import { OptionsMenu } from 'common/components'
import { getBoardId } from 'features/CardDetail/cardDetailSelectors'
import { getColors } from 'features/Options/Colors/colorsSelectors'
import { getColorOptionsRequest } from 'features/Options/Colors/colorsRequests'
import { createLabelRequest, updateLabelRequest } from 'features/Labels/labelsRequests'
import ChangeLabelForm from './ChangeLabelForm'

const mapState = state => ({
  boardId: getBoardId(state),
  colors: getColors(state)
})

const actions = {
  createLabel: createLabelRequest.actions.request,
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
    const { id, boardId, createLabel, updateLabel, onBack, colors } = this.props
    const colorValues = colors[values.color]
    const mergedValues = {
      ...values,
      ...colorValues,
    }

    if (id) {
      updateLabel({
        ...mergedValues,
        requestUrl: labelUrl(id)
      })
    } else {
      createLabel({
        ...mergedValues,
        requestUrl: labelsUrl(boardId)
      })
    }

    onBack()
  }

  getInitialValues = () => {
    const { label } = this.props
    if (label) return { name: label.name, color: label.color }
    return {}
  }

  getTitle = () => {
    const { id } = this.props
    return id ? 'Change Label' : 'New Label'
  }

  render() {
    const { id, deactivate, onBack, colors } = this.props
    return (
      <OptionsMenu
        title={this.getTitle()}
        deactivate={deactivate}
        onBack={onBack}
      >
        <ChangeLabelForm
          initialValues={this.getInitialValues()}
          id={id}
          colors={Object.values(colors)}
          onSubmit={this.onSubmit}
        />
      </OptionsMenu>
    )
  }
}

ChangeLabel.propTypes = {
  boardId: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })).isRequired,
  deactivate: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  createLabel: PropTypes.func.isRequired,
  getColors: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

ChangeLabel.defaultProps = {
  boardId: null
}

export default connect(mapState, actions)(withLabel(ChangeLabel))
