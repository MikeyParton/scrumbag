import React from 'react'
import { connect } from 'react-redux'
import { Tile } from 'features/Boards/BoardTile'
import { createBoardRequest } from 'features/Boards/boardsActions'
import { updateForm } from './boardFormActions'
import { getboardForm } from './boardFormSelectors'

const mapState = state => ({
  ...getboardForm(state)
})

const actions = {
  createBoardRequest,
  updateForm
}

class BoardForm extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target
    this.props.updateForm({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    const { form, createBoardRequest } = this.props
    event.preventDefault()
    createBoardRequest(form)
  }

  render() {
    const { form } = this.props
    const { name } = form

    return (
      <Tile>
        <p>Create new Board ...</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </Tile>
    )
  }
}

export default connect(mapState, actions)(BoardForm)
