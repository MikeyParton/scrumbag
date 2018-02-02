import styled from 'styled-components'

export const BoardArea = styled.div`
  display: flex;
  padding: ${props => props.theme.grid * 2}px 0;
  align-items: flex-start;
  height: 100%;
  width: 100vw;
  overflow-x: auto;
  background-color: ${props => props.theme.boardBackgroundColor};
`
