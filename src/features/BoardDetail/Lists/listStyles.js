import styled from 'styled-components'

const grid = 8

export const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? 'lightblue' : 'lightgrey')};
  display: flex;
  flex-direction: column;
  padding: ${grid}px;
  margin: 0 ${2 * grid}px 0 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
  max-height: 100%;
  box-sizing: border-box;
`

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: ${grid}px;
`

export const Dropzone = styled.div`
  min-height: 58px;
`

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: scroll;

  .card {
    margin-bottom: ${grid}px
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`

export const ScrollWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
`

export const ScrollZone = styled.div`
  position: absolute;
  ${props => props.top && 'top: 0;'}
  ${props => props.bottom && 'bottom: 0;'}
  bottom: 0;
  height: 40px;
  width: 100%;
  background-color: transparent;
`
