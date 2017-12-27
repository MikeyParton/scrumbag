import styled from 'styled-components'
import { darken } from 'polished'

const BaseCard = styled.div`
  background-color: lightgrey;
  border-radius: 10px;
  color: white;
  padding: 20px;

  -webkit-transition: background-color 0.25s;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${darken(0.10, 'lightgrey')};
  }
`

export default BaseCard
