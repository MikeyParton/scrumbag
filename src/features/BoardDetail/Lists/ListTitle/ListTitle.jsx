import React from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import PropTypes from 'prop-types'
import AutoTextArea from 'react-autosize-textarea'
import { TitleWrapper, TitleOverlay } from './listTitleStyles'

class ListTitle extends React.Component {
  state = {
    editing: false,
    oldValue: this.props.value,
    newValue: this.props.value
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  update = (event) => {
    const newValue = event.target.value
    this.setState({ newValue })
  }

  startEditing = () => {
    this.setState({ editing: true, oldValue: this.state.newValue })
    this.titleInput.focus()
  }

  stopEditing = () => {
    const { onBlur, requestUrl } = this.props
    const { newValue, oldValue } = this.state
    this.setState({ editing: false })
    if (newValue !== oldValue) {
      onBlur({
        name: newValue,
        requestUrl
      })
    }
  }

  render() {
    const { editing, newValue } = this.state

    return (
      <TitleWrapper>
        <AutoTextArea
          spellCheck="false"
          innerRef={(titleInput) => { this.titleInput = titleInput }}
          onMouseDown={e => e.stopPropagation()}
          onBlur={this.stopEditing}
          onChange={this.update}
          value={newValue}
        />
        { !editing && <TitleOverlay onClick={this.startEditing} /> }
      </TitleWrapper>
    )
  }
}

ListTitle.propTypes = {
  requestUrl: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired
}

ListTitle.defaultProps = {
  requestUrl: null
}

export default ListTitle
