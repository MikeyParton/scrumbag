import styled from 'styled-components'

export const BoardArea = styled.div`
  display: flex;
  padding: ${props => props.theme.grid * 2}px 0;
  align-items: flex-start;
  flex-grow: 1;
  width: 100vw;
  height: 100%;
  overflow-x: auto;
  background-color: ${props => props.theme.boardBackgroundColor};
`

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`
