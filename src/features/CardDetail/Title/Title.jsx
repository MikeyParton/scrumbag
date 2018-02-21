import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { cardUrl } from 'config/api'
import styled from 'styled-components'
import { H1 } from 'common/components'
import EditNameForm from './EditNameForm'
import { updateCardRequest } from '../cardDetailRequests'
import { getName, getEditingTitle } from '../cardDetailSelectors'
import { showEditTitle, hideEditTitle } from '../cardDetailActions'

const mapState = state => ({
  name: getName(state),
  editing: getEditingTitle(state)
})

const actions = {
  showForm: showEditTitle,
  hideForm: hideEditTitle,
  updateCard: updateCardRequest.actions.request
}

const Container = styled.div`
  flex-grow: 1;
`

class CardTitle extends React.Component {
  update = (values) => {
    const { updateCard, id } = this.props

    updateCard({
      ...values,
      requestUrl: cardUrl(id)
    })
  }

  render() {
    const { name, editing, showForm, hideForm } = this.props

    return (
      <Container>
        {
          editing
            ? <EditNameForm
                onSubmit={this.update}
                initialValues={{ name }}
                onCancel={hideForm}
              />
            : <H1 onClick={showForm}>{name}</H1>
        }
      </Container>
    )
  }
}

CardTitle.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  editing: PropTypes.bool.isRequired,
  updateCard: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
}

export default connect(mapState, actions)(CardTitle)
