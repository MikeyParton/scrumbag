import React from 'react'
import EditNameForm from './EditNameForm'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  flex-grow: 1;
`

class CardTitle extends React.Component {
  state = {
    editing: false
  }

  toggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { editing } = this.state
    const { name } = this.props

    return (
      <Container>
        {
          editing
            ? <EditNameForm
                initialValues={{ name }}
                onCancel={this.toggle}
              />
            : <div onClick={this.toggle}>{name}</div>
        }
      </Container>
    )
  }
}

CardTitle.propTypes = {
  name: PropTypes.string.isRequired
}

export default CardTitle
