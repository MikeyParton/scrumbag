import React from 'react'
import PropTypes from 'prop-types'

class Toggle extends React.Component {
  state = {
    active: false
  }

  activate = () => {
    this.setState({ active: true })
  }

  deactivate = () => {
    this.setState({ active: false })
  }

  render() {
    const { active } = this.state
    const { render } = this.props

    return (
      <div>
        {render(active, this.activate, this.deactivate)}
      </div>
    )
  }
}

Toggle.propTypes = {
  render: PropTypes.func.isRequired
}

export default Toggle
