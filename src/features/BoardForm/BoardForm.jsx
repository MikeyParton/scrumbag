import React from 'react'
import { connect } from 'react-redux'
import { StatusButton } from 'common/components'
import { Label, Input } from 'common/components/Form'
import { createBoardRequest } from 'features/Boards/boardsRequests'
import { updateForm } from './boardFormActions'
import { getboardForm } from './boardFormSelectors'

const mapState = (state) => {
  const { form, submitStatus } = getboardForm(state)
  return {
    form,
    submitStatus
  }
}

const actions = {
  createBoard: createBoardRequest.actions.request,
  updateForm
}

class BoardForm extends React.Component {
  componentDidMount() {
    this.nameInput.focus()
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.props.updateForm({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    const { form, createBoard } = this.props
    event.preventDefault()
    createBoard(form)
  }

  render() {
    const { form, submitStatus } = this.props
    const { name } = form

    return (
      <form onSubmit={this.handleSubmit}>
        <Label for="name">Name</Label>
        <Input
          innerRef={(input) => { this.nameInput = input }}
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Like Lodex..."
        />
        <StatusButton
          buttonType="success"
          type="submit"
          status={submitStatus}
        >
          Create
        </StatusButton>
      </form>
    )
  }
}

export default connect(mapState, actions)(BoardForm)
