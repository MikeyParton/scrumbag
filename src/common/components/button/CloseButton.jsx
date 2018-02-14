import styled from 'styled-components'
import { darken } from 'polished'
import { Close } from '../icons'

const CloseButton = styled(Close)`
  font-size: 20px;
  cursor: pointer;
  color: #9c9d9e;
  flex-shrink: 0;

  &:hover {
    color: ${darken(0.2, '#9c9d9e')};
  }
`

export default CloseButton
