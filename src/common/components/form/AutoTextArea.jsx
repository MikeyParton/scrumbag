import TextareaAutosize from 'react-autosize-textarea'
import styled from 'styled-components'

const AutoTextArea = styled(TextareaAutosize)`
  width: 100%;
  border: 0;
  resize: none;

  &:focus {
    outline:0;
  }
`

export default AutoTextArea
