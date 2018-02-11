import React from 'react'
import { listUrl } from 'config/api'
import shallowCompare from 'react-addons-shallow-compare'
import PropTypes from 'prop-types'
import AutoTextArea from 'react-autosize-textarea'
import { TitleWrapper, TitleOverlay } from './listTitleStyles'

class ListTitle extends React.Component {
  state = {
    editing: false,
    oldName: this.props.name,
    newName: this.props.name
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  update = (event) => {
    const newName = event.target.value
    this.setState({ newName })
  }

  startEditing = () => {
    this.setState({ editing: true, oldName: this.state.newName })
    this.titleInput.focus()
  }

  stopEditing = () => {
    const { updateList, id } = this.props
    const { newName, oldName } = this.state
    this.setState({ editing: false })
    if (newName !== oldName) {
      updateList({
        name: newName,
        requestUrl: listUrl(id)
      })
    }
  }

  render() {
    const { editing, newName } = this.state

    return (
      <TitleWrapper>
        <AutoTextArea
          spellCheck="false"
          innerRef={(titleInput) => { this.titleInput = titleInput }}
          onMouseDown={e => e.stopPropagation()}
          onBlur={this.stopEditing}
          onChange={this.update}
          value={newName}
        />
        { !editing && <TitleOverlay onClick={this.startEditing} /> }
      </TitleWrapper>
    )
  }
}

ListTitle.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string.isRequired,
  updateList: PropTypes.func.isRequired
}

export default ListTitle
