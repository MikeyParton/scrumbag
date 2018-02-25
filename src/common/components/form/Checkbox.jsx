import React from 'react'
import styled from 'styled-components'
import Check from 'react-icons/lib/md/check'

const Container = styled.div`
  cursor: pointer;

  input {
    display: none;
  }

  .check {
    ${props => !props.checked ? 'display: none;' : ''};
    color: black;
  }

  &:hover {
    .check {
      ${(props) => {
        if (props.checked) return ''
        return `
          color: grey;
          opacity: 0.5;
          display: block;
        `
      }}
    }
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 20px;
  height: 20px;
`

const Checkbox = (props) => {
  const { name, value, handleChange } = props

  return (
    <Container
      onClick={handleChange}
      checked={value}
    >
      <Box>
        <Check className="check" />
      </Box>
      <input
        name={name}
        checked={value}
        type="checkbox"
      />
    </Container>
  )
}

export default Checkbox
