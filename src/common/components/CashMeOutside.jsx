/* eslint react/no-find-dom-node: "off" */

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class CashMeOutside extends React.Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  provided = (node) => {
    this.wrapperRef = node
  }

  handleClickOutside = (event) => {
    const { wrapperRef } = this
    const { onClickOutside } = this.props

    // ReacDOM.findDOMNode is discouraged, but we need this
    // because redux-form doesn't allow it's refs to be accessed
    // from outside the form class :(
    const outside = !ReactDOM.findDOMNode(wrapperRef).contains(event.target)

    if (wrapperRef && outside) {
      onClickOutside()
    }
  }

  render() {
    const { provided } = this
    const { render } = this.props

    return (
      <div>
        {render(provided)}
      </div>
    )
  }
}

CashMeOutside.propTypes = {
  render: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func
}

CashMeOutside.defaultProps = {
  onClickOutside: () => {}
}

export default CashMeOutside
