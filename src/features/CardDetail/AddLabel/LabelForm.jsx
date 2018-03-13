import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Box } from 'grid-styled'
import { cardAddLabelUrl, cardRemoveLabelUrl } from 'config/api'
import { Input, HoverBlockButton } from 'common/components'
import { getCardId } from 'features/CardDetail/cardDetailSelectors'
import { getAllLabelIds } from 'features/Labels/labelsSelectors'
import LabelOption from './LabelOption'
import { addLabelRequest, removeLabelRequest } from './addLabelRequests'

const mapState = state => ({
  id: getCardId(state),
  labelIds: getAllLabelIds(state)
})

const actions = {
  addLabel: addLabelRequest.actions.request,
  removeLabel: removeLabelRequest.actions.request
}

class MemberForm extends React.Component {
  handleSelect = (labelId) => {
    const { addLabel, removeLabel, id: cardId } = this.props

    if (this.isSelected(labelId)) {
      removeLabel({
        labelId,
        requestUrl: cardRemoveLabelUrl(cardId)
      })
    } else {
      addLabel({
        labelId,
        requestUrl: cardAddLabelUrl(cardId)
      })
    }
  }

  isSelected = (id) => {
    const { selectedLabels } = this.props
    return selectedLabels.includes(parseInt(id, 0))
  }

  render() {
    const { labelIds, showForm } = this.props

    return (
      <form>
        <Box mb={2}>
          <Field
            name="filter"
            autoFocus
            component={Input}
            placeholder="Find a Label"
          />
        </Box>
        {labelIds.map(id => (
          <LabelOption
            id={id}
            handleEdit={() => showForm(id)}
            selected={this.isSelected(id)}
            handleSelect={this.handleSelect}
          />
        ))}
        <HoverBlockButton
          background="white"
          handleClick={() => showForm(null)}
        >
          Create new Label
        </HoverBlockButton>
      </form>
    )
  }
}

MemberForm.propTypes = {
  id: PropTypes.number.isRequired,
  showForm: PropTypes.func.isRequired,
  labelIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  addLabel: PropTypes.func.isRequired,
  removeLabel: PropTypes.func.isRequired,
  selectedLabels: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default connect(mapState, actions)(reduxForm({
  form: 'AddLabel'
})(MemberForm))
