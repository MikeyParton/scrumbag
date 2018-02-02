import React from 'react'
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
    if (wrapperRef && !wrapperRef.contains(event.target)) {
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
