import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #cdd2d4;
  background-color: #e2e4e6;
  padding: 7px;
  outline: none;

  -webkit-transition: background-color 0.4s; /* Safari */
  transition: background-color 0.4s;

  &:focus {
    background-color: white;
  }
`

export default Input
