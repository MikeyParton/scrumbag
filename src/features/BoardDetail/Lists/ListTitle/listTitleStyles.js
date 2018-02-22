import styled from 'styled-components'

export const TitleWrapper = styled.div`
  position: relative;
  font-weight: bold;
  margin-bottom: ${props => props.theme.grid}px;
  flex-grow: 1;
  margin-right: 5px;
  cursor: text;

  textarea {
    width: 100%;
    background-color: ${props => props.theme.colors.listBackground};
    border: none;
    resize: none;

    &:focus {
      background-color: white;
    }
  }
`

export const TitleOverlay = styled.div`
  position: absolute;
  background-color: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
